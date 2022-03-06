
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import './style.css'
import pencil from '../../../assets/img/LAPIZ.png'

function UserProfileSettings(props) {



    return (
        <Modal.Body className='container-modal-settings' >

            <section className='container-settings'>

                <section className='list-settings' >
                    <div className='div-btns-setts'>
                        <Button variant='primary' onClick={props.handleClickAcc}>Mi cuenta</Button>
                        <Button variant='primary'>Perfil de usuario</Button>
                    </div>

                </section>

                <section className='setting-changes'>
                    <Modal.Header style={{ border: 'none' }} closeButton><h3>Perfil de usuario</h3></Modal.Header>
                    <section className='container-userProfile'>
                        <section className='part1-userProfile'>
                            <div className='section-profileUser'>
                                <p>AVATAR</p>
                                <div>
                                    <Button variant='primary'>Cambiar avatar</Button>
                                    <Button style={{ color: 'white' }} variant='danger-outline'>Eliminar avatar</Button>
                                </div>

                                <div>
                                    <p>CARTEL DE PERFIL</p>
                                    <p>Recomiendo una imagen de 600x240. Puedes subir solo un enlace http PNG,
                                        JPG o GIF animado con un tamaño inferir al a 1920x1080</p>
                                </div>
                            </div>

                            <article className='card-userProfile'>
                                <p>Foto de mi icono </p>
                                <p>BeZzK</p>

                                <div>
                                    <p>PERSONALIZACION DE MI PERFIL</p>
                                    <div className='personalitation-profile'>
                                        <div className='pencil-div'>
                                        <img className='pencil-img' src={pencil} alt="" />
                                        </div>
                                       
                                        <div className='profile-settings'>
                                            <p>Perfil de usuario</p>
                                            <p>Tiempo transcurrido:</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>

                       
                    </section>
                    <article className='about-user'>
                            <p>SOBRE MI</p>
                            <p>Puedes usar Markdown y los enlaces que quieras</p>
                            <div>
                                <textarea className='text-area-settings'></textarea>
                            </div>
                    </article>




                </section>



            </section>

        </Modal.Body>
    )
}

export default UserProfileSettings