
import { Link } from 'react-router-dom'
import CreateServModal from '../../modal/createServ'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import classes from './servers.module.scss'
import logo from '../../../assets/img/discord/serv/servDisc.png'
import { useEffect } from 'react'

function DivServs() {
    const token = sessionStorage.getItem('token')
    const [modalServShow, setServModalShow] = useState(false)
    const [servers, setServers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/servers', {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(r => r.json())
            .then(d => setServers(d))
    }, [])


    return (

        <div className={classes.containerServ}>
            <Link to='/discord'>
                <div>
                    <img className={classes.imgServ} src={logo}></img>
                </div>
            </Link>


            {servers.map(e => (
                <Link to={`/server/${e._id}`}>
                 <div>
                    <img className={classes.imgServ} src={e.img}></img>
                </div>
                </Link>
               


            ))}


            <CreateServModal show={modalServShow} onHide={() => setServModalShow(false)} ></CreateServModal>


            <button onClick={() => setServModalShow(true)} className={classes.imgServ}>
                <h1>+</h1>
            </button>
        </div>

    )
}

export default DivServs