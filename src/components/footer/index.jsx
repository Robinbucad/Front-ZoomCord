
import { Link } from 'react-router-dom'
import './style.css'
import { useTranslation } from 'react-i18next'
import ES from '../../assets/img/ES.svg'
import { useState } from 'react'
import KY from '../../assets/img/KY.svg'


function HomeFooter() {

    const [flag,updateFlag] = useState('')


    const [t, i18n] = useTranslation("header")
    const [h, setH] = useTranslation("home")
    const [reg, setReg] = useTranslation("registerLogin")

    const handleChange = e => {
        if (e.target.value === 'en') {
            i18n.changeLanguage("en")
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
        <footer className="footer-home">
            <div className='part1-footer'>
                <div>
                    
                    <h2 className='title-footer'>{h("home.footerTitle")}</h2>
                    <div>
                    {flag === ES ? <img className='img-flag' src={ES}></img> :  <img className='img-flag' src={KY}></img>}
                        <select className='select-lng' onChange={handleChange}>
                            <option className='opt-select' value='es'> Español</option>
                            <option className='opt-select' value='en'> English</option>
                            <option className='opt-select'>Français</option>
                        </select>
                    </div>

                    <div>
                        <p>Redes sociales</p>
                    </div>
                </div>
                <div>
                    <p className='my-name'>{h("home.author")}</p>
                </div>
            </div>
            <div className='part2-footer'>
                <h1>Foto discord</h1>
                <Link to='/signUp'> <button className='btn-login-footer'>{h("home.signup")}</button></Link>
            </div>
        </footer>
    )
}

export default HomeFooter

