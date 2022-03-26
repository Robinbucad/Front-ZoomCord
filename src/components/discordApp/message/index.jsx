import {format} from 'timeago.js'
import classes from '../messenger/friendMd.module.scss';
import defaultProf from '../../../assets/img/default.jpg'

function Message({ message}) {

    return (
        <div className={classes.msg}>
            <div>
                <img className={classes.imgMsg} src={message.file === '' ? defaultProf : `http://localhost:3001/${message.file}`}></img>
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

export default Message