import React, { useContext, useState } from "react"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/user/user.contex"
import classes from './modal.module.scss'


function CreateServModal(props) {

    const token = sessionStorage.getItem('token')
    const [changeModa, updateChangeModal] = useState(false)
    const [changeModalClub, updateChangeModalClub] = useState(false)
    const [changeModalFriend, updateChangeModalFriend] = useState(false)
    const [servName, updateServName] = useState('')
    const [servImg, updateImg] = useState('')
    const [user, setUser] = useContext(UserContext)
    let navigate = useNavigate()

    const onSubmit = async e => {
        e.preventDefault()
        const servFormData = new FormData(e.target);
        servFormData.append('userId', user._id);
        servFormData.append('ADMIN', user._id);

        const server = {
            name: servName,
            img: servImg,
            userId: user._id,
            ADMIN: user._id
        }
        const res = await fetch('http://localhost:3001/servers', {
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: servFormData
        })
        const dat = await res.json()
        window.location.reload()
    }


    return (
        <React.Fragment>
            <Modal
                {...props}
                size="m"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <section className={classes.sectionCreate}>

          
                <Modal.Header style={{border:'none'}} closeButton>
                    <Modal.Title  id="contained-modal-title-vcenter">
                        Crear un servidor
                    </Modal.Title>

                </Modal.Header>
                <Modal.Header style={{border:'none'}}>
                    <Modal.Title style={{ fontSize: '20px', fontWeight: 'lighter' }}>
                        Tu servidor es donde te reúnes con tus amigos. Crea el tuyo y empieza a hablar
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{border:'none'}}>
                    <button onClick={() => updateChangeModal(true)} className={classes.divModal}>
                        <h4 className={classes.optModal}>Crear mi plantilla</h4>
                        <p > Flecha </p>
                    </button>

                </Modal.Body>
                <Modal.Footer style={{border:'none'}}>
                    <Button onClick={props.onHide}>Close</Button>

                </Modal.Footer>

                </section>
            </Modal>

            {changeModa === false ? '' : <Modal
                {...props}
                size="m"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <section className={classes.sectionCreate}>

           
                <Modal.Header closeButton style={{border:'none'}}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Háblanos un poco de tu servidor
                    </Modal.Title>

                </Modal.Header>
                <Modal.Header style={{border:'none'}}>
                    <Modal.Title style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                        Para poder ayudarte con la configuración, nos gustaria saber si tu servidor
                        es solo para unos cuantos amigos o para una comunidad más amplia
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={classes.containerOptsModal}>
                    <button onClick={() => updateChangeModalClub(true)} className={classes.divModal}>
                        <h4 className={classes.optModal}>Para un club o una comunidad</h4>
                        <p> Flecha </p>
                    </button>

                    <button onClick={() => updateChangeModalFriend(true)} className={classes.divModal}>
                        <h4 className="opt-modal">Para mis amigos y yo</h4>
                        <p> Flecha </p>
                    </button>

                </Modal.Body>
                <Modal.Footer style={{border:'none'}} className={classes.footerModal}>
                    <button className={classes.btnBackModal} onClick={() => updateChangeModal(false)}>Atras</button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>

                </section>
            </Modal>}

            {changeModalClub === false ? '' : <Modal
                {...props}
                size="m"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <section className={classes.sectionCreate}>

             
                <Modal.Header  style={{border:'none'}} closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Personaliza tu servidor
                    </Modal.Title>

                </Modal.Header>
                <Modal.Header  style={{border:'none'}}>
                    <Modal.Title style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                        Dale una personalidad propia a tu nuevo servidor con un nombre y un icono. Siempre puedes cambiarlo más tarde
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={classes.containerOptsModal}>
                    <div className={classes.uploadContainer}>
                        <div className={classes.divUploadPhoto}>
                            <p>UPLOAD</p>
                        </div>
                    </div>


                    <div>
                        <p className="name-serv">NOMBRE DEL SERVIDOR</p>
                        <input className={classes.inputNameServ} onChange={(e) => updateServName(e.target.value)} type='text' placeholder='El servidor de user'></input>
                        <input className={classes.inputNameServ} onChange={(e) => updateImg(e.target.value)} type='text' placeholder='Imangen del servidor'></input>
                        <p className="text-conditions-serv">Al crear un servidor, aceptas las Directivas de la Comunidad de Discord</p>
                    </div>

                </Modal.Body>
                <Modal.Footer className="footer-modal">
                    <button className="btn-back-modal" onClick={() => updateChangeModalClub(false)}>Atras</button>
                    <Button className="btn-modal-create" disabled={servName === '' ? true : false} onClick={onSubmit}>Crear</Button>
                </Modal.Footer>

                </section>
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
                        <form onSubmit={onSubmit} >
                            <div className={classes.uploadContainer}>
                                <input type='file' name='file' className="div-upload-photo">

                                </input>
                            </div>




                            <div >
                                <p className={classes.nameServ}>NOMBRE DEL SERVIDOR</p>
                                <input className={classes.inputNameServ} name='name' type='text' placeholder='El servidor de user'></input>
                                <p className="text-conditions-serv">Al crear un servidor, aceptas las Directivas de la Comunidad de Discord</p>
                            </div>
                            <Modal.Footer className={classes.footerModal}>
                                <button className={classes.btnBackModal} onClick={() => updateChangeModalFriend(false)}>Atras</button>
                                <Button className={classes.btnModalCreate} type='submit' required>Crear</Button>
                            </Modal.Footer>
                        </form>






                    </Modal.Body>



                </Modal>}

        </React.Fragment>
    )
}

export default CreateServModal