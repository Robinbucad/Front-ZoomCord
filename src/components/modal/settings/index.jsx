import { Modal, Button } from 'react-bootstrap'
import { useContext, useState } from 'react';
import classes from './settings.module.scss'
import UserProfileSettings from './profile';
import DeleteUser from './delete.modal';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/user/user.contex';
import React from 'react'
import EditEmail from './editEmailModal';
import { useUsername } from '../../../hooks/hook-name-user';
import EditUsername from './editUsername';
import EditImage from './editImg.modal';
import defaultImg from '../../../assets/img/default.jpg'
import { useTranslation } from 'react-i18next';

function UserSettings(props) {
    let navigate = useNavigate()
    const [accounteSettings, updateAccountSettings] = useState(true)
    const [userProfileSettings, updateUserProfileSettings] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const [user,setUser] = useContext(UserContext)
    const [modalEmailShow, setModalEmailShow] = useState(false);
    const [userModalShow,setModalUserShow] = useState(false)
    const [imgModalShow,setModalImgShow] = useState(false)
    const [d] = useTranslation("discordApp")


    const handleClickAcc = e => {
        e.preventDefault()
        if(accounteSettings === false){
            updateAccountSettings(true)
            updateUserProfileSettings(false)
        }else{
         
        }
    }

    const handleClickUser = e => {
        e.preventDefault()
        if(userProfileSettings === false){
            updateUserProfileSettings(true)
            updateAccountSettings(false)
        }else {
 
        }
    }

    const handleCloseSession = () => {
        sessionStorage.removeItem('token')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
    }


    return (
        

        <section >
            

            <Modal show={props.show} fullscreen={props.fullscreen} onHide={props.setShow}>

                {accounteSettings === true ? 
             <Modal.Body className={classes.containerModalSettings} >

             <section className={classes.containerSettings}>

                 <section className={classes.listSettings} >
                     <div className={classes.divBtnSetts}>
                         <Button variant='primary' onClick={handleClickAcc}>{d("discordApp.btnMyAcc")}</Button>
                         <Button variant='primary' onClick={handleClickUser}>{d("discordApp.btnUserProfile")}</Button>
                     </div>

                 </section>

                 <section className={classes.settingChanges}>
                     <Modal.Header style={{ border: 'none' }} closeButton><p>{d("discordApp.settingsModal")}</p></Modal.Header>

                     <article className='card-user'>
                         <header className={classes.headerUserSettings}>
                             <h1>{user.username}</h1>
                         </header>

                         <div className={classes.bodyUserContainer} >

                             <div className={classes.bodyUserSettings}>

                                 <div className={classes.usernSettings}>
                                     <p >{d("discordApp.nameSettings")}</p>
                                     <p>{user.username}</p>
                                 </div>
                                 <div>
                                     <Button onClick={() => setModalUserShow(true)} variant="info">{d("discordApp.btnEdit")}</Button>
                                 </div>
                             </div>

                             <div className={classes.bodyUserSettings}>

                                 <div >
                                     <p >{d("discordApp.email")}</p>
                                     <p>{user.email}</p>
                                 </div>
                                 <div>
                                     <Button onClick={() => setModalEmailShow(true)} variant="info">{d("discordApp.btnEdit")}</Button>
                                 </div>
                             </div>

                             <div className={classes.bodyUserSettings}>
                                 <div >
                                    <img className={classes.imgModalChange} src={user.file === '' ? defaultImg : `http://localhost:3001/${user.file}` }></img>
                                 </div>
                                 <div>
                                     <Button onClick={() =>  setModalImgShow(true)} variant="info">{d("discordApp.btnEdit")}</Button>
                                 </div>
                             </div>


                         </div>
                     </article>
                     
                     <hr />
                     <section>
                         <div className={classes.divBtnsRemove}>
                             <Button onClick={handleCloseSession} variant="danger">{d("discordApp.closeSesion")}</Button>
                             <Button onClick={() => setModalShow(true)} variant="outline-danger">{d("discordApp.deleteAcc")}</Button>
                         </div>

                     </section>

                 </section>



             </section>

         </Modal.Body>    
            
            : ''}

            {!userProfileSettings  ? '' : <UserProfileSettings handleClickAcc={handleClickAcc}></UserProfileSettings>}
               
            </Modal>
            <DeleteUser show={modalShow} onHide={() => setModalShow(false)}></DeleteUser>
            <EditEmail show={modalEmailShow} onHide={()=> setModalEmailShow(false)}></EditEmail>
            <EditUsername show={userModalShow} onHide={() => setModalUserShow(false)}></EditUsername>
            <EditImage show={imgModalShow} onHide={() => setModalImgShow(false)}></EditImage>
        </section>


    )
}

export default UserSettings