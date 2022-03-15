

import DivFriend from '../DCmdList'
import DivServs from '../DCdivServ'
import { Link } from 'react-router-dom'
import { useUsername } from '../../../hooks/hook-name-user'
import { useState } from 'react'
import classes from './chat.module.scss'

function Chat() {

    const username = useUsername()
    console.log(username)

    return (

        <section className={classes.chatFriend}>
            <DivServs></DivServs>
            <DivFriend></DivFriend>
            <section className={classes.chatContainer}>
                <header className={classes.headerChat}>
                    <p>{username}</p>
                    <div className={classes.groupHeaderChat}>
                        <p>Noti</p>
                        <p>Members</p>
                        <input className={classes.inputChatSearch} type='text' placeholder='Buscar'></input>
                        <p>Help</p>
                    </div>
                </header>

                <section className={classes.chat}>
                    <div className={classes.conversation}>
                        <div className={classes.msg}>
                            <p>IMG</p>
                            <div>
                                <p>Robin</p>
                                <p>Hola este es mi mensaje</p>
                            </div>
                        </div>

                        <div className={classes.msg}>
                            <p>IMG</p>
                            <div>
                                <p>Paco</p>
                                <p>Hola este es mi mensaje2</p>
                            </div>
                        </div>

                        <div className={classes.msg}>
                            <p>IMG</p>
                            <div>
                                <p>Robin</p>
                                <p>Hola este es mi mensaje3</p>
                            </div>
                        </div>
                    </div>


                    <footer className={classes.divInputChat}>
                        <input placeholder='Enviar mensaje a #general' className={classes.inputChat} type="text" />
                    </footer>
                </section>
            </section>
        </section>

    )
}

export default Chat