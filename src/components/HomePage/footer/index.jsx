
import { Link } from 'react-router-dom'
import classes from './footer.module.scss'
import { useTranslation } from 'react-i18next'
import ES from '../../../assets/img/ES.svg'
import { useState } from 'react'
import KY from '../../../assets/img/KY.svg'
import zoomLogo from '../../../assets/img/zoomcordLogo.png'


import {BsLinkedin,BsInstagram} from 'react-icons/bs'

function HomeFooter() {

    const [flag,updateFlag] = useState(ES)


    const [t, i18n] = useTranslation("header")
    const [h, setH] = useTranslation("home")
    const [reg, setReg] = useTranslation("registerLogin")

    const handleChange = e => {
        if (e.target.value === 'en') {
            i18n.changeLanguage("en") // change language viene de la libreria, se usa para cambiar el idioma segun hayas puesto en el index.js
            setH.changeLanguage("en")
            setReg.changeLanguage("en")
            updateFlag(KY)
            
        } else if (e.target.value === 'es') {
            i18n.changeLanguage("es")
            setH.changeLanguage("es")
            setReg.changeLanguage("es")
            updateFlag(ES)
        }
    }


    return (
        <footer className={classes.footerHome}>
            <div className={classes.part1Footer}>
                <div className={classes.divFooterOpts}>
                    
                    <h2 className={classes.titleFooter}>{h("home.footerTitle")}</h2>
                    <div>
                    {flag === ES ? <img className={classes.imgFlag} src={ES}></img> :  <img className={classes.imgFlag} src={KY}></img>}
                        <select className='select-lng' onChange={handleChange}>
                            <option className={classes.optSelect} value='es'> Es</option>
                            <option className={classes.optSelect} value='en'> En</option>
                        </select>
                    </div>

                    <div className={classes.iconsSection}>
                       <a href='https://www.linkedin.com/in/robin-bucad-villanueva-66a583231/?trk=public-profile-join-page' target='_blank'><BsLinkedin></BsLinkedin></a> 
                        <a href='https://www.instagram.com/RobinBucad/' target='_blank'><BsInstagram></BsInstagram></a>
                    </div>
                </div>
                <div>
                    <p className={classes.myName}>{h("home.author")}</p>
                </div>
            </div>
            <div className={classes.part2Footer}>
                <Link to='/signUp'> <button className={classes.btnLoginFooter}>{h("home.signup")}</button></Link>
            </div>
        </footer>
    )
}

export default HomeFooter

