
import './style.css'
import DivFriend from '../DCmdList'
import DivServs from '../DCdivServ'
import { Link } from 'react-router-dom'
import { useUsername } from '../../../hooks/hook-name-user'
import { useState } from 'react'

function Chat() {

    const username = useUsername()

    return (

        <section className="div-app-discord">
            <DivServs></DivServs>
            <DivFriend></DivFriend>
             <section className='chat-container'>
            <header className="header-chat">
                    <p>{username}</p>
                <div className='group-header-chat'>
                    <p>Noti</p>
                    <p>Members</p>
                    <input className='input-chat-serv' type='text' placeholder='Buscar'></input>
                    <p>Help</p>
                </div>
            </header>

            <section className='chat'>
                    <div>
                        <p>Chat</p>
                    </div>
                       

                    <footer className='div-input-chat'>
                        <input placeholder='Enviar mensaje a #general' className='input-chat' type="text" />
                    </footer>
            </section>
        </section>
        </section>
       
    )
}

export default Chat