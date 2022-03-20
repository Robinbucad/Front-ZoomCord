import { useTranslation } from 'react-i18next'
import imgHome3 from '../../../assets/img/part3Home.svg'
import classes from '../home1/landing.module.scss'


function HomePart3(){

    const [h] = useTranslation("home")

    return(
        <section className={classes.part3HomeContainer}>
            <div className={classes.infoHome2Container}>
                <div className={classes.divInfoHome2}>
                    <h1 className={classes.titleHome2}>{h("home.titleH3")}</h1>
                    <p>{h("home.textH3")}</p>
                </div>
                <img className={classes.imgHome2} src={imgHome3}></img>

            </div>
        </section>
    )
}

export default HomePart3