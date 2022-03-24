
import { Children, useContext, useState } from 'react';
import { VideoContext } from '../../context/videoContext/videoContext';
import classes from './videocall.module.scss'

function Options({children}) {

    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(VideoContext);
    const [idToCall, setIdToCall] = useState('');
  
    return (
        <section>
            <div>
                <p>{me}</p>
                <input value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <input value={idToCall} onChange={(e) => setIdToCall(e.target.value)}></input>
                {callAccepted && !callEnded ? <button onClick={leaveCall}>Colgar</button> : <button onClick={() => callUser(idToCall)}>LLamar</button>}
            </div>  
                {children}

        </section>
    )
}

export default Options