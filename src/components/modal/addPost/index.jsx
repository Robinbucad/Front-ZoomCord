import { useContext, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { UserContext } from '../../../context/user/user.contex'
import classes from './addPost.module.scss'

function ModalPost(props) {
    const token = sessionStorage.getItem('token')
    const [user, setUser] = useContext(UserContext)
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    const [show,setShow] = useState(false)
    const handleSubmit = async() => {
       
        const res = await fetch('http://localhost:3001/publications/',{
            method:'post',
            body: JSON.stringify({
                username:user.username,
                description:description,
                img:img,
                likes:0
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        const dat =await res.json()
        window.location.reload()
        setShow(false)
    }

    return (


        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{user.username}</Modal.Title>
            </Modal.Header>
            <div className={classes.modalPostDivInput}>
                <input onChange={(e) => setImg(e.target.value)} type='text' placeholder='Pon url imagen'></input>
                <textarea onChange={(e) => setDescription(e.target.value)} type='text' placeholder='Description' />
            </div>
            <button onClick={handleSubmit}>
                Subir
            </button>
        </Modal>
    )
}

export default ModalPost