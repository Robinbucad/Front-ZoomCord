
import { Link } from 'react-router-dom'
import CreateServModal from '../../modal/createServ'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import classes from './servers.module.scss'
import logo from '../../../assets/img/discord/serv/servDisc.png'
import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { useRef } from 'react'
import { useServers } from '../../../hooks/hook-server-list'
import { useUsername } from '../../../hooks/hook-name-user'

function DivServs(props) {
    const token = sessionStorage.getItem('token')
    const [conversations, setConversations] = useState([])
    const [modalServShow, setServModalShow] = useState(false)
    const { user } = useUsername()
    const [currentSer,updateCurrentSer] = useState('')
    
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
                console.log(dat)
                setConversations(dat)

            } catch (err) {
                console.log(err)
            }
        }
        getServConversations()
    }, [user])
    console.log(currentSer)

    return (

        <div className={classes.containerServ}>
            <Link to={`/discord/${user._id}`}>

                <div>
                    <img className={classes.imgServ} src={logo}></img>
                </div>

            </Link>

            {conversations.map((e,i) => (
                <Link key={i} to={`/server/${e._id}`}>
                    <div onClick={() => props.handleCurrentServ(e.name)}>
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

/**
 *  {user.length===0 ? '' : user.map(e => (
            <Link to={`/${e._id}`}>
                <div>
                    <div className="conver">
                        <img className="profile-default" src={e.img} />
                        <p>{e.username}</p>
                    </div>
                </div>
            </Link>
        ))}
 */