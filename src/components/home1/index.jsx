import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'


function HomePart1() {



    return (
        <React.Fragment>
            <section className="home-part1-container">
                <div>
                    <div>
                        <header className='header-homepage'>
                            <p>Imagen dsicord</p>
                            <ul className='nav-list'>
                                <li>Descargar</li>
                                <li>Nitro</li>
                                <li>Seguridad</li>
                                <li>Soporte técnico</li>
                                <li>Blog</li>
                                <li>Empledaos</li>
                            </ul>
                           <Link to='/login'> <button className='btn-homepage-login'>Iniciar sesión</button></Link>
                        </header>
                    </div>
                    <div className='container-p1'>
                        <div className='homepage1-container' >
                            <div>
                                <h1 className='title-homepage'>IMAGINA UN LUGAR...</h1>
                            </div>
                            <div className='text-homepage'>
                                <p>... en el que puedas formar parte de un club escolar, un grupo de jugadores o una comunidad mundial de arte. En el que puedas pasar tiempo con unos cuantos amigos.
                                    Un lugar que haga que hablar a diario y divertirte más a menudo sea fácil.</p>
                            </div>
                            <div className='div-btns-home'>
                                <button className='btn-dnWindows'>Descargar para Windows</button>
                                <button className='bnt-openOnNav'>Abrir discord en tu navegador</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomePart1