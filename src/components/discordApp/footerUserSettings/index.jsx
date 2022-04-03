

import { useContext, useRef, useEffect, useState } from 'react'
import { GearFill } from 'react-bootstrap-icons/'
import { UserContext } from '../../../context/user/user.contex'
import classes from '../messenger/friendMd.module.scss'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import defaultImg from '../../../assets/img/default.jpg'
import UserSettings from '../../modal/settings'
import { IoMdNotifications } from 'react-icons/io'
import defaultProfile from '../../../assets/img/default.jpg'
import { useTranslation } from 'react-i18next'


function UserSettingsFooter() {

    const token = sessionStorage.getItem('token')
    const [fullscreen] = useState(true);
    const [user, setUser] = useContext(UserContext)
    const [notifications, setNotifications] = useState([])
    const [show, setShow] = useState(false);
    const [openNots, setOpenNots] = useState(false)
    const handleShow = () => setShow(!show)
    const [d] = useTranslation("discordApp")

    const handleClick = () => {
        window.open('/videocall', '_blank')
    }
  

    const handleRead = async() => {
         setNotifications([]);
         setOpenNots(false)    
         try {
            const res = await fetch(`https://aqueous-ocean-87434.herokuapp.com/notifications/${user._id}`, {
                method: 'delete',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            const dat = await res.json()
          
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const getNotifications = async () => {
           
            try {
                const res = await fetch(`https://aqueous-ocean-87434.herokuapp.com/notifications/${user._id}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                const dat = await res.json()
                setNotifications(dat)
      
            } catch (err) {
                console.log(err)
            }
        }
       
        getNotifications()
    }, [user])

    return (

        <footer className={classes.userSetts}>
            <div className={classes.userInfoSetts}>
                <div >
                    <img className={classes.userSettingsFooterImg} src={user.file === '' ? defaultImg : `https://aqueous-ocean-87434.herokuapp.com/${user.file}`}></img>
                </div>
                <div className={classes.userNameSetts} >
                    <p>{user.username}</p>
                    <p>#{user._id.substring(0, 4).toUpperCase()}</p>
                </div>
            </div>
            {openNots === true ?
                <div className={classes.spanShowNot}>
                    {notifications.map((e, i) => (
                        <div key={i} className={classes.divShowNot}>
                             <p>{e.senderName} {d("discordApp.footerNot")}</p>
                             <img className={classes.imgLikeNot} src={e.file === '' ? defaultProfile : `https://aqueous-ocean-87434.herokuapp.com/${e.file}` }></img>
                        </div>    
                       
                    ))}
                    <div className={classes.btnDivRead}>

                        <button onClick={handleRead} className={classes.btnReaded}>{d("discordApp.btnNot")}</button>
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