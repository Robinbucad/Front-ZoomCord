import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import './style.css'
import UserProfileSettings from './profile';


function UserSettings(props) {

    const [accounteSettings, updateAccountSettings] = useState(true)
    const [userProfileSettings, updateUserProfileSettings] = useState(false)

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

    return (
        

        <section className='container-settings-father'>
            

            <Modal show={props.show} fullscreen={props.fullscreen} onHide={props.setShow}>

                {accounteSettings === true ? 
             <Modal.Body className='container-modal-settings' >

             <section className='container-settings'>

                 <section className='list-settings' >
                     <div className='div-btns-setts'>
                         <Button variant='primary' onClick={handleClickAcc}>Mi cuenta</Button>
                         <Button variant='primary' onClick={handleClickUser}>Perfil de usuario</Button>
                     </div>

                 </section>

                 <section className='setting-changes'>
                     <Modal.Header style={{ border: 'none' }} closeButton><p>Ajustes</p></Modal.Header>

                     <article className='card-user'>
                         <header className='header-user-settings'>
                             <h1>BeZzK</h1>
                             <Button variant="primary">Editar perfil de</Button>
                         </header>

                         <div className="body-user-container" >

                             <div className="body-user-settings">

                                 <div className='userName-settings'>
                                     <p className='userName'>NOMBRE DE USUARIO</p>
                                     <p>BeZzK</p>
                                 </div>
                                 <div>
                                     <Button variant="info">Editar</Button>
                                 </div>
                             </div>

                             <div className="body-user-settings">

                                 <div className='userName-settings'>
                                     <p className='userName'>CORREO ELECTRONICO</p>
                                     <p>Robin.bucad6@gmail.com</p>
                                 </div>
                                 <div>
                                     <Button variant="info">Editar</Button>
                                 </div>
                             </div>

                             <div className="body-user-settings">

                                 <div className='userName-settings'>
                                     <p className='userName'>NUMERO DE TELEFONO</p>
                                     <p>616923547</p>
                                 </div>
                                 <div>
                                     <Button variant="info">Editar</Button>
                                 </div>
                             </div>


                         </div>
                     </article>
                     <hr />
                     <section className='password-settings'>
                         <h1 className='title-pass-setts'>Contraseña y autenticación</h1>
                         <Button variant="info">Cambiar contraseña</Button>
                         <div >
                             <p className='auth-pass'>AUTENTICACIÓN DE DOS FACTORES</p>
                             <p className='auth-pass-text'>Protege tu cuenta de Discord con una capa extra de seguridad. Una vez configurada, tendrás que introducir
                                 tanto tu contraseña como un código de autenticación desde tu telédono para iniciar sesión.
                             </p>
                         </div>

                         <Button variant="info">Habilitar autenticación de dos factores</Button>
                     </section>
                     <hr />
                     <section className='del-acc-sett'>
                         <p>SUPRESIÓN DE CUENTA</p>
                         <p>Puedes recuperar la cuenta en cualquier momento después de dehabilitarla</p>
                         <div className='div-btns-remove'>
                             <Button variant="danger">Deshabilitar Cuenta</Button>
                             <Button variant="outline-danger">Eliminar cuenta</Button>
                         </div>

                     </section>

                 </section>



             </section>

         </Modal.Body>    
            
            : ''}

            {userProfileSettings === false ? '' : <UserProfileSettings handleClickAcc={handleClickAcc}></UserProfileSettings>}
               
            </Modal>
        </section>


    )
}

export default UserSettings