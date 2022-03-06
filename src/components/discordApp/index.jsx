
import './style.css'
import logo from '../../assets/img/discord-logo-serv.png'
import CreateServModal from '../modal/createServ'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function DiscordApp() {

    const [modalServShow, setServModalShow] = useState(false)

    return (
        <section className="div-app-discord">
            <CreateServModal show={modalServShow} onHide={() => setServModalShow(false)} ></CreateServModal>
            <div className='icons-div'>
               <Link to='/discord'> <button className='icon-serv'>
                    <img className='img-serv' src={logo}></img>
                </button></Link>

                <div className='icon-serv'>
                    <img className='img-serv' src={logo}></img>
                </div>

                <button onClick={() => setServModalShow(true)} className='icon-serv-add'>
                    <h1>+</h1>
                </button>

            </div>
            <div className='div-friends'>
                <div className='div-input-search-app'>
                    <input className='input-search-listfriends' type='text' placeholder='Busca una conversación'></input>
                </div>
                <div className='friend-nitro'>
                    <div className='card-div'>
                        <p>Amigos</p>
                    </div>

                    <div className='card-div'>
                        <p>Nitro</p>
                    </div>
                </div>

                <div className='friends-info-list'>
                    <header className='header-list-friends'>
                        <p>MENSAJES DIRECTOS</p>
                        <button>+</button>
                    </header>





                    <div className='info-friend'>
                        <div className='card-div'>
                            <div className='img-user-friend'>

                            </div>

                            <div className='info-friend'>
                                <p className='friend'>Tyles.</p>
                                <p>Jugando a fortnite</p>
                            </div>

                        </div>

                        <div className='card-div'>
                            <div className='img-user-friend'>

                            </div>

                            <div className='info-friend'>
                                <p className='friend'>Tyles.</p>
                                <p>Jugando a fortnite</p>
                            </div>

                        </div>

                        <div className='card-div'>
                            <div className='img-user-friend'>

                            </div>

                            <div className='info-friend'>
                                <p className='friend'>Tyles.</p>
                                <p>Jugando a fortnite</p>
                            </div>

                        </div>

                        <div className='card-div'>
                            <div className='img-user-friend'>

                            </div>

                            <div className='info-friend'>
                                <p className='friend'>Tyles.</p>
                                <p>Jugando a fortnite</p>
                            </div>

                        </div>
                    </div>

                    <footer className='footer-user'>
                        <div className='user-footer-img'>
                            <p>HOLA</p>
                        </div>
                        <div className='user-info-footer'>
                            <p className='user-name'>BeZzK</p>
                            <p>#3616</p>
                        </div>
                        <div className='user-info-opts'>
                            <p>MUT</p>
                            <p>ENS</p>
                            <p>SETT</p>
                        </div>
                    </footer>


                </div>

            </div>
            <div >
                <header>
                    <ul className='header-app-list'>
                        <li>Amigos</li>
                        <li>Contectado</li>
                        <li>Pendiente</li>
                        <li>Bloqueado</li>
                        <li>Añadir amigo</li>
                    </ul>
                </header>
                <section className='container-friends'>
                    <div className='friend-list-search'>
                        <div>
                            <input placeholder='Buscar' className='input-list-app' type='text'></input>
                        </div>

                        <div>
                            <p>Conectado</p>
                        </div>

                        <div>
                            <div className='card-list-connected'>
                                <div className='card-user-info-list'>
                                    <div className='img-user-div-list'>
                                       
                                    </div>
                                    <div>
                                        <p className='friend'>Alno</p>
                                        <p>No molestar</p>
                                    </div>

                                </div>

                                <div className='option-info-user'>
                                    <p>cht</p>
                                    <p>OPT</p>
                                </div>

                            </div>

                            <div className='card-list-connected'>
                                <div className='card-user-info-list'>
                                    <div className='img-user-div-list'>
                                      
                                    </div>
                                    <div>
                                        <p className='friend'>Alno</p>
                                        <p>No molestar</p>
                                    </div>

                                </div>

                                <div className='option-info-user'>
                                    <p>cht</p>
                                    <p>OPT</p>
                                </div>

                            </div>
                        </div>




                    </div>

                    <div className='active-friends'>
                        <div className='header-active-friends'>
                            <p>Activo ahora</p>
                        </div>

                    </div>
                </section>


            </div>

        </section>
    )
}

export default DiscordApp