
import { Children, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user/user.contex';
import { SocketContext } from '../../context/videoContext/videoContext';
import classes from './videocall.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {FaCopy,FaPhoneAlt,FaPhoneSlash} from 'react-icons/fa'

function Options() {


    const { me ,callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const [user, setUsername] = useContext(UserContext)
    

    useEffect(() => {
        setName(user?.username)
    }, [])
    const [showCopy, setShowCopy] = useState(false)
    const handleCopy = () => {
        if (!showCopy) {
            setShowCopy(true)
            setTimeout(() => {
                setShowCopy(false)
            }, 2000)
        }
    }

    return (
        <section className={classes.inputsCall}>
           
            <div>
         
                <p>User</p>
                <div className={classes.idCallerDiv}>
                    <input className={classes.inputCallSearch} value={name}></input>
                   
                    <CopyToClipboard text={me}>
                       {!showCopy ?  <button className={classes.btnCall} onClick={handleCopy}>{<FaCopy className={classes.copyStyle}></FaCopy>} Copy ID</button> : 
                       <button className={classes.btnCopied} onClick={handleCopy}>Copied!</button>
                       }
                    </CopyToClipboard>


                </div>

            </div>
            <div className={classes.acceptCallDiv}>

                <div>
                    <p>Llamar</p>
                </div>
                <div className={classes.inputCallAccept}>
                    <input className={classes.inputCallSearch} value={idToCall} onChange={(e) => setIdToCall(e.target.value)}></input>
                    {callAccepted && !callEnded ? <button onClick={leaveCall} className={classes.btnCall}> <FaPhoneSlash  className={classes.copyStyle}></FaPhoneSlash> Colgar</button> 
                    :
                    <button onClick={() => callUser(idToCall)} className={classes.btnCall}><FaPhoneAlt className={classes.copyStyle} ></FaPhoneAlt>  LLamar</button>}
                </div>
            </div>
         

        </section>
    )
}

export default Options