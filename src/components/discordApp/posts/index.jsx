import classes from '../messenger/friendMd.module.scss'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/user/user.contex'

function Posts() {
    const token = sessionStorage.getItem('token')
    const [publications, setPublications] = useState([])
    const [user, setUser] = useContext(UserContext)
    const [likesPost, setLikesPost] = useState([])

    

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
        }
        fetchPublications()
    }, [])



    const handleLikes = async (e) => {

        if (e.likes.some(d => d === user.username)) {

            const finding = e.likes.findIndex(d => d === user.username)
            console.log(finding)
            const unliked = e.likes.splice(finding, 1)
            setLikesPost(unliked)
        } else {
            const like = e.likes.push(user.username)
            setLikesPost(like)
        }

        const liked = { _id: user._id, username: user.username, }

        try {
            const res = await fetch(`http://localhost:3001/publications/${e._id}`, {
                method: 'PATCH',
                body: JSON.stringify(liked),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })

            const dat = await res.json()

        } catch (err) {

        }


        try {
            const res = await fetch(`http://localhost:3001/notifications`, {
                method: 'post',
                body: JSON.stringify({
                    receiverId: e.id,
                    receiverName: e.username,
                    senderName: user.username,
                    postId: e._id,
                    file: e.file
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            const dat = await res.json()
       
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <React.Fragment>

            <section className={classes.sectionCards}>
                {publications.map((e, i) => (
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

                                <p>{e.likes.length}</p>
                            </div>
                        </div>
                    </section>

                ))}

            </section>
        </React.Fragment>

    )
}

export default Posts