import React from "react"
import Notification from "../../components/videocall/notification.jsx"
import Options from "../../components/videocall/option.jsx"
import VideoPlayer from "../../components/videocall/videoPlayer.jsx"


function VideoCall(){
    return(
        <React.Fragment>
        <VideoPlayer></VideoPlayer>         
            <Options>
                <Notification></Notification>
            </Options>
        </React.Fragment>
    )
}
export default VideoCall