import { useContext, useEffect, useState } from "react";
import Message from "../message";
import Conversation from "../conversation";
import DivServs from "../DCdivServ";
import UserSettingsFooter from "../footerUserSettings";
import classes from './friendMd.module.scss'
import { io } from 'socket.io-client'
import HeaderApp from "../headerApp";
import FollowUser from "../../modal/addFriend";
import { UserContext } from "../../../context/user/user.contex";
import Posts from "../posts";




function Messenger() {
    const token = sessionStorage.getItem('token')
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState('')
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [modalShow, setModalShow] = useState(false);
    const [user, setUser] = useContext(UserContext)
    const [socket,setSocket] = useState(null)
    const [conversationsId,setConversationsId] = useState([])
    const [filter,setFilter] = useState([])
 
    console.log(conversations)

    useEffect(() => {
        setSocket(io("http://localhost:4000"))
    }, [])

    useEffect(() => {
        socket?.on("getMessage", (data) => {
            setMessages([...messages, data])
        })
    }, [messages])


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
                setFilter(dat)
                setConversations(dat)
                dat.map(e => setConversationsId(e._id))
                
            } catch (err) {
                console.log(err)
            }
        }
        if (!user) {
            console.log('No convs')
        } else {
            getConversations()
        }
    }, [user, currentChat])


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
            await socket?.emit("join_chat", currentChat._id)
        };
        getMessages()
    }, [currentChat])

    const date = new Date()
    
    const handleSubmit = async (e) => {

        if (e.key === 'Enter') {
            e.preventDefault()
            const message = {
                date: date,
                file: user.file,
                username: user.username,
                senderId: user._id,
                text: newMessage,
                conversationId: currentChat._id,
            };

            socket?.emit("sendMessage", message)
            
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

    const handleFilter = e => {
        
        const convFiltered = conversations.filter(u => u.receiverName.toLowerCase().includes(e.target.value))
        setFilter(convFiltered)
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
           
            <DivServs handleCurrentServ={handleConv}></DivServs>
            <div className={classes.containerMd}>


                <div className={classes.inputDivMd}>
                    <input className={classes.inputSearch} onChange={handleFilter} type='text' placeholder='Busca una conversación'></input>
                </div>

                <section className={classes.secFriends}>
                    <header className={classes.headerMdList}>
                        <p>Amigos</p>
                        <button onClick={() => setModalShow(true)} className={classes.btnMd} >+</button>
                    </header>

                    <section className={classes.containerConversations}>
                        {conversations.length  === 0 ? <p>¿Sin amigos?</p> :
                        
                        filter.map((e, i) => (
                            <div className={classes.divFriend} key={i} onClick={() => setCurrentChat(e)}>
                             
                                <Conversation key={i} conversation={e} currentUser={user}></Conversation>
                            </div>
                        ))}

                    </section>
                </section>
                <div className={classes.userSetts} >

                    <UserSettingsFooter ></UserSettingsFooter>


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
                        </div> : 
                        
                        <div className={classes.divOpenConv}>
                            <p>Abre una conversaion</p>
                        </div>
                }

            </div>
            
                <div className={classes.activeUsersDiv}>

                    <Posts socket={socket}></Posts>
             
                </div>
    
        </div>
    )
}

export default Messenger