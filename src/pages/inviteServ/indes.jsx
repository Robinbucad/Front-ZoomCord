import classes from './invite.module.scss'
import { Card, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user/user.contex'


function InvitationPage() {

    const { id } = useParams()
    const token = localStorage.getItem('token')
    const [servName, setServName] = useState('')
    const [servImg, setServImg] = useState('')
    const [members, setMembers] = useState([])
    const [user,setUser] = useContext(UserContext)
    const [load,setLoad] = useState(false)

    useEffect(() => {
        const fetchServers = async () => {
            try {
                const res = await fetch(`http://localhost:3001/servers/${id}`)
                const dat = await res.json()
                setServName(dat.name)
                setServImg(dat.img)
                setMembers(dat.members)

            } catch (err) {
                console.log(err)
            }
        }
        fetchServers()
    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const res = await fetch(`http://localhost:3001/servers/${id}`,{
                method:'post',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    userId:user._id
                })
            })
            const dat = await res.json()
        
        }catch(err){
            alert('El usuario ya existe en el servidor')
        }
        setLoad(true)
       
    } 

    return (
        <section className={classes.invitationContainer}>
            <Card className={classes.cardInvitation} >
                <div className={classes.divImgInv}>
                    <img className={classes.imgServInv} variant="top" src={servImg} />
                </div>

                <Card.Body className={classes.bodyCardInv}>
                    <div className={classes.divInfoServ}>
                        <Card.Title>{servName}</Card.Title>
                        <p>{members.length !== 1 ? `${members.length} miembros` : `${members.length} miembro`}</p>
                    </div>
                {load === false ? 
                    <Button className={classes.btnInvite} onClick={handleSubmit} variant="primary">Aceptar invitacion</Button>
                : <p>Vuelve a la página y refresca :D</p>
                }
                </Card.Body>
            </Card>
        </section>

    )
}

export default InvitationPage