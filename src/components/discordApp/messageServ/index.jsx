
import classes from '../messenger/friendMd.module.scss';

function MessageServer({message}) {


    return (
        <div className={classes.msg}>
            <div>
                <img className={classes.imgMsg} src={message.img}></img>
            </div>

            <div>
                <div className={classes.usernameMsg}>
                    <p>{message.username}</p>
                    <p className={classes.dateMsg}>{message.date}</p>                 
                </div>

                <p className={classes.msgText}>{message.text}</p>
            </div>
        </div>
    )
}

export default MessageServer