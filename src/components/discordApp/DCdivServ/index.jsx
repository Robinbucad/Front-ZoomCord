
import { Link } from 'react-router-dom'
import CreateServModal from '../../modal/createServ'
import { useContext, useState } from 'react'
import classes from '../messenger/friendMd.module.scss'
import logo from '../../../assets/img/discord/serv/servDisc.png'
import { useEffect } from 'react'
import { UserContext } from '../../../context/user/user.contex'

function DivServs() {
    const token = sessionStorage.getItem('token')
    const [conversations, setConversations] = useState([])
    const [modalServShow, setServModalShow] = useState(false)
    const [user,setUser] = useContext(UserContext)
    console.log(user)

   useEffect(() => {

        const getServConversations = async () => {
            try {
                const res = await fetch(`http://localhost:3001/servers/conversations/${user._id}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const dat = await res.json()
                setConversations(dat)
            } catch (err) {
                console.log(err)
            }
        }
        if(!user){
            console.log('nada')
        }else{
            getServConversations()
        }  
     }, [user])

    return (

        <div className={classes.containerServ}>
            <Link to={`/discord/@me/${ user._id}`}>

                <div>
                    <img className={classes.imgServ} src={logo}></img>
                </div>

            </Link>

            {conversations.map((e,i) => (
                <Link key={i} to={`/discord/${e._id}`}>
                    <div>
                        <img className={classes.imgServ} src={e.img}></img>
                    </div>
                </Link>
            ))}

            <button onClick={() => setServModalShow(true)} className={classes.imgServ}>
                <h1>+</h1>
            </button>

            <CreateServModal show={modalServShow} onHide={() => setServModalShow(false)} ></CreateServModal>

        </div>

    )
}

export default DivServs

