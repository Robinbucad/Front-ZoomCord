import { useTranslation } from 'react-i18next'
import home5img from '../../assets/img/home5.svg'

function HomePart5(){

    const [h] = useTranslation("home")

    return(
        <section className="part5-home-container">
 
        
            <div className='div-info-home5'>
               
                <h1 className='title-home5'>{h("home.titleH5")}</h1>
               
                <p className="text-home5">{h("home.textH5")}</p>
            </div>

            <div>
                <img className='img-home5' src={home5img}></img>
            </div>

            <footer className='footer-home5'>
                <h1>{h("home.text2H5")}</h1>
                <button className='btn-readyHome5'>{h("home.downloadWinFooter")}</button>
            </footer>
     
    </section>
    )
}

export default HomePart5