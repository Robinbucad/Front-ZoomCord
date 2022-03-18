import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import './style.css'

function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState('')
    const token = sessionStorage.getItem('token')
    const currentUserId = currentUser._id

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
                setUser(dat)
                console.log(dat)
            } catch (err) {
                console.log(err)
            }

        }
        getUser()
    }, [currentUser, conversation])



    return (
        <div>
            <div className="conver">
                <img className="profile-default" src={user?.img} />
                <p>{user?.username}</p>
            </div>
        </div>

    )
}

export default Conversation
