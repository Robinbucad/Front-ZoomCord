import { useEffect, useState } from "react";
import { useUsername } from "../../../hooks/hook-name-user";
import Message from "../message";
import Conversation from "../conversation";
import DivServs from "../DCdivServ";
import UserSettings from "../../modal/settings";
import UserSettingsFooter from "../footerUserSettings";
import classes from './friendMd.module.scss'
import {io} from 'socket.io-client'
import { useRef } from "react";

function Messenger() {
    const token = sessionStorage.getItem('token')
    const [conversations, setConversations] = useState([])
    const { user } = useUsername()
    const [currentChat, setCurrentChat] = useState('')
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const socket = useRef()
    const [arrivalMessage, setArrivalMessage] = useState(null)

useEffect(() => {
    socket.current = io("ws://localhost:4000")
    socket.current.on("getMessage",data => {
        setArrivalMessage(
            console.log(data)
        )
    })
},[])

useEffect(() => { // CONTROLO EL MENSAJE LLEGUE AL DESTINATARIO, Y ACTUALIZE EL USEEFFECT PARA QUE LLEGUE AL MOMENTO
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
    setMessages(prev =>[...prev,arrivalMessage]) 
},[arrivalMessage,currentChat])
    

   useEffect(() => {
       socket.current.emit("addUser", user._id);
       socket.current.on("getUsers",users => {
           //console.log(users)
       })
   },[user])
    

    useEffect(() => {
        const getConversations = async () => {

            const res = await fetch('http://localhost:3001/conversation', {
                method: 'get',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const dat = await res.json()
            setConversations(dat)


        }
        getConversations()
    }, [user._id])


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
        };
        getMessages()
    }, [currentChat])



    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = {
            senderId: user._id,
            text: newMessage,
            conversationId: currentChat._id
        };

        const receiverId = currentChat.members.find(m => m !== user._id)

        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text:newMessage,
        })

        try {
            const res = await fetch('http://localhost:3001/message/', {
                method: 'post',
                body: JSON.stringify(message),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,

                },
            })
            const dat = await res.json()
            console.log(dat)
            setMessages(m => [...m, message])
            setNewMessage('')
        } catch (err) {
            console.log(err)
        }
    }


    function handleShow() {
        if (show === false) {

            setShow(true)
        } else {
            setShow(false)
        }
    }


    return (
        <div className={classes.containerApp}>
            <UserSettings show={show} fullscreen={fullscreen} setShow={() => handleShow(false)}></UserSettings>
            <DivServs></DivServs>
            <div className={classes.containerMd}>


                <div className={classes.inputDivMd}>
                    <input className={classes.inputSearch} type='text' placeholder='Busca una conversación'></input>
                </div>
                <div>
                    <div >
                        <p>Amigos</p>
                    </div>

                    <div >
                        <p>Nitro</p>
                    </div>
                </div>


                <header className={classes.headerMdList}>
                    <p >MENSAJES DIRECTOS</p>
                    <button className={classes.btnMd} >+</button>
                </header>

                <section className={classes.containerConversations}>
                    {conversations.map((e, i) => (
                        <div key={i} onClick={() => setCurrentChat(e)}>
                            <Conversation key={i} conversation={e} currentUser={user}></Conversation>
                        </div>
                    ))}
                </section>

                <div className={classes.userSetts} >
                    <UserSettingsFooter handleShow={handleShow}></UserSettingsFooter>


                </div>
            </div>
            <div className={classes.chatContainer}>

                {

                    currentChat ?
                        <div className={classes.conversation}>
                            <div className={classes.chatBox}>
                                {messages.map(m => (
                                    <div>
                                        <Message message={m}></Message>
                                    </div>
                                ))}
                            </div>
                            <div className={classes.divInputChat}>
                                <input type='text' onChange={(e) => setNewMessage(e.target.value)} value={newMessage} className={classes.inputChat} placeholder="Escriba algo"></input>
                                <button onClick={handleSubmit}>Enviar</button>
                            </div>
                        </div> : <p>Open conversation to start a chat</p>
                }

            </div>

            <div className={classes.activeUsersDiv}>
                <p>users</p>
            </div>


        </div>
    )
}

export default Messenger