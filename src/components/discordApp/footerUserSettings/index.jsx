
import { GearFill, Headset, Mic } from 'react-bootstrap-icons/'
import classes from './footerSetts.module.scss'

function UserSettingsFooter(props) {
    return (

        <footer className={classes.userSetts}>
            <div className={classes.userInfoSetts}>
                <div >
                    <p>IMG</p>
                </div>
                <div className={classes.userNameSetts} >
                    <p>BeZzK</p>
                    <p>#3616</p>
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