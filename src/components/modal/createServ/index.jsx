import React, { useContext, useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/user/user.contex"
import './style.css'

function CreateServModal(props) {

    const token = sessionStorage.getItem('token')
    const [changeModa, updateChangeModal] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [changeModalClub, updateChangeModalClub] = useState(false)
    const [changeModalFriend, updateChangeModalFriend] = useState(false)
    const [servName, updateServName] = useState('')
    const [servImg,updateImg] = useState('')
    const [user,setUser,userId,setUserId] = useContext(UserContext)
     
    let navigate = useNavigate()

    const onSubmit = async e => {


        const server = {
            name: servName,
            img: servImg,
            userId:user._id
        }
        const res = await fetch('http://localhost:3001/servers', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(server)
        })
        const dat = await res.json()
    }


    return (
        <React.Fragment>
            <Modal
                {...props}
                size="m"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Crear un servidor
                    </Modal.Title>

                </Modal.Header>
                <Modal.Header>
                    <Modal.Title style={{ fontSize: '20px', fontWeight: 'lighter' }}>
                        Tu servidor es donde te reúnes con tus amigos. Crea el tuyo y empieza a hablar
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button onClick={() => updateChangeModal(true)} className="div-modal">
                        <h4 className="opt-modal">Crear mi plantilla</h4>
                        <p > Flecha </p>
                    </button>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>

                </Modal.Footer>


            </Modal>

            {changeModa === false ? '' : <Modal
                {...props}
                size="m"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Háblanos un poco de tu servidor
                    </Modal.Title>

                </Modal.Header>
                <Modal.Header>
                    <Modal.Title style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                        Para poder ayudarte con la configuración, nos gustaria saber si tu servidor
                        es solo para unos cuantos amigos o para una comunidad más amplia
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="container-opts-modal">
                    <button onClick={() => updateChangeModalClub(true)} className="div-modal">
                        <h4 className="opt-modal">Para un club o una comunidad</h4>
                        <p> Flecha </p>
                    </button>

                    <button onClick={() => updateChangeModalFriend(true)} className="div-modal">
                        <h4 className="opt-modal">Para mis amigos y yo</h4>
                        <p> Flecha </p>
                    </button>

                </Modal.Body>
                <Modal.Footer className="footer-modal">
                    <button className="btn-back-modal" onClick={() => updateChangeModal(false)}>Atras</button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>


            </Modal>}

            {changeModalClub === false ? '' : <Modal
                {...props}
                size="m"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Personaliza tu servidor
                    </Modal.Title>

                </Modal.Header>
                <Modal.Header>
                    <Modal.Title style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                        Dale una personalidad propia a tu nuevo servidor con un nombre y un icono. Siempre puedes cambiarlo más tarde
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="container-opts-modal">
                    <div className="upload-container">
                        <div className="div-upload-photo">
                            <p>UPLOAD</p>
                        </div>
                    </div>


                    <div>
                        <p className="name-serv">NOMBRE DEL SERVIDOR</p>
                        <input className="input-name-serv" onChange={(e) => updateServName(e.target.value)} type='text' placeholder='El servidor de user'></input>
                        <input className="input-name-serv" onChange={(e) => updateImg(e.target.value)} type='text' placeholder='Imangen del servidor'></input>
                        <p className="text-conditions-serv">Al crear un servidor, aceptas las Directivas de la Comunidad de Discord</p>
                    </div>

                </Modal.Body>
                <Modal.Footer className="footer-modal">
                    <button className="btn-back-modal" onClick={() => updateChangeModalClub(false)}>Atras</button>
                    <Button className="btn-modal-create" disabled={servName === '' ? true : false} onClick={props.onHide}>Crear</Button>
                </Modal.Footer>


            </Modal>}

            {changeModalFriend === false ? '' :
                <Modal
                    {...props}
                    size="m"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Personaliza tu servidor
                        </Modal.Title>

                    </Modal.Header>
                    <Modal.Header>
                        <Modal.Title style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                            Dale una personalidad propia a tu nuevo servidor con un nombre y un icono. Siempre puedes cambiarlo más tarde
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="container-opts-modal">
                        <div className="upload-container">
                            <div className="div-upload-photo">
                                <p>UPLOAD</p>
                            </div>
                        </div>




                        <div >
                            <p className="name-serv">NOMBRE DEL SERVIDOR</p>
                            <input className="input-name-serv" name='nameServ' onChange={e => updateServName(e.target.value)} type='text' placeholder='El servidor de user'></input>
                            <input className="input-name-serv" onChange={(e) => updateImg(e.target.value)} type='text' placeholder='Imangen del servidor'></input>
                            <p className="text-conditions-serv">Al crear un servidor, aceptas las Directivas de la Comunidad de Discord</p>
                        </div>





                     <Modal.Footer className="footer-modal">
                        <button className="btn-back-modal" onClick={() => updateChangeModalFriend(false)}>Atras</button>
                        <Button className="btn-modal-create" disabled={servName === '' ? true : false} onClick={onSubmit}>Crear</Button>
                    </Modal.Footer> </Modal.Body>
                  


                </Modal>}

        </React.Fragment>
    )
}

export default CreateServModal