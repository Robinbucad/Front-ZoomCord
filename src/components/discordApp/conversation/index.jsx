import { useContext, useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../../context/user/user.contex"
import classes from '../messenger/friendMd.module.scss'

function Conversation({ conversation },props) {
    const [users, setUsers] = useState([])
    const token = sessionStorage.getItem('token')
    const [user, setUser] = useContext(UserContext)


    useEffect(() => {
        const filter = conversation.members.find(e => e !== user._id)
 
        const getUser = async () => {
            try {
                const res = await fetch(`http://localhost:3001/users/${filter}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                const dat = await res.json()
                setUsers([dat])
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [user])

    return (
        <div>
        {users.length===0 ? '' : users.map((e,i) => (
            <Link key={i} to={`/@me/${e._id}`}>
             
                    <div className={classes.conver}>
                        <img className={classes.profileDefault} src={e.img} />
                        <p>{e.username}</p>
                    </div>
             
            </Link>
        ))}

    </div>




    )
}

export default Conversation
