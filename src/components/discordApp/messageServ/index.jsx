
import classes from '../message/message.module.scss';

function MessageServer({message}) {

    return(
        <div className={classes.msg}>
            <div>
                <p>Img</p>
            </div>
            
            <div>
                <p>MEnsaje</p>
                <p>1 hour ago</p>
            </div>
        </div>
    )
}

export default MessageServer