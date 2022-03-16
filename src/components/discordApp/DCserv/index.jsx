import DivServs from "../DCdivServ"

import './style.css'
import Chat from "../DcChat"
import UserSettingsFooter from "../footerUserSettings"
import UserSettings from "../../modal/settings"
import { useState } from "react"
import ChatServ from "../DcChatServ"
import CreateServChannel from "../../modal/createServChannel"
import { GearFill } from 'react-bootstrap-icons'


function DiscServer() {

    const [fullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const [modalShow,setModalShow] = useState(false)
    const [nameChannel, updateNameChannel] = useState('')
    const [listText, updateListText] = useState('nuevo-canal')
    const [listChannel, updateListChannel] = useState([])
    const [valueInput, setValueInput] = useState('')
    const [listVoiceChannel, setVoiceList] = useState([])

    console.log(listChannel)

    let textChannel = {
        name:listText
    }

    let voiceChannel = {
        name:listText
    }

    const updateModalShow = e => {
        if(modalShow === false){
            setModalShow(true)
        }else{
            setModalShow(false)
        }
    }

    const createChannel = e => {
        if(valueInput === 'text'){
            updateListChannel(list => [...list,textChannel])
        }else{
            setVoiceList(list => [...list,voiceChannel])
        }
        
        setModalShow(false)
        
    }

    console.log(listChannel)


    const handleNameChannel = e => {
        updateNameChannel(e.target.value)
        updateListText(nameChannel)
    }

    function handleShow () {
        if(show === false){
            
            setShow(true)
        }else{
            setShow(false)
        }
    }

    const handlevalue = e => {
        setValueInput(e.target.value)

    }




    return (

        <section className="div-app-discord">
             <UserSettings show={show} fullscreen={fullscreen} setShow={() => handleShow(false)}></UserSettings>
            <DivServs></DivServs>
            <section className="management-channels">
                <section className="container-channels-serv" >

                    <div className="header-title-serv">
                        <p className="title-server">Name of server</p>
                    </div>

                   
                        <div className="text-channels-container">
                            <header className="header-text-channel">
                                <p className='opt-title-serv'>TEXT CHANNELS</p>
                                <button className="btn-add-chann" onClick={() => setModalShow(true)}>+</button>
                            </header>
                            
                        
                            {listChannel.map((e) => (
                                <div className="card-text">
                                <p>#{e.name}</p>
                                <div className="opt-text-card">
                                <button className="gear-serv"><GearFill></GearFill></button>
                                </div>
                            </div>
                           )) }
                      
                          
 
                    

                        </div>
                        <div className="voice-channels-container">
                            <header className="voice-channels">
                                <p className='opt-title-serv'>VOICE CHANNELS</p>
                                <button className="btn-add-chann" onClick={() => setModalShow(true)}>+</button>
                            </header>
                            
                            {listVoiceChannel.map((e) => (
                                <div className="card-text">
                                <p>{e.name}</p>
                                <div className="opt-text-card">
                                    <button className="gear-serv"><GearFill></GearFill></button>
                                </div>
                            </div>
                           )) }
                        </div>
                    
                </section>
                <CreateServChannel handlevalue={handlevalue} handleNameChannel={handleNameChannel} createChannel={createChannel} show={modalShow} onHide={updateModalShow}></CreateServChannel>
                <UserSettingsFooter handleShow={handleShow}></UserSettingsFooter>


            </section>




            <ChatServ></ChatServ>
        </section>

    )
}

export default DiscServer
