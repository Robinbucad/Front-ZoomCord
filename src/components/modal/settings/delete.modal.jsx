import {Modal, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useUsername } from '../../../hooks/hook-name-user'

function DeleteUser(props){
    const token = sessionStorage.getItem('token')
    let navigate = useNavigate()
    const {idUser} = useUsername()
    console.log(idUser)

    const handleDeleteClick = async(e) => {
        e.preventDefault()
        const res =await fetch(`http://localhost:3001/users/${idUser}`,{
            method:'delete',
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        const dat =await res.json()
        sessionStorage.removeItem('token')
        navigate('/')
    }

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
      
          <p>
            ¿Estas seguro de que quieres borrar tu cuenta? Todos tus datos seran borrados y no se podran recuperar en ningun momento.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleDeleteClick} >Borrar</Button>
        </Modal.Footer>
      </Modal>
    
  
    )
}

export default DeleteUser