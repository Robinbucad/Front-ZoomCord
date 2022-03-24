import React from "react"
import Options from "../../components/videocall/option.jsx"
import VideoPlayer from "../../components/videocall/videoPlayer.jsx"
import classes from '../../components/videocall/videocall.module.scss'
import ContextProvider from "../../context/videoContext/videoContext.provider.jsx"

function VideoCall() {
    return (
        <ContextProvider>
            <div className={classes.containerPageVideo}>
                <section className={classes.containerVid}>
                    <VideoPlayer></VideoPlayer>
                    <footer className={classes.footerVideocall}>
                        <Options>
                           
                        </Options>
                    </footer>

                </section>

            </div>
        </ContextProvider>



    )
}
export default VideoCall