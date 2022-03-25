import { useContext, useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../../context/user/user.contex"
import classes from '../messenger/friendMd.module.scss'

function Conversation({ conversation, notMsg }) {
    const [users, setUsers] = useState([])
    const token = sessionStorage.getItem('token')
    const [user, setUser] = useContext(UserContext)
    const [counter,setCounter] = useState([])

    useEffect(() => {
        const filterNot = notMsg.filter(e => e.conversationId === conversation._id)
        setCounter(filterNot)
    },[conversation,user])

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

    const handleDelNot = () => {
        console.log('hola')
    }

    return (
        <div>
            {users.length === 0 ? '' : users.map((e, i) => (
                <Link key={i} to={`/@me/${e._id}`}>
                    <div onClick={handleDelNot} className={classes.divConvLength}>
                        <div className={classes.conver}>
                            <img className={classes.profileDefault} src={`http://localhost:3001/${e.file}`} />
                            <p>{e.username}</p>
                        </div>
                        <p>{notMsg.length}</p>
                    </div>
                </Link>
            ))}

        </div>




    )
}

export default Conversation
