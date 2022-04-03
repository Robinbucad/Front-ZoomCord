import { Modal, Button } from 'react-bootstrap'
import { React, useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/user/user.contex'
import classes from './settings.module.scss'

function EditUsername(props) {
    const [user, setUser] = useContext(UserContext)
    const token = sessionStorage.getItem('token')
    const [newUsername, setNewUsername] = useState('')
    const [letBtn, setLetBtn] = useState(true)
    const [checkPassword, setCheckPassword] = useState('')


    const handleEdit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`https://aqueous-ocean-87434.herokuapp.com/users/username/${user._id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    username: newUsername,
                    password: checkPassword
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            })
            const dat = await res.json()
            alert('Vuelve a iniciar sesión para ver los cambios')
        } catch (err) {
            alert('Contraseña incorrecta')
        }    
    }

    const handlePassword = (e) => {
        setCheckPassword(e.target.value)
        if (e.target.value === '') {
            setLetBtn(true)
        } else {
            setLetBtn(false)
        }
    }

    return (


        <Modal
            {...props}
            size="lg"

            centered

        >
            <section className={classes.cardModalUpdate}>
                <Modal.Header className={classes.headerEmailModal} style={{ border: 'none' }} closeButton>
                    <h1>Cambia tu nombre de usuario</h1>
                    <p>Introduce un nuevo nombre de usuario y tu contraseña existente</p>
                </Modal.Header>
                <Modal.Body className={classes.bodyInputsModify}>
                    <div>
                        <p>NOMBRE DE USUARIO</p>
                        <input onChange={(e) => setNewUsername(e.target.value)} className={classes.inputModify} type='email' placeholder={user.username} required></input>
                    </div>

                    <div>
                        <p>CONTRASEÑA ACTUAL</p>
                        <input onChange={handlePassword} className={classes.inputModify} type='password'></input>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleEdit} disabled={letBtn}>Listo</Button>
                </Modal.Footer>
            </section>

        </Modal>

    )
}

export default EditUsername