import { useContext } from 'react';
import { VideoContext } from '../../context/videoContext/videoContext';
import classes from './videocall.module.scss'

function Notification(){

    const { answerCall, call, callAccepted } = useContext(VideoContext);
   
    return(
        <section>
            {call.isReceivedCall && !callAccepted ? 
            <div>
                <h1>{call.name} is calling</h1>
                <button onClick={answerCall}>Coger</button>
            </div> : ''}
  
        </section>
    )
}

export default Notification