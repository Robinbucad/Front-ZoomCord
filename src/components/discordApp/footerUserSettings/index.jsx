

import { useContext } from 'react'
import { GearFill, Headset, Mic } from 'react-bootstrap-icons/'
import { UserContext } from '../../../context/user/user.contex'
import classes from '../messenger/friendMd.module.scss'


function UserSettingsFooter(props) {
    const [user,setUser] = useContext(UserContext)


    return (

        <footer className={classes.userSetts}>
            <div className={classes.userInfoSetts}>
                <div >
                    <img className={classes.userSettingsFooterImg} src={user.img}></img>
                </div>
                <div className={classes.userNameSetts} >
                    <p>{user.username}</p>
                    <p>#{user._id.substring(0,4)}</p>
                </div>
            </div>

            <div className={classes.btnsSettsDiv}>
                <button className={classes.btnOptsUser} ><Mic></Mic></button>
                <button className={classes.btnOptsUser} ><Headset></Headset></button>
                <button className={classes.btnOptsUser} onClick={props.handleShow}><GearFill ></GearFill></button>

            </div>
        </footer>

    )
}

export default UserSettingsFooter