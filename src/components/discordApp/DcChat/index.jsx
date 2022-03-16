import io from 'socket.io-client'

import DivServs from '../DCdivServ'
import { Link } from 'react-router-dom'
import { useUsername } from '../../../hooks/hook-name-user'
import { useState } from 'react'
import classes from './chat.module.scss'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'



function Chat() {
    const ENDPOINT = "http://localhost:3001";
    let token = sessionStorage.getItem('token')
    let {id} = useParams()
    const [conversations,setConversations] = useState([])
    const [currentChat,setCurrentChat] = useState(null)
    const [messages,setMessages] = useState([])
    const [currentMsg, setCurrentMsg] = useState('')
    
    

        useEffect(() => {
            const getConversations = async() => {
                try{
                    const res = await fetch(`http://localhost:3001/users/${id}`,{
                        method:'get',
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                    const dat = await res.json()
                    setConversations(dat)
                }catch(err){
                    console.log(err)
                }
            }
            getConversations()
    
        },[id])
    

   
    return (

        <section className={classes.chatFriend}>
            <DivServs></DivServs>
            <section className={classes.chatContainer}>
                <header className={classes.headerChat}>
                   <p>{conversations.username}</p>
                    <div className={classes.groupHeaderChat}>
                        <p>Noti</p>
                        <p>Members</p>
                        <input className={classes.inputChatSearch} type='text' placeholder='Buscar'></input>
                        <p>Help</p>
                    </div>
                </header>

                <section className={classes.chat}>
                    <div className={classes.conversation}>
                         {
                             currentChat ?  currentChat.map((e,i) => (
                                <div key={i} className={classes.msg}>
                                <p>IMG</p>
                                <div>
                                    <p>{e.author}</p>
                                    <p>{e.message}</p>
                                </div>
                            </div>
                           )): <p>Escribe para comenzar el chat</p>
                         }
                         
                         
                    
                    </div> 

                  

                    <footer className={classes.divInputChat}>
                        <input placeholder='Enviar mensaje a #general'  onChange={e => setCurrentMsg(e.target.value)} className={classes.inputChat} type="text" />
                    </footer>
                </section>
            </section>
    
        </section>

    )
}

export default Chat