import classes from '../messenger/friendMd.module.scss'
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { UserContext } from '../../../context/user/user.contex'
import { SetNotifications } from '../../../context/notifications/notifications.context'

function Posts({socket}) {
    const token = sessionStorage.getItem('token')
    const [publications, setPublications] = useState([])
    const [user,setUser] = useContext(UserContext)
    const [likesPost,setLikesPost] = useState([])
    const [notiLength,setNotiLength] = useContext(SetNotifications)
    

    useEffect(() => {
        const fetchPublications = async () => {
            const res = await fetch('http://localhost:3001/publications/', {
                method: 'get',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const dat = await res.json()
            setPublications(dat)
            dat.map(e => setLikesPost(e.likes))
        }
        fetchPublications()
    }, [])



const handleLikes = async (e) => {

    
        setNotiLength(notiLength+1)

        if(likesPost.some(d => d === e.username)){
           const finding = likesPost.findIndex(d => d === e.username)
            likesPost.splice(finding, 1)
            setLikesPost([...likesPost])
        
        }else{
            likesPost.push(e.username)
            setLikesPost([...likesPost])
        }

        const not = {
            senderName:user.username,
            receiverName:e.username,
            receiverId:e.id
        }
        console.log(not)
       await socket?.emit("sendNotification", not)

    
        const liked = { _id:user._id, username:user.username, }    

        try{
            const res = await fetch(`http://localhost:3001/publications/${e._id}`,{
                method:'PATCH',
                body:JSON.stringify(liked),
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            
            const dat = await res.json()
            
        }catch(err){

        }


        try{
            const res = await fetch(`http://localhost:3001/notifications`,{
                method:'post',
                body:JSON.stringify({
                    receiverId:e.id,
                    receiverName:e.username,
                    senderName:user.username
                }),
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            const dat = await res.json()
            socket.emit("getNotiLength",dat)
        }catch(err){
            console.log(err)
        }
        
    }

    return (
        <React.Fragment>

            <section className={classes.sectionCards}>
                {publications.map((e,i) => (
                    <section key={i} className={classes.cardPost}>
        
                        <img className={classes.imgPost} src={`http://localhost:3001/${e.file}`} />
                        <div className={classes.bodyPost}>
                     
                            <h2 className={classes.titlePost}>{e.username}</h2>
                       
                           
                            <p className={classes.descTop}>
                                {e.description}
                            </p>
                            <div className={classes.likeComment}>
                                <div onClick={() => handleLikes(e)} className={classes.heartShapeRed}>

                                </div>
                                
                                <p>{likesPost.length}</p>
                            </div>
                        </div>
                    </section>

                ))}

            </section>
        </React.Fragment>

    )
}

export default Posts