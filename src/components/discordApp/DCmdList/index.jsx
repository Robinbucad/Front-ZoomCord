
import React from "react"
import UserSettings from "../../modal/settings"
import { useState } from "react";

function DivFriend() {

    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);

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





                    <div className='info-friend'>
                        <div className='card-div'>
                            <div className='img-user-friend'>

                            </div>

                            <div className='info-friend'>
                                <p className='friend'>Tyles.</p>
                                <p>Jugando a fortnite</p>
                            </div>

                        </div>

                        <div className='card-div'>
                            <div className='img-user-friend'>

                            </div>

                            <div className='info-friend'>
                                <p className='friend'>Tyles.</p>
                                <p>Jugando a fortnite</p>
                            </div>

                        </div>

                        <div className='card-div'>
                            <div className='img-user-friend'>

                            </div>

                            <div className='info-friend'>
                                <p className='friend'>Tyles.</p>
                                <p>Jugando a fortnite</p>
                            </div>

                        </div>

                        <div className='card-div'>
                            <div className='img-user-friend'>

                            </div>

                            <div className='info-friend'>
                                <p className='friend'>Tyles.</p>
                                <p>Jugando a fortnite</p>
                            </div>

                        </div>
                    </div>

                    <footer className='footer-user'>
                        <div className='user-footer-img'>
                            <p>HOLA</p>
                        </div>
                        <div className='user-info-footer'>
                            <p className='user-name'>BeZzK</p>
                            <p>#3616</p>
                        </div>
                        <div className='user-info-opts'>
                            <p>M</p>
                            <p>E</p>
                            <button onClick={handleShow}>Set</button>
                        </div>
                    </footer>


                </div>

            </div>
        </React.Fragment>
    )
}

export default DivFriend