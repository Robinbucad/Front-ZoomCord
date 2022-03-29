
import { Modal, Button, Form } from 'react-bootstrap'
import classes from './settings.module.scss'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ES from '../../../assets/img/ES.svg'
import KY from '../../../assets/img/KY.svg'


function UserProfileSettings(props) {
    
    const [d, setD] = useTranslation("discordApp")

    const setLanEs = () => {
        setD.changeLanguage("es")
        localStorage.setItem("LNG","es")
        
    }

    const setLanEn = () => {
        setD.changeLanguage("en")
        localStorage.setItem("LNG","en")
    }

    return (    
        <Modal.Body className={classes.containerModalSettings} >

            <section className={classes.containerSettings}>

                <section className={classes.listSettings} >
                    <div className={classes.divBtnSetts}>
                        <Button variant='primary' onClick={props.handleClickAcc}>{d("discordApp.btnMyAcc")}</Button>
                        <Button variant='primary'>{d("discordApp.btnUserProfile")}</Button>
                    </div>

                </section>

                <section className={classes.settingChanges}>
                    <Modal.Header style={{ border: 'none' }} closeButton><h3>{d("discordApp.settingsApp")}</h3></Modal.Header>
                    <article >
                        <div className={classes.lngDiv}>
                            <div className={classes.optDiv}>
                                <label htmlFor="es">Español</label>
                                <Form.Check type="radio" name='es' onClick={setLanEs} />
                            </div>
                            <div className={classes.optDiv}>
                                <p>Español</p>
                                <img className={classes.flagImg} src={ES}></img>
                            </div>
                        </div>

                        <div className={classes.lngDiv}>
                            <div className={classes.optDiv}>
                                <label htmlFor="es">Ingles</label>
                                <Form.Check type="radio" name='es' onClick={setLanEn} />
                            </div>
                            <div className={classes.optDiv}>
                                <p>Ingles</p>
                                <img className={classes.flagImg} src={KY}></img>
                            </div>
                        </div>

                    </article>

                </section>



            </section>

        </Modal.Body>
    )
}

export default UserProfileSettings