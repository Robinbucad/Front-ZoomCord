import imgHome2 from '../../../assets/img/part2home.svg'
import { useTranslation } from 'react-i18next'

function Part2Home() {

    const [h] = useTranslation("home")

    return (
        <section className="part2-home-container">
            <div className='info-home2-container'>
                <img className='img-home2' src={imgHome2}></img>
                <div className='div-info-home2'>
                    <h1 className='title-home2'>{h("home.titleH2")}</h1>
                    <p>{h("home.textH2")}</p>
                </div>

            </div>
        </section>
    )
}

export default Part2Home