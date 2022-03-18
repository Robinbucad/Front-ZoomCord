import { useTranslation } from 'react-i18next'
import imgHome3 from '../../../assets/img/part3Home.svg'

function HomePart3(){

    const [h] = useTranslation("home")

    return(
        <section className="part3-home-container">
            <div className='info-home2-container'>
                <div className='div-info-home2'>
                    <h1 className='title-home2'>{h("home.titleH3")}</h1>
                    <p>{h("home.textH3")}</p>
                </div>
                <img className='img-home2' src={imgHome3}></img>

            </div>
        </section>
    )
}

export default HomePart3