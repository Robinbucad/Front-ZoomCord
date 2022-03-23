import { Modal, Button } from 'react-bootstrap'
import { React, useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/user/user.contex'
import classes from './settings.module.scss'
import { useUsername } from '../../../hooks/hook-name-user'
import validator from 'validator'

function EditEmail(props) {
    const [user, setUser] = useContext(UserContext)
    const token = sessionStorage.getItem('token')
    const [newEmail, setNewEmail] = useState('')
    const [letBtn, setLetBtn] = useState(true)
    const [checkPassword, setCheckPassword] = useState('')


    const handleEdit = async (e) => {
        e.preventDefault()
        if (validator.isEmail(newEmail)) {
            try {
                const res = await fetch(`http://localhost:3001/users/email/${user._id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        email:newEmail,
                        password:checkPassword
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                })
                const dat = await res.json()
                alert('Vuelve a iniciar sesion para ver los resultados')
            } catch (err) {
                alert('Contraseña incorrecta')
            }         
        } else {
            alert('Pon un email valido')
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
                    <h1>Cambia tu email</h1>
                    <p>Introduce un nuevo nombre de usuario y tu contraseña existente</p>
                </Modal.Header>
                <Modal.Body className={classes.bodyInputsModify}>
                    <div>
                        <p>EMAIL</p>
                        <input onChange={(e) => setNewEmail(e.target.value)} className={classes.inputModify} type='email' placeholder={user.email} required></input>
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

export default EditEmail