import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import classes from './settings.module.scss'
import UserProfileSettings from './profile';
import DeleteUser from './delete.modal';
import { useNavigate } from 'react-router-dom';
import { useUsername } from '../../../hooks/hook-name-user';


function UserSettings(props) {
    let navigate = useNavigate()
    const [accounteSettings, updateAccountSettings] = useState(true)
    const [userProfileSettings, updateUserProfileSettings] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const {user} = useUsername()

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
                         <Button variant='primary' onClick={handleClickAcc}>Mi cuenta</Button>
                         <Button variant='primary' onClick={handleClickUser}>Perfil de usuario</Button>
                     </div>

                 </section>

                 <section className={classes.settingChanges}>
                     <Modal.Header style={{ border: 'none' }} closeButton><p>Ajustes</p></Modal.Header>

                     <article className='card-user'>
                         <header className={classes.headerUserSettings}>
                             <h1>{user.username}</h1>
                         </header>

                         <div className={classes.bodyUserContainer} >

                             <div className={classes.bodyUserSettings}>

                                 <div className={classes.usernSettings}>
                                     <p >NOMBRE DE USUARIO</p>
                                     <p>{user.username}</p>
                                 </div>
                                 <div>
                                     <Button variant="info">Editar</Button>
                                 </div>
                             </div>

                             <div className={classes.bodyUserSettings}>

                                 <div >
                                     <p >CORREO ELECTRONICO</p>
                                     <p>{user.email}</p>
                                 </div>
                                 <div>
                                     <Button variant="info">Editar</Button>
                                 </div>
                             </div>

                             <div className={classes.bodyUserSettings}>
                                 <div >
                                     <p className='userName'>NUMERO DE TELEFONO</p>
                                     <p>{user.tlf}</p>
                                 </div>
                                 <div>
                                     <Button variant="info">Editar</Button>
                                 </div>
                             </div>


                         </div>
                     </article>
                     <hr />
                     <section className={classes.passwordSettings}>
                         <h1 className={classes.titlePassSetts}>Contraseña y autenticación</h1>
                         <Button variant="info">Cambiar contraseña</Button>
                     </section>
                     <hr />
                     <section>
                         <div className='div-btns-remove'>
                             <Button onClick={handleCloseSession} variant="danger">Cerrar Sesion</Button>
                             <Button onClick={() => setModalShow(true)} variant="outline-danger">Eliminar cuenta</Button>
                         </div>

                     </section>

                 </section>



             </section>

         </Modal.Body>    
            
            : ''}

            {userProfileSettings === false ? '' : <UserProfileSettings handleClickAcc={handleClickAcc}></UserProfileSettings>}
               
            </Modal>
            <DeleteUser show={modalShow} onHide={() => setModalShow(false)}></DeleteUser>
        </section>


    )
}

export default UserSettings