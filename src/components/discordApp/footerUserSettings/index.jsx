

import { useContext } from 'react'
import { GearFill } from 'react-bootstrap-icons/'
import { UserContext } from '../../../context/user/user.contex'
import classes from '../messenger/friendMd.module.scss'
import{FaPhoneSquareAlt} from 'react-icons/fa'
import defaultImg from '../../../assets/img/default.jpg'

function UserSettingsFooter(props) {
    const [user,setUser] = useContext(UserContext)
    const handleClick = () => {
        window.open('/videocall','_blank')
    }

    return (

        <footer className={classes.userSetts}>
            <div className={classes.userInfoSetts}>
                <div >
                    <img className={classes.userSettingsFooterImg} src={user.file === '' ? defaultImg : `http://localhost:3001/${user.file}` }></img>
                </div>
                <div className={classes.userNameSetts} >
                    <p>{user.username}</p>
                    <p>#{user._id.substring(0,4)}</p>
                </div>
            </div>

            <div className={classes.btnsSettsDiv}>
                <button className={classes.btnCall} onClick={handleClick}><FaPhoneSquareAlt></FaPhoneSquareAlt></button>
                <button className={classes.btnOptsUser} onClick={props.handleShow}><GearFill ></GearFill></button>

            </div>
        </footer>

    )
}

export default UserSettingsFooter