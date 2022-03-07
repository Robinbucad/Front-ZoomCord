import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import './style.css'

function CreateServChannel(props) {
    return (
        <React.Fragment>
            <Modal
                {...props}
                size="m"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                

            >
                <section className="card-modal-channel">
                    <Modal.Header className="header-modal-channels" closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Crear canal de texto
                        </Modal.Title>

                    </Modal.Header>

                    <Modal.Body className="body-modal-channel">

                        <div className="input-channelType-div">
                            <input type='radio' value='text' onChange={props.handlevalue} className="radio-channel-select" name='opt-channel'/>
                            <div className="opts-channelType">
                                <p className="title-opt-channelType" >Canal de texto</p>
                                <p>Publica imágenes,GIF, pegatinas, opiniones y bromas</p>
                            </div>
                        </div>
                        <div className="input-channelType-div">
                            <input type='radio' value='voice' onChange={props.handlevalue} className="radio-channel-select" name='opt-channel' />
                            <div className="opts-channelType">
                                <p className="title-opt-channelType">Canal de voz</p>
                                <p>Utiliza voz, video y compartir pantalla</p>
                            </div>
                        </div>

                        <div>
                            <p className="title-opt-channelType">NOMBRE DEL CANAL</p>
                            <input className="input-nameChannel" onChange={props.handleNameChannel} type='text' placeholder='nuevo-canal'></input>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={props.createChannel}>Crear canal</Button>
                        <Button variant="danger" onClick={props.onHide}>Close</Button>

                    </Modal.Footer>

                </section>


            </Modal>
        </React.Fragment>
    )
}

export default CreateServChannel