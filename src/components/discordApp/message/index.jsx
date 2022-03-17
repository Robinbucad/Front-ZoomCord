
import classes from './message.module.scss';

function Message({message}) {

    return(
        <div className={classes.msg}>
            <div>
                <p>Img</p>
            </div>
            
            <div>
            {message.text}
                <p>1 hour ago</p>
            </div>
        </div>
    )
}

export default Message