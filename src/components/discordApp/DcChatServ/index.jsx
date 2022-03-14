import './style.css'

function ChatServ(){
    return(
        <section>
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
    )
}

export default ChatServ