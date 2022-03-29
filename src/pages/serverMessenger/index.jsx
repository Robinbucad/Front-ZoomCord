import classes from '../../components/discordApp/messenger/friendMd.module.scss'
import { useContext, useState } from 'react';
import UserSettingsFooter from '../../components/discordApp/footerUserSettings';
import UserSettings from '../../components/modal/settings';
import DivServs from '../../components/discordApp/DCdivServ';
import { io } from 'socket.io-client'
import { useRef } from 'react'
import { useEffect } from 'react';
import MessageServer from '../../components/discordApp/messageServ';
import { Dropdown } from 'react-bootstrap'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../context/user/user.contex';
import Posts from '../../components/discordApp/posts';
import defaultPicture from '../../assets/img/default.jpg'
import { useTranslation } from "react-i18next"


function ServerMessenger() {
    const token = sessionStorage.getItem('token')
    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [currentServ, updateCurrentServ] = useState('')
    const [currentServId, updateCurrentServId] = useState('')
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [socket,setSocket] = useState(null)
    const [showLink, setShowLink] = useState(false);
    const handleCloseLink = () => setShowLink(false);
    const handleShowLink = () => setShowLink(true);
    const { id } = useParams()
    const [user, setUser] = useContext(UserContext)
    const [members, setMembers] = useState([])
    const [listMembers, setListMembers] = useState([])
    const [smShow, setSmShow] = useState(false);
    const [nameServ, setNameServ] = useState('')
    const [smChangeShow,setSmChangeShow]= useState(false)
    const [newServName,setNewServName] = useState('')
    const [msgFiltered,setMsgFiltered] = useState([])
    const scrollRef = useRef()
    const [d] = useTranslation("discordApp")

    useEffect(() => {
        setSocket(io("http://localhost:4000"))
    }, [])

    let navigate = useNavigate()
   
    function handleShow() {
        if (show === false) {

            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        socket?.off("getServMsg")
        socket?.on("getServMsg", (data) => {
            setMsgFiltered([...msgFiltered,data])
            setMessages([...messages, data])  
            if (Notification.permission === 'granted') {
                new Notification(data.username, {
                    body: data.text,
                    icon: `${data.file === '' ? defaultPicture : `http://localhost:3001/${data.file}`}`
                })
            }
        })
    }, [messages])

    


    useEffect(() => {
        const getCurrentServ = async () => {
            try {
                const res = await fetch(`http://localhost:3001/servers/${id}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const dat = await res.json()
                setMembers(dat.members)
                updateCurrentServ(dat.name)
                updateCurrentServId(dat._id)
                setListMembers(dat.members)
            } catch (err) {
                console.log(err)
            }
        }
        getCurrentServ()
    }, [id])

  

    useEffect(() => {

        const getServMsg = async () => {
            try {
                const res = await fetch(`http://localhost:3001/servMsg/${currentServId}`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                const dat = await res.json()
                setMessages(dat)
                setMsgFiltered(dat)
            } catch (err) {
                console.log(err)
            }

        }
        socket?.emit("join_serv", currentServId)
        getServMsg()
    }, [currentServId])

    const date = new Date()

    const handleSubmit = async (e) => {

        if (e.key === 'Enter') {
            const message = {
                date: date,
                file: user.file,
                username: user.username,
                senderId: user._id,
                text: newMessage,
                conversationId: currentServId
            }

            socket?.emit("sendServMsg", message)

            try {
                const res = await fetch('http://localhost:3001/servMsg/', {
                    method: 'post',
                    body: JSON.stringify(message),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`

                    },
                })
                const dat = await res.json()
                setNewMessage('')
                setMessages([...messages, dat])
                setMsgFiltered([...msgFiltered,dat])
            } catch (err) {
                console.log(err)
            }
        }
    }



    const handleDelServ = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:3001/servers/${currentServId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: nameServ,
                    userId: user._id
                })
            })
            const dat = await res.json()

            setTimeout(() => {
                navigate(`/discord/@me/${user._id}`)
            }, 250)


        } catch (err) {
            alert('O no eres admin, o has escrito mal el nombre del servidor')
        }
    }

    const handleNewServName = async(e) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:3001/servers/${currentServId}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: newServName,
                    userId: user._id
                })
            })
            const dat = await res.json()

            setTimeout(() => {
                window.location.reload()
            }, 250)


        } catch (err) {
            alert('No eres administrador')
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages])

    const filterMsg = e => {
        const msgFiltered = messages.filter(m => m.text.toLowerCase().includes(e.target.value))
        setMsgFiltered(msgFiltered)
    }


    return (
        <div className={classes.containerApp}>

            <UserSettings show={show} fullscreen={fullscreen} setShow={() => handleShow(false)}></UserSettings>
            <DivServs   ></DivServs>

            <div className={classes.containerMd}>


                <div className={classes.DivServList}>
                    <h4>{currentServ}</h4>
                    <Dropdown>
                        <Dropdown.Toggle style={{ background: 'none', border: 'none' }} >

                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ background: 'black', border: 'none' }}>
                            <Dropdown.Item onClick={handleShowLink} style={{ color: 'gray' }} > {d("discordApp.server")}</Dropdown.Item>
                            <Dropdown.Item style={{ color: 'gray' }} onClick={() => setSmShow(true)} >{d("discordApp.deleteServ")}</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSmChangeShow(true)} style={{ color: 'gray' }}>{d("discordApp.settings")}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>



                <div className={classes.sectionsServer}>
                    <section>
                        <header className={classes.headerMdList}>
                            <p >{d("discordApp.usersServ")}</p>
                            <p>{listMembers.length}</p>
                        </header>
                

                    </section>

                </div>



                <div className={classes.userSetts} >
                    <UserSettingsFooter handleShow={handleShow}></UserSettingsFooter>


                </div>
            </div>
            <div className={classes.chatContainer}>
                <header className={classes.headerChat}>
                    <p></p>
                    <div className={classes.settingsChat}>
                        <p></p>
                        <p></p>
                        <input placeholder={d("discordApp.searchMsg")} onChange={filterMsg} className={classes.inputSearchMsgChat} type='text'></input>

                    </div>
                </header>

                <div className={classes.conversation}>
                    <div className={classes.chatBox}>
                        {msgFiltered?.map((m, i) => (
                            <div key={i} ref={scrollRef}>
                            <MessageServer  message={m}></MessageServer>
                            </div>
                        ))}
                    </div>
                    <div className={classes.divInputChat}>
                        <input value={newMessage} type='text' className={classes.inputChat} onKeyPress={handleSubmit} onChange={(e) => setNewMessage(e.target.value)} placeholder="Escriba algo"></input>
                    </div>
                </div>

            </div>

            <div className={classes.activeUsersDiv}>
                <Posts></Posts>
            </div>

            <Modal show={showLink} onHideLink={handleCloseLink}>

                <section className={classes.bodyModal}>
                    <Modal.Header style={{ border: 'none' }}>
                        <Modal.Title>{`${d("discordApp.inviteTo")} ${currentServ}`}</Modal.Title>
                    </Modal.Header>
                    <div className={classes.divInviteFriend}>
                        <p>{d("discordApp.inviteServ")}</p>
                        <input className={classes.inputInviteFriend} value={`http://localhost:3000/invite/${currentServId}`}></input>

                    </div>



                    <Modal.Footer style={{ border: 'none' }}>
                        <Button variant="secondary" onClick={handleCloseLink}>
                            {d("discordApp.close")}
                        </Button>
                     
                    </Modal.Footer>
                </section>


            </Modal>
            <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}>
                <section className={classes.modalDeleteServer}>
                    <Modal.Header className={classes.headerDeleteServer} closeButton>
                        <h4>
                            {d("discordApp.deleteServ")} {currentServ}
                        </h4>
                    </Modal.Header>
                    <section className={classes.bodyModalDel}>
                        <div className={classes.divAskDelServ}>
                            <p className={classes.askDelServ}>{d("discordApp.modalDelServQuestion")} {currentServ}?</p>
                        </div>


                        <div className={classes.inputDivDelServ}>
                            <p>{d("discordApp.putNameServDel")}</p>
                            <input onChange={(e) => setNameServ(e.target.value)} className={classes.inputDel} type='text'></input>
                        </div>
                        <footer className={classes.footerDel}>

                            <Button onClick={handleDelServ} variant="danger">{d("discordApp.btnDel")}</Button>

                        </footer>
                    </section>
                </section>

            </Modal>
            <Modal size="sm" show={smChangeShow} onHide={() => setSmChangeShow(false)}>
                <section className={classes.modalChangeServer}>
                    <Modal.Header className={classes.headerDeleteServer} closeButton>
                        <h4>
                             {d("discordApp.changeNameModal")} {currentServ}
                        </h4>
                    </Modal.Header>
                    <section className={classes.bodyModalDel}>
                        <div className={classes.divAskDelServ}>
                            <p className={classes.askDelServ}> {d("discordApp.questionNameModal")} {currentServ}?</p>
                        </div>

                        <div className={classes.inputDivDelServ}>
                            <p>{d("discordApp.newName")}</p>
                            <input onChange={(e) => setNewServName(e.target.value)}  className={classes.inputDel} type='text'></input>
                        </div>
                        <footer className={classes.footerDel}>

                            <Button onClick={handleNewServName} variant="primary">{d("discordApp.btnChangeName")}</Button>

                        </footer>
                    </section>
                </section>

            </Modal>

        </div>
    )
}

export default ServerMessenger