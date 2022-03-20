import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useUsername } from '../../../hooks/hook-name-user'
import classes from './addUser.module.scss'

function FollowUser(props) {
    const token = sessionStorage.getItem('token')
    const [userSearch, setUserSearch] = useState('')
    const [userFind, setUserFind] = useState([])
    const {user} = useUsername()
    const [idUserFind,setUserId] = useState('')

    const handleSubmit = async e => {
        if (e.key === 'Enter') {
            try {
                const res = await fetch(`http://localhost:3001/users/friends/${userSearch}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const dat = await res.json()
                setUserFind(dat)
                dat.map(u => setUserId(u._id))
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleAddUser = async e => {

        const members = { 
             senderId:user._id,
            receiverId:idUserFind
        }
        
     
        e.preventDefault()
        try{
            const res = await fetch(`http://localhost:3001/conversation/`,{
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`                 
                },
                body:JSON.stringify(members)
            })
            const dat =await res.json()
          
            console.log(dat)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <Modal  {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

            <section className={classes.modalContainer}>
                <div className={classes.inputDiv}>
                    <input onChange={(e) => setUserSearch(e.target.value)} onKeyPress={handleSubmit} className={classes.inputAdduser} type='text' placeholder='Busca usuario'></input>
                    <div>
                        {userFind.map((e, i) => (
                            <div className={classes.divAddUser} key={i}>
                                <div className={classes.divInfoUserAdd}>

                                    <img className={classes.addUserImg} src={e.img}></img>
                                    <p>{e.username}</p>
                                </div>
                                <div>
                                    <button onClick={handleAddUser}>Add</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>





                <footer>
                    <button onClick={props.onHide}>Close</button>
                </footer>
            </section>
        </Modal>
    )
}

export default FollowUser