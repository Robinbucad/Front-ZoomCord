

import { Modal, Button } from 'react-bootstrap'
import { React, useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/user/user.contex'
import classes from './settings.module.scss'

function EditImage(props) {
    const [user, setUser] = useContext(UserContext)
    const token = sessionStorage.getItem('token')
    const [letBtn, setLetBtn] = useState(true)
    


    const handleEdit = async (e) => {
        e.preventDefault()
        const userFormData = new FormData(e.target);
  
        try {
            const res = await fetch(`http://localhost:3001/users/img/${user._id}`, {
                method: 'PATCH',
                body: userFormData,
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            const dat = await res.json()
            alert('Vuelve a iniciar sesión para ver los cambios')
            window.location.reload()
        } catch (err) {
            alert('El campo no puede estar vacio')
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
                    <h1>Cambia tu Imagen</h1>
                    <p>Inserte su nueva imagen</p>
                </Modal.Header>
                <form onSubmit={handleEdit}>
                    <Modal.Body className={classes.bodyInputsModify}>
                        <div>
                            <p>Imagen</p>
                            <input name='file' type='file' required></input>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit'>Listo</Button>
                    </Modal.Footer>
                </form>

            </section>

        </Modal>

    )
}

export default EditImage