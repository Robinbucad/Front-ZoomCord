import DivServs from "../DCdivServ"
import DivFriend from "../DCmdList"
import './style.css'
import ServerChat from "../DCservChat"

function DiscServer() {
    return (

        <section className="div-app-discord">
            <DivServs></DivServs>
            <section className="management-channels">
                <section >

                    <div className="header-title-serv">
                        <p>Name of server</p>
                    </div>


                    <div>
                        <div className="text-channels-container">
                            <header className="header-text-channel">
                                <p>TEXT CHANNELS</p>
                                <button>+</button>
                            </header>
                            <div className="card-text">
                                <p>#general</p>
                                <div className="opt-text-card">
                                    <p>O1</p>
                                    <p>02</p>
                                </div>
                            </div>

                            <div className="card-text">
                                <p>#general2</p>
                                <div className="opt-text-card">
                                    <p>O1</p>
                                    <p>02</p>
                                </div>
                            </div>

                            <div className="card-text">
                                <p>#general3</p>
                                <div className="opt-text-card">
                                    <p>O1</p>
                                    <p>02</p>
                                </div>
                            </div>

                        </div>
                        <div className="voice-channels-container">
                            <header className="voice-channels">
                                <p>VOICE CHANNELS</p>
                                <button>+</button>
                            </header>
                            <div className="card-voice">
                                <p>General</p>
                            </div>

                            <div className="card-voice">
                                <p>General2</p>
                            </div>

                            <div className="card-voice">
                                <p>General3</p>
                            </div>
                        </div>
                    </div>
                </section>


                <footer className='footer-user'>
                    <div className='user-footer-img'>
                        <p>HOLA</p>
                    </div>
                    <div className='user-info-footer'>
                        <p className='user-name'>BeZzK</p>
                        <p>#3616</p>
                    </div>
                    <div className='user-info-opts'>
                        <p>M</p>
                        <p>E</p>
                        <p>S</p>
                    </div>
                </footer>
            </section>




            <ServerChat></ServerChat>
        </section>

    )
}

export default DiscServer