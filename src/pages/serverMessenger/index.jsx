import classes from '../../components/discordApp/messenger/friendMd.module.scss'
import {  useState } from 'react';
import UserSettingsFooter from '../../components/discordApp/footerUserSettings';
import UserSettings from '../../components/modal/settings';
import DivServs from '../../components/discordApp/DCdivServ';
import { io } from 'socket.io-client'
import { useRef } from 'react'
import { useEffect } from 'react';
import MessageServer from '../../components/discordApp/messageServ';
import { useUsername } from '../../hooks/hook-name-user';
import { Dropdown } from 'react-bootstrap'
import { Modal, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function ServerMessenger() {
    const token = sessionStorage.getItem('token')
    const tokenLocal = localStorage.getItem('token')
    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const { user } = useUsername()
    const [currentServ, updateCurrentServ] = useState('')
    const [currentServId, updateCurrentServId] = useState('')
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const socket = useRef()
    const [showLink, setShowLink] = useState(false);
    const handleCloseLink = () => setShowLink(false);
    const handleShowLink = () => setShowLink(true);
    const {id} = useParams()



    function handleShow() {
        if (show === false) {

            setShow(true)
        } else {
            setShow(false)
        }
    }


    useEffect(() => {
        socket.current = io("ws://localhost:4000")
    }, [])

    useEffect(() => {
        socket.current.on("getServMsg", (data) => {
            setMessages([...messages, data])
        })
    }, [messages])


    useEffect(() => {
       const getCurrentServ = async() => {
            try{
                const res = await fetch(`http://localhost:3001/servers/${id}`,{
                    method:'get',
                    headers:{
                        Authorization: `Bearer ${token || tokenLocal}`
                    }
                })
                const dat = await res.json()
                console.log(dat)
                updateCurrentServ(dat.name)
                updateCurrentServId(dat._id)
            }catch(err){
                console.log(err)
            }
        }
        getCurrentServ()
    },[id])

    useEffect(() => {

        const getServMsg = async () => {
            try {
                const res = await fetch(`http://localhost:3001/servMsg/${currentServId}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token || tokenLocal}`
                    },
                })
                const dat = await res.json()
                setMessages(dat)
            } catch (err) {
                console.log(err)
            }

        }
        socket.current.emit("join_serv", currentServId)
        getServMsg()
    }, [currentServId])

    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const takeDate = `${hours}:${minutes}`

    const handleSubmit = async (e) => {

        if (e.key === 'Enter') {
            const message = {
                date: takeDate,
                img: user.img,
                username: user.username,
                senderId: user._id,
                text: newMessage,
                conversationId: currentServId
            }

            socket.current.emit("sendServMsg", message)

            try {
                const res = await fetch('http://localhost:3001/servMsg/', {
                    method: 'post',
                    body: JSON.stringify(message),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token || tokenLocal }`

                    },
                })
                const dat = await res.json()
                setNewMessage('')
                setMessages([...messages, dat])

            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className={classes.containerApp}>

            <UserSettings show={show} fullscreen={fullscreen} setShow={() => handleShow(false)}></UserSettings>
            <DivServs   ></DivServs>

            <div className={classes.containerMd}>


                {/* <div className={classes.DivServList}>
                    <h4>{currentServ}</h4>

                </div> */}

                <Dropdown>
                    <Dropdown.Toggle style={{ background: 'none', border: 'none' }} >
                        {currentServ}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ background: 'black', border: 'none' }}>
                        <Dropdown.Item onClick={handleShowLink} style={{ color: 'gray' }} >Invite Friend</Dropdown.Item>
                        <Dropdown.Item style={{ color: 'gray' }} >Delete Server</Dropdown.Item>
                        <Dropdown.Item style={{ color: 'gray' }}>Ajustes</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <section>
                    <header className={classes.headerMdList}>
                        <p >Canales de texto</p>

                    </header>
                    {/**AQUI CANALES DE TEXTO> */}

                </section>


                <section>
                    <header className={classes.headerMdList}>
                        <p >Canales de Voz</p>

                    </header>
                    {/**AQUI CANALES DE VOZ */}

                </section>



                <div className={classes.userSetts} >
                    <UserSettingsFooter handleShow={handleShow}></UserSettingsFooter>


                </div>
            </div>
            <div className={classes.chatContainer}>
                <header className={classes.headerChat}>
                    <p>NAME CHANNEL</p>
                    <div className={classes.settingsChat}>
                        <p>Call</p>
                        <p>Videocall</p>
                        <input placeholder="Buscar" className={classes.inputSearchMsgChat} type='text'></input>

                    </div>
                </header>

                <div className={classes.conversation}>
                    <div className={classes.chatBox}>
                        {messages.map((m, i) => (
                            <MessageServer key={i} message={m}></MessageServer>
                        ))}
                    </div>
                    <div className={classes.divInputChat}>
                        <input value={newMessage} type='text' className={classes.inputChat} onKeyPress={handleSubmit} onChange={(e) => setNewMessage(e.target.value)} placeholder="Escriba algo"></input>
                    </div>
                </div>

            </div>

            <div className={classes.activeUsersDiv}>
                <p>HOLA GENTE</p>
            </div>

            <Modal show={showLink} onHideLink={handleCloseLink}>

                <section className={classes.bodyModal}>
                    <Modal.Header style={{ border: 'none' }}>
                        <Modal.Title>{`Invitar a ${currentServ}`}</Modal.Title>
                    </Modal.Header>
                    <div className={classes.divInviteFriend}>
                        <p>Mándale este enlace a tu amigo!!</p>
                        <input className={classes.inputInviteFriend} value={`http://localhost:3000/invite/${currentServId}`}></input>

                    </div>



                    <Modal.Footer style={{ border: 'none' }}>
                        <Button variant="secondary" onClick={handleCloseLink}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseLink}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </section>

            </Modal>
        </div>
    )
}

export default ServerMessenger