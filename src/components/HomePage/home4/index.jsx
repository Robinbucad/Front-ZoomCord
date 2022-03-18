
import { useTranslation } from 'react-i18next'
import imgHome4 from '../../../assets/img/home4.svg'

function HomePart4() {

    const [h] = useTranslation("home")

    return (
        <section className="part4-home-container">
            <div className='info-home2-container'>
                <img className='img-home2' src={imgHome4}></img>
                <div className='div-info-home2'>
                    <h1 className='title-home2'>{h("home.titleH4")}</h1>
                    <p>{h("home.textH4")}</p>
                </div>
            </div>
        </section>
    )
}

export default HomePart4