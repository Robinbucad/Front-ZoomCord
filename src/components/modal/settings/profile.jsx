
import { Modal, Button, Form } from 'react-bootstrap'
import classes from './settings.module.scss'
import { useState } from 'react'


function UserProfileSettings(props) {
  

    return (
        <Modal.Body className={classes.containerModalSettings} >

            <section className={classes.containerSettings}>

                <section className={classes.listSettings} >
                    <div className={classes.divBtnSetts}>
                        <Button variant='primary' onClick={props.handleClickAcc}>Mi cuenta</Button>
                        <Button variant='primary'>Perfil de usuario</Button>
                    </div>

                </section>

                <section className={classes.settingChanges}>
                    <Modal.Header style={{ border: 'none' }} closeButton><h3>Ajustes de la aplicacion</h3></Modal.Header>
                    <article >
                        <div className={classes.lngDiv}>
                            <div className={classes.optDiv}>
                                <label htmlFor="es">Español</label>
                                <Form.Check type="radio" name='es' />
                            </div>
                            <div className={classes.optDiv}>
                                <p>Español</p>
                                <p>IMG</p>
                            </div>
                        </div>

                        <div className={classes.lngDiv}>
                            <div className={classes.optDiv}>
                                <label htmlFor="es">Ingles</label>
                                <Form.Check type="radio" name='es' />
                            </div>
                            <div className={classes.optDiv}>
                                <p>Ingles</p>
                                <p>IMG</p>
                            </div>
                        </div>

                    </article>

                </section>



            </section>

        </Modal.Body>
    )
}

export default UserProfileSettings