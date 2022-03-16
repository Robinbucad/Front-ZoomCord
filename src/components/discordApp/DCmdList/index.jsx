
import React, { useEffect } from "react"
import UserSettings from "../../modal/settings"
import { useState } from "react";
import UserSettingsFooter from "../footerUserSettings";
import { Link } from "react-router-dom";
import { useFriends } from '../../../hooks/hook-friendList/index'
import classes from './friendMd.module.scss'


function DivFriend() {

    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const friends = useFriends()

    

    console.log(friends)
   


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
            <div className={classes.containerMd} >
                <div className={classes.inputDivMd}>
                    <input className={classes.inputSearch} type='text' placeholder='Busca una conversación'></input>
                </div>

                <section className={classes.mdList}>
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


                    <div >

                        {friends.map((f, i) => f.map((e,i) => (
                            <Link key={i} style={{ textDecoration: 'none' }}   to={`/@me/${e._id}`}> <div key={i} className='card-div'>
                            <div className='img-user-friend'>

                            </div>

                            <div className='info-friend-user'>
                                <p className='friend'>{e.username}</p>
                               
                                <p>Chilling</p>
                            </div>

                        </div></Link>)
                        ))}



                    </div>
                </section>

                <div className={classes.userSetts} >
                    <UserSettingsFooter handleShow={handleShow}></UserSettingsFooter>


                </div>

            </div>
        </React.Fragment>
    )
}

export default DivFriend