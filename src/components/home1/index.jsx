import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


function HomePart1() {

    const [t] = useTranslation("header")
    const [h] = useTranslation("home")
    
    console.log(h("home.titleH1"))
    return (
        <React.Fragment>
            <section className="home-part1-container">
                <div>
                    <div>
                        <header className='header-homepage'>
                            
                            <p>Imagen dsicord</p>
                            <ul className='nav-list'>
                                <li>{t("header.download")}</li>
                                <li>Nitro</li>
                                <li>{t("header.security")}</li>
                                <li>{t("header.technical support")}</li>
                                <li>{t("header.blog")}</li>
                                <li>{t("header.employees")}</li>
                            </ul>
                           <Link to='/login'> <button className='btn-homepage-login'>{t("header.login")}</button></Link>
                        </header>
                    </div>
                    <div className='container-p1'>
                        <div className='homepage1-container' >
                            <div>
                                <h1 className='title-homepage'>{h("home.titleH1")}</h1>
                            </div>
                            <div className='text-homepage'>
                                <p>{h("home.textH1")}</p>
                            </div>
                            <div className='div-btns-home'>
                                <button className='btn-dnWindows'>{h("home.downloadWin")}</button>
                                <button className='bnt-openOnNav'>{h("home.openOnNav")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomePart1