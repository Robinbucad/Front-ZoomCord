
import React, { useEffect } from "react"
import UserSettings from "../../modal/settings"
import { useState } from "react";
import UserSettingsFooter from "../footerUserSettings";
import { Link } from "react-router-dom";
import { useFriends } from '../../../hooks/hook-friendList/index'
import classes from './friendMd.module.scss'
import { useUsername } from "../../../hooks/hook-name-user";


function DivFriend() {
 
    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const friends = useFriends()
    console.log(friends)
    const user = useUsername()


    const [userChat,setUserChat] = useState(null)

 


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
                    {/**AQUI CONVERSACION */}


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