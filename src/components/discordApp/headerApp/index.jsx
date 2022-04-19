import classes from '../messenger/friendMd.module.scss'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import ModalPost from '../../modal/addPost'

function HeaderApp() {
    const [btn,setBtn] = useState('false')
    const token = sessionStorage.getItem('token')
    const {id} = useParams()
    const [currentUser,setCurrentUser] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = e => {
        document.body.classList.toggle(classes.dark)
        document.body.classList.toggle(classes.light)
        if (btn === 'false') {
            setBtn(classes.active)
        } else {
            setBtn('false')
        }
    }

    useEffect(() => {
        const getCurrentUserChat = async() => {
            const res = await fetch(`http://localhost:3001/users/${id}`,{
                method:'get',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const dat = await res.json()
            setCurrentUser(dat)
        }
        getCurrentUserChat()
    },[id])


    return (
        <header className={classes.headerChat}>
            <p>{currentUser.username}</p>
            <div className={classes.settingsChat}>
                <button onClick={handleClick} className={classes.switch} id={btn} >
                    <span><FaMoon></FaMoon></span>
                    <span><FaSun></FaSun></span>

                </button>
                <button className={classes.addPostBtn}  onClick={handleShow}>
                    +
                </button>
            </div>
            <ModalPost show={show} handleClose={handleClose}></ModalPost>
        </header>
    )
}

export default HeaderApp