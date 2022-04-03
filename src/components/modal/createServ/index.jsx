import React, { useContext, useState } from "react"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/user/user.contex"
import classes from './modal.module.scss'
import {RiArrowRightSLine} from 'react-icons/ri'
import { useTranslation } from "react-i18next"

function CreateServModal(props) {

    const token = sessionStorage.getItem('token')
    const [changeModa, updateChangeModal] = useState(false)
    const [changeModalClub, updateChangeModalClub] = useState(false)
    const [changeModalFriend, updateChangeModalFriend] = useState(false)
    const [servName, updateServName] = useState('')
    const [servImg, updateImg] = useState('')
    const [user, setUser] = useContext(UserContext)
    const [d] = useTranslation("discordApp")
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
        const res = await fetch('https://aqueous-ocean-87434.herokuapp.com/servers', {
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
                        {d("discordApp.createServ")}
                    </Modal.Title>

                </Modal.Header>
                <Modal.Header style={{border:'none'}}>
                    <Modal.Title style={{ fontSize: '20px', fontWeight: 'lighter' }}>
                        {d("discordApp.descServInfo")}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{border:'none'}}>
                    <button onClick={() => updateChangeModal(true)} className={classes.divModal}>
                        <h4 className={classes.optModal}>{d("discordApp.createTemplate")}</h4>
                        <RiArrowRightSLine className={classes.arrowRight}></RiArrowRightSLine>
                    </button>

                </Modal.Body>
                <Modal.Footer style={{border:'none'}}>
                    <Button onClick={props.onHide}>{d("discordApp.close")}</Button>

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
                        {d("discordApp.infoServer")}
                    </Modal.Title>

                </Modal.Header>
                <Modal.Header style={{border:'none'}}>
                    <Modal.Title style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                        {d("discordApp.descModal2")}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={classes.containerOptsModal}>
                    <button onClick={() => updateChangeModalClub(true)} className={classes.divModal}>
                        <h4 className={classes.optModal}>{d("discordApp.club")}</h4>
                        <RiArrowRightSLine className={classes.arrowRight}></RiArrowRightSLine>
                    </button>

                    <button onClick={() => updateChangeModalFriend(true)} className={classes.divModal}>
                        <h4 className="opt-modal">{d("discordApp.friendsServ")}</h4>
                        <RiArrowRightSLine className={classes.arrowRight}></RiArrowRightSLine>
                    </button>

                </Modal.Body>
                <Modal.Footer style={{border:'none'}} className={classes.footerModal}>
                    <button className={classes.btnBackModal} onClick={() => updateChangeModal(false)}>{d("discordApp.back")}</button>
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
                        {d("discordApp.infoServerM3")}
                    </Modal.Title>

                </Modal.Header>
                <Modal.Header  style={{border:'none'}}>
                    <Modal.Title style={{ fontSize: '15px', fontWeight: 'lighter', border:"none" }}>
                    {d("discordApp.descModal3")}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={classes.containerOptsModal}>
                    <div className={classes.uploadContainer}>
                        <input type='file' name='file' className={classes.divUploadPhoto}>
                         
                        </input>
                    </div>


                    <div>
                        <p className="name-serv">{d("discordApp.nameServ")}</p>
                        <input className={classes.inputNameServ} onChange={(e) => updateServName(e.target.value)} type='text' placeholder={`${d("discordApp.inputName")} ${user.username}`}></input>
                        <p className="text-conditions-serv">{d("discordApp.pol")}</p>
                    </div>

                </Modal.Body>
                <Modal.Footer className="footer-modal">
                    <button className={classes.btnBackModal} onClick={() => updateChangeModalClub(false)}>{d("discordApp.back")}</button>
                    <Button className="btn-modal-create" disabled={servName === '' ? true : false} onClick={onSubmit}>{d("discordApp.create")}</Button>
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
                    <section className={classes.sectionCreate}>

                    
                    <Modal.Header style={{border:"none"}} closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        {d("discordApp.infoServerM3")}
                        </Modal.Title>

                    </Modal.Header>
                    <Modal.Header style={{border:"none"}}>
                        <Modal.Title style={{ fontSize: '15px',border:"none", fontWeight: 'lighter' }}>
                        {d("discordApp.descModal3")}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={classes.containerOptsModal}>
                        <form onSubmit={onSubmit} >
                            <div className={classes.uploadContainer}>
                                <input type='file' name='file' className={classes.divUploadPhoto}>

                                </input>
                            </div>




                            <div >
                                <p className={classes.nameServ}>{d("discordApp.nameServ")}</p>
                                <input className={classes.inputNameServ} name='name' type='text' placeholder={`${d("discordApp.inputName")} ${user.username}`} required></input>
                                <p className="text-conditions-serv">{d("discordApp.pol")}</p>
                            </div>
                            <Modal.Footer className={classes.footerModal}>
                                <button className={classes.btnBackModal} onClick={() => updateChangeModalFriend(false)}>{d("discordApp.back")}</button>
                                <Button className={classes.btnModalCreate} type='submit' required>{d("discordApp.create")}</Button>
                            </Modal.Footer>
                        </form>


                       



                    </Modal.Body>

                    </section>

                </Modal>}

        </React.Fragment>
    )
}

export default CreateServModal