import {  useContext, useEffect, useState } from "react";
import { useUsername } from "../../../hooks/hook-name-user";
import Message from "../message";
import Conversation from "../conversation";
import DivServs from "../DCdivServ";
import UserSettings from "../../modal/settings";
import UserSettingsFooter from "../footerUserSettings";
import classes from './friendMd.module.scss'
import { io } from 'socket.io-client'
import { useRef } from "react";
import HeaderApp from "../headerApp";
import FollowUser from "../../modal/addFriend";
import { UserContext } from "../../../context/user/user.contex";




function Messenger() {
    const token = sessionStorage.getItem('token')
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState('')
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const socket = useRef()
    const [hide, updateHide] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [user,setUser] = useContext(UserContext)
    console.log(messages)

    useEffect(() => {
        socket.current = io("ws://localhost:4000")

    }, [])

    useEffect(() => {
        socket.current.on("getMessage", (data) => {
            setMessages([...messages, data])
        })

    }, [messages])



    useEffect(() => {
        socket.current.emit("addUser", user._id);
    }, [user])


    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await fetch(`http://localhost:3001/conversation/${user._id}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const dat = await res.json()
                setConversations(dat)
                console.log(dat)
            } catch (err) {
                console.log(err)
            }
        }
        if (!user) {
            console.log('No convs')
        } else {
            getConversations()
        }
    }, [user,currentChat])


    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await fetch(`http://localhost:3001/message/${currentChat._id}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                const dat = await res.json()
                setMessages(dat)
         
            } catch (err) {
                console.log('error')
            }
            await socket.current.emit("join_chat", currentChat._id)
        };
        getMessages()
    }, [currentChat])

    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const takeDate = `${hours}:${minutes}`

    const handleSubmit = async (e) => {

        if (e.key === 'Enter') {
            e.preventDefault()
            const message = {
                date: takeDate,
                img: user.img ,
                username: user.username ,
                senderId:user._id,
                text: newMessage,
                conversationId: currentChat._id,
            };

            socket.current.emit("sendMessage", message)
            try {
                const res = await fetch('http://localhost:3001/message/', {
                    method: 'post',
                    body: JSON.stringify(message),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`

                    },
                })
                const dat = await res.json()
                setMessages([...messages, dat])
                setNewMessage('')
            } catch (err) {
                console.log(err)
            }
        }
    }


    function handleShow() {
        if (show === false) {

            setShow(true)
        } else {
            setShow(false)
        }
    }

    const handleConv = e => {
        console.log('')
    }

    return (
        <div className={classes.containerApp}>
            <FollowUser
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <UserSettings show={show} fullscreen={fullscreen} setShow={() => handleShow(false)}></UserSettings>
            <DivServs handleCurrentServ={handleConv}></DivServs>
            <div className={classes.containerMd}>


                <div className={classes.inputDivMd}>
                    <input className={classes.inputSearch} type='text' placeholder='Busca una conversación'></input>
                </div>

                <section className={classes.secFriends}>
                    <header className={classes.headerMdList}>
                        <p>Amigos</p>
                        <button onClick={() => setModalShow(true)} className={classes.btnMd} >+</button>
                    </header>

                    <section className={classes.containerConversations}>
                    {conversations.map((e, i) => (
                            <div className={classes.divFriend} key={i} onClick={() => setCurrentChat(e)}>
                                <Conversation key={i} conversation={e} currentUser={user}></Conversation>
                            </div>
                        ))}           
                     
                    </section>
                </section>
                <div className={classes.userSetts} >
                    <UserSettingsFooter  handleShow={handleShow}></UserSettingsFooter>


                </div>
            </div>
            <div className={classes.chatContainer}>

                <HeaderApp currentChat={currentChat}></HeaderApp>

                {

                    currentChat ?
                        <div className={classes.conversation}>

                            <div className={classes.chatBox}>
                                {messages.map((m, i) => (

                                    <Message key={i} message={m} currentChat={currentChat} conversation={conversations} ></Message>

                                ))}
                            </div>
                            <div className={classes.divInputChat}>
                                <input type='text' onChange={(e) => setNewMessage(e.target.value)} value={newMessage} onKeyPress={handleSubmit} className={classes.inputChat} placeholder="Escriba algo"></input>
                            </div>
                        </div> : <p>Abre una conversaion</p>
                }

            </div>

            <div className={classes.activeUsersDiv}>
                <p>users</p>
            </div>


        </div>
    )
}

export default Messenger