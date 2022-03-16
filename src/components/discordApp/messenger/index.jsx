import { useEffect, useState } from "react";
import { useUsername } from "../../../hooks/hook-name-user";
import Message from "../message";
import Conversation from "../conversation";
import './style.css'
import DivServs from "../DCdivServ";
import UserSettings from "../../modal/settings";
import UserSettingsFooter from "../footerUserSettings";
import classes from './friendMd.module.scss'

function Messenger() {
    const token = sessionStorage.getItem('token')
    const [conversations, setConversations] = useState([])
    const { user } = useUsername()
    const [currentChat, setCurrentChat] = useState('')
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);

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
    }, [user])


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
                console.log(dat)
            } catch (err) {
                console.log('error')
            }
        };
        getMessages()
    }, [currentChat])

    console.log(user._id)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = {
            senderId: user._id,
            text: newMessage,
            conversationId: currentChat._id
        };

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
        <div className="container-msg">
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

                {conversations.map((e, i) => (
                    <div key={i} onClick={() => setCurrentChat(e)}>
                        <Conversation key={i} conversation={e} currentUser={user}></Conversation>
                    </div>
                ))}
                <div className={classes.userSetts} >
                    <UserSettingsFooter handleShow={handleShow}></UserSettingsFooter>


                </div>
            </div>
            <div className="chat-box">

                {

                    currentChat ?
                        <div>

                            {messages.map(m => (
                                <Message message={m}></Message>
                            ))}
                            <div>
                                <textarea onChange={(e) => setNewMessage(e.target.value)} value={newMessage} className="chatMessageInput" placeholder="Escriba algo"></textarea>
                                <button onClick={handleSubmit}>Enviar</button>
                            </div>
                        </div> : <p>Open conversation to start a chat</p>
                }

            </div>

            <div className="user-active">
                <p>users</p>
            </div>


        </div>
    )
}

export default Messenger