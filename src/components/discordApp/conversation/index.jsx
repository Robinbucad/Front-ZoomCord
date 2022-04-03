import { useContext, useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../../context/user/user.contex"
import classes from '../messenger/friendMd.module.scss'
import defaultProf from '../../../assets/img/default.jpg'

function Conversation({ conversation }) {
    const [users, setUsers] = useState([])
    const token = sessionStorage.getItem('token')
    const [user, setUser] = useContext(UserContext)

    useEffect(() => {
        const filter = conversation?.members.find(e => e !== user._id)
    
        const getUser = async () => {
            try {
                const res = await fetch(`https://aqueous-ocean-87434.herokuapp.com/${filter}`, {
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
                <Link style={{textDecoration:'none'}} className={classes.linkConv} key={i} to={`/@me/${e._id}`}>
                    <div onClick={handleDelNot} className={classes.divConvLength}>
                        <div className={classes.conver}>
                            <img className={classes.profileDefault} src={e.file === '' ? defaultProf : `https://aqueous-ocean-87434.herokuapp.com/${e.file}`} />
                            <p>{e.username}</p>
                        </div>
                   
                    </div>
                </Link>
            ))}

        </div>




    )
}

export default Conversation
