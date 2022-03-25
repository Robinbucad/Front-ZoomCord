

import { useContext, useRef, useEffect, useState } from 'react'
import { GearFill } from 'react-bootstrap-icons/'
import { UserContext } from '../../../context/user/user.contex'
import classes from '../messenger/friendMd.module.scss'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import defaultImg from '../../../assets/img/default.jpg'
import UserSettings from '../../modal/settings'
import { IoMdNotifications } from 'react-icons/io'
import { SetNotifications } from '../../../context/notifications/notifications.context'


function UserSettingsFooter({ socket }) {
    // const socket = useRef()
    const token = sessionStorage.getItem('token')
    const [fullscreen] = useState(true);
    const [user, setUser] = useContext(UserContext)
    const [notifications, setNotifications] = useState([])
    const [show, setShow] = useState(false);
    const [openNots, setOpenNots] = useState(false)
    const [notiLength,setNotiLength] = useContext(SetNotifications)
    
    const handleShow = () => setShow(!show)

    const handleClick = () => {
        window.open('/videocall', '_blank')
    }


    const handleRead = () => {
        setNotifications([]);
        setOpenNots(false)
    }

   

    useEffect(() => {

        socket?.on("getNotification", (data) => {
       // setNotifications([...notifications, data])    
     
        })
    }, [notiLength])



    useEffect(() => {
        const getNotifications = async () => {
           
            try {
                const res = await fetch(`http://localhost:3001/notifications/${user._id}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                const dat = await res.json()
                setNotifications(dat)
                console.log(dat)
            } catch (err) {
                console.log(err)
            }
        }
       
        getNotifications()
    }, [user, socket])

    return (

        <footer className={classes.userSetts}>
            <div className={classes.userInfoSetts}>
                <div >
                    <img className={classes.userSettingsFooterImg} src={user.file === '' ? defaultImg : `http://localhost:3001/${user.file}`}></img>
                </div>
                <div className={classes.userNameSetts} >
                    <p>{user.username}</p>
                    <p>#{user._id.substring(0, 4).toUpperCase()}</p>
                </div>
            </div>
            {openNots === true ?
                <div className={classes.spanShowNot}>
                    {notifications.map((e, i) => (
                        <p>{e.senderName} Le ha dado like</p>
                    ))}
                    <div className={classes.btnDivRead}>

                        <button onClick={handleRead} className={classes.btnReaded}>Marcar como leido</button>
                    </div>
                </div>
                : ''}


            <div className={classes.btnsSettsDiv}>
                <p className={classes.numNotifications} >{notifications.length}</p>
                <button className={classes.btnCall} onClick={() => setOpenNots(!openNots)} >{<IoMdNotifications></IoMdNotifications>}</button>
                <button className={classes.btnCall} onClick={handleClick}><FaPhoneSquareAlt></FaPhoneSquareAlt></button>
                <button className={classes.btnOptsUser} onClick={handleShow}><GearFill ></GearFill></button>
                <UserSettings show={show} fullscreen={fullscreen} setShow={() => handleShow(false)}></UserSettings>
            </div>
        </footer>

    )
}

export default UserSettingsFooter