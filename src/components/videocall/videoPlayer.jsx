import { useContext } from 'react'
import { UserContext } from '../../context/user/user.contex';
import { SocketContext} from '../../context/videoContext/videoContext'
import classes from './videocall.module.scss'
import {FaPhoneAlt} from 'react-icons/fa'

function VideoPlayer() {

    const [user,setUser] = useContext(UserContext)
    const { callAccepted, myVideo, userVideo,answerCall, callEnded, stream, call } = useContext(SocketContext);
   

    return (
        <section className={classes.sectionContainer}>

            {stream ? <div className={classes.videoDiv}>
        
      
               
            <video className={classes.videoImg} playsInline muted ref={myVideo} autoPlay />
            </div> : ''}
    

            {callAccepted && !callEnded ? <div className={classes.videoDiv}>

            <video className={classes.videoImg} playsInline ref={userVideo} autoPlay />
            </div> :''}
            <div>
            {call.isReceivingCall && !callAccepted ? 
            <div className={classes.divAnswerCall}>
                <p className={classes.userCaller}>{call.name}...</p>
                <button className={classes.iconAnswerCall} onClick={answerCall}><FaPhoneAlt className={classes.iconPhoneAnswer}></FaPhoneAlt></button>
            </div> : ''}

          

            </div>
          
        </section>
    )
}

export default VideoPlayer