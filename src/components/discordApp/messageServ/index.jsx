import {format} from 'timeago.js'
import classes from '../messenger/friendMd.module.scss';
import defaultPicture from '../../../assets/img/default.jpg'

function MessageServer({message}) {
    return (
        <div className={classes.msg}>
            <div>
                <img className={classes.imgMsg} src={message.file === '' ? defaultPicture : `https://aqueous-ocean-87434.herokuapp.com/${message.file}`}></img>
            </div>

            <div>
                <div className={classes.usernameMsg}>
                    <p>{message.username}</p>
                    <p className={classes.dateMsg}>{format(message.date)}</p>                 
                </div>

                <p className={classes.msgText}>{message.text}</p>
            </div>
        </div>
    )
}

export default MessageServer