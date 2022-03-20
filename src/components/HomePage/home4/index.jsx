import classes from '../home1/landing.module.scss'
import { useTranslation } from 'react-i18next'
import imgHome4 from '../../../assets/img/home4.svg'

function HomePart4() {

    const [h] = useTranslation("home")

    return (
        <section className={classes.part4HomeContainer}>
            <div className={classes.infoHome2Container}>
                <img className={classes.imgHome2} src={imgHome4}></img>
                <div className={classes.divInfoHome2}>
                    <h1 className={classes.imgHome2}>{h("home.titleH4")}</h1>
                    <p>{h("home.textH4")}</p>
                </div>
            </div>
        </section>
    )
}

export default HomePart4