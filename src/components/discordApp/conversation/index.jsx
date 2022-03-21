import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import classes from '../messenger/friendMd.module.scss'

function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState([])
    const token = sessionStorage.getItem('token')
    const currentUserId = currentUser._id
    console.log(user)
    useEffect(() => {
        const filter = conversation.members.find(e => e !== currentUserId)
    
        const getUser = async () => {
            try {
                const res = await fetch(`http://localhost:3001/users/${filter}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                const dat = await res.json()
                setUser([dat])
                console.log(dat)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [currentUser, conversation,user])

    


    return (
        <div>
            {user.length===0 ? '' : user.map((e,i) => (
                <Link key={i} to={`/@me/${e._id}`}>
                    <div>
                        <div className={classes.conver}>
                            <img className={classes.profileDefault} src={e.img} />
                            <p>{e.username}</p>
                        </div>
                    </div>
                </Link>
            ))}

        </div>




    )
}

export default Conversation
