import io from 'socket.io-client'
import DivFriend from '../DCmdList'
import DivServs from '../DCdivServ'
import { Link } from 'react-router-dom'
import { useUsername } from '../../../hooks/hook-name-user'
import { useState } from 'react'
import classes from './chat.module.scss'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'



function Chat() {
    const ENDPOINT = "http://localhost:3001";

    let {id} = useParams()
    const {idUser, userName} = useUsername()

    const [currentMsg, setCurrentMsg] = useState('')
    const [chat,setChat] = useState([])

        console.log(id)

    useEffect(() => {
        const getConversations = async() => {
            const res = await fetch('')
        }
    })

    

   
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
                         
                          {chat.map((e,i) => (
                               <div key={i} className={classes.msg}>
                               <p>IMG</p>
                               <div>
                                   <p>{e.author}</p>
                                   <p>{e.message}</p>
                               </div>
                           </div>
                          ))}
                         
                    
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