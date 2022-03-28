import { useContext, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { UserContext } from '../../../context/user/user.contex'
import classes from './addPost.module.scss'

function ModalPost(props) {
    const token = sessionStorage.getItem('token')
    const [user, setUser] = useContext(UserContext)
    const [description, setDescription] = useState('')
    const [show, setShow] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const userFormData = new FormData(e.target);
        userFormData.append('username', user.username);
        userFormData.append('userId', user._id)

        const res = await fetch('http://localhost:3001/publications/', {

            method: 'post',
            body: userFormData,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const dat = await res.json()
        window.location.reload()
        setShow(false)
    }

    return (


        <Modal show={props.show} onHide={props.handleClose}>
            <section className={classes.sectionModalAddPost}>
                <Modal.Header closeButton style={{ border: 'none' }}>
                    <Modal.Title>{user.username}</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit} className={classes.modalPostDivInput}>
                    <div className={classes.uploadContainer}>
                        <input type='file' name='file' className={classes.divUploadPhoto}>

                        </input>
                    </div>
                    <textarea className={classes.descriptionModal} onChange={(e) => setDescription(e.target.value)} type='text' name='description' placeholder='Description' />
                    <button className={classes.btnPost} type='submit'>
                        Subir
                    </button>
                </form>
            </section>


        </Modal>
    )
}

export default ModalPost


/**
 * 
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
 */