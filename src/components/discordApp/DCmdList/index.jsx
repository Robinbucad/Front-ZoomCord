import './style.css'
import React, { useEffect } from "react"
import UserSettings from "../../modal/settings"
import { useState } from "react";
import UserSettingsFooter from "../footerUserSettings";

import { Link } from "react-router-dom";
import { useFriends } from '../../../hooks/hook-friendList/index'


function DivFriend() {

    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const friends = useFriends()


    function handleShow() {
        if (show === false) {

            setShow(true)
        } else {
            setShow(false)
        }
    }




    return (

        <React.Fragment>
            <UserSettings show={show} fullscreen={fullscreen} setShow={() => handleShow(false)}></UserSettings>
            <div className='div-friends'>
                <div className='div-input-search-app'>
                    <input className='input-search-listfriends' type='text' placeholder='Busca una conversación'></input>
                </div>
                <div className='friend-nitro'>
                    <div className='card-div'>
                        <p>Amigos</p>
                    </div>

                    <div className='card-div'>
                        <p>Nitro</p>
                    </div>
                </div>

                <div className='friends-info-list'>
                    <header className="header-text-channel">
                        <p className='opt-title-serv'>MENSAJES DIRECTOS</p>
                        <button className="btn-add-chann">+</button>
                    </header>
                    

                    <div className='info-friend'>

                    {friends.map((f,i) => <Link  key={i} style={{textDecoration:'none'}} to={`/@me/${f.id}`}> <div className='card-div'>
                            <div className='img-user-friend'>

                            </div>

                            <div className='info-friend-user'>
                                <p className='friend'>{f.username}</p>
                                <p>Jugando a fortnite</p>
                            </div>

                        </div></Link>)}



                    </div>

                    <UserSettingsFooter handleShow={handleShow}></UserSettingsFooter>


                </div>

            </div>
        </React.Fragment>
    )
}

export default DivFriend