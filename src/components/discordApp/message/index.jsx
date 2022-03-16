
import './style.css'

function Message({message}) {

    return(
        <div className="message">
            <div className="messageTop">
                <p>Img</p>
            </div>
            {message.text}
            <div className="messageBottom">
                <p>1 hour ago</p>
            </div>
        </div>
    )
}

export default Message