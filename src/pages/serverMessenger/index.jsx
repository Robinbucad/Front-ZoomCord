import classes from '../../components/discordApp/messenger/friendMd.module.scss'
import { useState } from 'react';
import UserSettingsFooter from '../../components/discordApp/footerUserSettings';
import UserSettings from '../../components/modal/settings';
import DivServs from '../../components/discordApp/DCdivServ';
import { io } from 'socket.io-client'
import { useRef } from 'react'
import { useEffect } from 'react';
import MessageServer from '../../components/discordApp/messageServ';
import { useUsername } from '../../hooks/hook-name-user';
import {Link} from 'react-router-dom'
import logo from '../../assets/img/discord/serv/servDisc.png'
import CreateServModal from '../../components/modal/createServ';

function ServerMessenger() {
    const token = sessionStorage.getItem('token')
    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const { user } = useUsername()
    const [currentServ, updateCurrentServ] = useState('')
    const [currentServId,updateCurrentServId] = useState('')
    const [messages,setMessages] = useState([])
    const [newMessage,setNewMessage] = useState('')
    const socket = useRef()

    function handleShow() {
        if (show === false) {

            setShow(true)
        } else {
            setShow(false)
        }
    }
    const handleCurrentServ = serv => {
        updateCurrentServ(serv.name)
        updateCurrentServId(serv._id)
    }


    useEffect(() => {
        socket.current = io("ws://localhost:4000")
    },[])

    useEffect(() => {
        socket.current.on("getServMsg",(data) => {
            setMessages([...messages,data])
        })
    },[messages])
   
    useEffect(() => {
        const getServMsg = async() => {
            try{
                const res = await fetch(`http://localhost:3001/servMsg/${currentServId}`,{
                    method:'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                const dat = await res.json()
                setMessages(dat)
            }catch(err){
                console.log(err)
            }
             socket.current.emit("join_serv", currentServId)
        }
        getServMsg()
    },[currentServId])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const message = {
            senderId:user._id,
            text:newMessage,
            conversationId:currentServId
        }

        socket.current.emit("sendServMsg", message)

        try{
            const res = await fetch('http://localhost:3001/servMsg/',{
                method:'post',
                body:JSON.stringify(message),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`

                },
            })
            const dat = await res.json()
            setNewMessage('')
            setMessages([...messages, dat])
            
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className={classes.containerApp}>

            <UserSettings show={show} fullscreen={fullscreen} setShow={() => handleShow(false)}></UserSettings>
          <DivServs handleCurrentServ={handleCurrentServ}  ></DivServs> 
   
            <div className={classes.containerMd}>


                <div className={classes.DivServList}>
                    <h4>{currentServ}</h4>

                </div>
                <section>
                    <header className={classes.headerMdList}>
                        <p >Canales de texto</p>

                    </header>
                    {/**AQUI CANALES DE TEXTO> */}

                </section>


                <section>
                    <header className={classes.headerMdList}>
                        <p >Canales de Voz</p>

                    </header>
                    {/**AQUI CANALES DE VOZ */}

                </section>



                <div className={classes.userSetts} >
                    <UserSettingsFooter handleShow={handleShow}></UserSettingsFooter>


                </div>
            </div>
            <div className={classes.chatContainer}>
                <header className={classes.headerChat}>
                    <p>NAME CHANNEL</p>
                    <div className={classes.settingsChat}>
                        <p>Call</p>
                        <p>Videocall</p>
                        <input placeholder="Buscar" className={classes.inputSearchMsgChat} type='text'></input>

                    </div>
                </header>

                <div className={classes.conversation}>
                    <div className={classes.chatBox}>
                       {messages.map(m => (
                            <MessageServer message={m}></MessageServer>
                       ))}
                    </div>
                    <div className={classes.divInputChat}>
                        <input value={newMessage} type='text' className={classes.inputChat} onChange={(e) => setNewMessage(e.target.value)} placeholder="Escriba algo"></input>
                        <button onClick={handleSubmit} >Enviar</button>
                    </div>
                </div>

            </div>

            <div className={classes.activeUsersDiv}>
                <p>users</p>
            </div>


        </div>
    )
}

export default ServerMessenger