import io from 'socket.io-client'
import DivFriend from '../DCmdList'
import DivServs from '../DCdivServ'
import { Link } from 'react-router-dom'
import { useUsername } from '../../../hooks/hook-name-user'
import { useState } from 'react'
import classes from './chat.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
const socket = io.connect("http://localhost:3001")


function Chat() {

    let {id} = useParams()

    const {idUser, userName} = useUsername()

    const [currentMsg, setCurrentMsg] = useState('')
    const [chat,setChat] = useState([])

    const sendMsg = async (e) => {
        if(e.key === 'Enter'){
            const messageData = {
                room:id,
                author:userName,
                message:currentMsg,
                time:new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            };
            await socket.emit("send_message", messageData)
            setCurrentMsg('')
        }        
    }    

    useEffect(() => {
        socket.on("receive_message",data => {
            setChat(list => [...list,data])
            
        })
    },[socket])


    console.log(chat)

   
    return (

        <section className={classes.chatFriend}>
            <DivServs></DivServs>
            <DivFriend></DivFriend>
            <section className={classes.chatContainer}>
                <header className={classes.headerChat}>
                   <p></p>
                    <div className={classes.groupHeaderChat}>
                        <p>Noti</p>
                        <p>Members</p>
                        <input className={classes.inputChatSearch} type='text' placeholder='Buscar'></input>
                        <p>Help</p>
                    </div>
                </header>

                <section className={classes.chat}>
                    <div className={classes.conversation}>
                         
                          {chat.map(e => (
                               <div className={classes.msg}>
                               <p>IMG</p>
                               <div>
                                   <p>{e.author}</p>
                                   <p>{e.message}</p>
                               </div>
                           </div>
                          ))}
                         
                    
                    </div> 

                  

                    <footer className={classes.divInputChat}>
                        <input placeholder='Enviar mensaje a #general' onKeyPress={sendMsg} onChange={e => setCurrentMsg(e.target.value)} className={classes.inputChat} type="text" />
                    </footer>
                </section>
            </section>
    
        </section>

    )
}

export default Chat