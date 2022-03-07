
import { useParams } from 'react-router-dom'
import './style.css'
import DivFriend from '../DCmdList'
import DivServs from '../DCdivServ'

function Chat() {

    let { id } = useParams()
    console.log(id)


    return (

        <section className="div-app-discord">
            <DivServs></DivServs>
            <DivFriend></DivFriend>
             <section className='chat-container'>
            <header className="header-chat">
                    <p>Name Chat</p>
                <div className='group-header-chat'>
                    <p>Noti</p>
                    <p>Members</p>
                    <input className='input-chat-serv' type='text' placeholder='Buscar'></input>
                    <p>Help</p>
                </div>
            </header>

            <section className='chat'>
                    <div>
                        <p>Chat</p>
                    </div>

                    <footer className='div-input-chat'>
                        <input placeholder='Enviar mensaje a #general' className='input-chat' type="text" />
                    </footer>
            </section>
        </section>
        </section>
       
    )
}

export default Chat