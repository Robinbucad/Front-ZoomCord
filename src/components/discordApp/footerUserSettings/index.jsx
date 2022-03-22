
import { useContext } from 'react'
import { GearFill, Headset, Mic } from 'react-bootstrap-icons/'
import { UserContext } from '../../../context/user/user.contex'

//import classes from './footerSetts.module.scss'
import classes from '../messenger/friendMd.module.scss'


function UserSettingsFooter(props) {

    const [user,setUser,userId,setUserId] = useContext(UserContext)
    const id = userId.substring(0,4)
    console.log(userId)
    return (

        <footer className={classes.userSetts}>
            <div className={classes.userInfoSetts}>
                <div >
                    <img className={classes.userSettingsFooterImg} src={user.img}></img>
                </div>
                <div className={classes.userNameSetts} >
                    <p>{user.username}</p>
                    <p>#{id}</p>
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