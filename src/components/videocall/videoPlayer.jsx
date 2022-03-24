import { useContext } from 'react'
import { VideoContext } from '../../context/videoContext/videoContext'
import classes from './videocall.module.scss'

function VideoPlayer() {


    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(VideoContext)


    return (
        <section className={classes.sectionContainer}>

            {stream ? <div className={classes.videoDiv}>

               
                <video playsInline muted ref={myVideo} autoPlay/>
            </div> : ''}
    

            {callAccepted && !callEnded ? <div className={classes.videoDiv}>

                <video playsInline ref={userVideo} autoPlay/>
            </div> : <p>Hola</p>}

        </section>
    )
}

export default VideoPlayer