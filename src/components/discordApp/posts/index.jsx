import classes from '../messenger/friendMd.module.scss'
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { UserContext } from '../../../context/user/user.contex'

function Posts() {
    const token = sessionStorage.getItem('token')
    const [publications, setPublications] = useState([])
    const [user,setUser] = useContext(UserContext)
    
    //ACTUALIZAR publications no otro fetch

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
       

        const liked = {
            _id:user._id,
            username:user.username,
            desciption:user.description,
            file:user.file
        }
      
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