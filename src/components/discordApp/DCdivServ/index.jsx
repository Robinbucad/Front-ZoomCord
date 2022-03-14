
import { Link } from 'react-router-dom'
import CreateServModal from '../../modal/createServ'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import classes from './servers.module.scss'
import logo from '../../../assets/img/discord/serv/servDisc.png'

function DivServs() {

    const [modalServShow, setServModalShow] = useState(false)

    const updateServName = e => {
        console.log(e)
    }

    return (
     
                 <div className={classes.containerServ}>
                    <p>
                        <img className={classes.imgServ} src={logo}></img>
                    </p>

                    <CreateServModal show={modalServShow} onHide={() => setServModalShow(false)} ></CreateServModal>
                   

                    <button onClick={() => setServModalShow(true)} className={classes.imgServ}>
                        <h1>+</h1>
                    </button>
                </div>
  
    )
}

export default DivServs