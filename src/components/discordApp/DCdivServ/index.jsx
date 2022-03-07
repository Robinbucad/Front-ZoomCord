import logo from '../../../assets/img/discord-logo-serv.jpg'
import { Link } from 'react-router-dom'
import CreateServModal from '../../modal/createServ'
import { useState } from 'react'


function DivServs() {

    const [modalServShow, setServModalShow] = useState(false)

    const updateServName = e => {
        console.log(e)
    }

    return (
        <div className='icons-div'>
            <CreateServModal show={modalServShow} onHide={() => setServModalShow(false)} ></CreateServModal>
            <Link to='/discord'> <button className='icon-serv'>
                <img className='img-serv' src={logo}></img>
            </button></Link>

            <Link to='/server'><div className='icon-serv'>
                <img className='img-serv' src={logo}></img>
            </div></Link>

            <button onClick={() => setServModalShow(true)} className='icon-serv-add'>
                <h1>+</h1>
            </button>

        </div>
    )
}

export default DivServs