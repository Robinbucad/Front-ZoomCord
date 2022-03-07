
import React, { useEffect } from "react"
import UserSettings from "../../modal/settings"
import { useState } from "react";
import UserSettingsFooter from "../footerUserSettings";
import FriendList from "../DCfriendList";
import { Link } from "react-router-dom";
import { useFriends } from "../../hook-friendList";


function DivFriend() {

    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const friends = useFriends()

    console.log(friends)

    function handleShow () {
        if(show === false){
            
            setShow(true)
        }else{
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
                    <header className='header-list-friends'>
                        <p>MENSAJES DIRECTOS</p>
                        <button>+</button>
                    </header>

                    <div  className='info-friend'>
                
                        {friends.map((f) =><Link to={`/@me/${f.id}`}> <div  className='card-div'>
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