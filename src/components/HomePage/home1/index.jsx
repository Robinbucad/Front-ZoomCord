import classes from './landing.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState } from 'react'
import zoomLogo from '../../../assets/img/zoomcordLogo.png'


function HomePart1() {

    const [t] = useTranslation("header")
    const [h] = useTranslation("home")
    const [btn,setBtn] = useState(false)

    const handleClick = e => {    
            document.body.classList.toggle(classes.dark)    
            document.body.classList.toggle(classes.light)
        if(btn === false){
            setBtn(classes.active)
      
        }else{
            setBtn(false)
        }
    }

    return (
        <React.Fragment>
            <section className={classes.homePart1Container}>
                <div>
                    <div>
                        <header className={classes.headerHomepage}>

                            <img className={classes.zoomCordLogo} src={zoomLogo}></img>
                            <ul className={classes.navList}>
                                <li>{t("header.download")}</li>
                                <li>{t("header.security")}</li>
                                <li>{t("header.blog")}</li>
                                <li>{t("header.employees")}</li>
                            </ul>
                            <button onClick={handleClick} className={classes.switch} id={btn} >
                                <span><FaSun></FaSun></span>
                                <span><FaMoon></FaMoon></span>
                            </button>
                            <Link to='/login'> <button className={classes.btnHomepageLogin}>{t("header.login")}</button></Link>
                        </header>
                    </div>
                    <div className={classes.containerP1}>
                        <div className={classes.homepage1Container} >
                            <div>
                                <h1 className={classes.titleHomepage}>{h("home.titleH1")}</h1>
                            </div>
                            <div className={classes.textHomepage}>
                                <p>{h("home.textH1")}</p>
                            </div>
                            <div className={classes.divBtnsHome}>
                                <button className={classes.btnDnWindows}>{h("home.downloadWin")}</button>
                                <button className={classes.bntOpenOnNav}>{h("home.openOnNav")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomePart1