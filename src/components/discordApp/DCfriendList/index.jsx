import './style.css'

function FriendList() {
    return (
        <div className="container-friendList">
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
    )
}

export default FriendList