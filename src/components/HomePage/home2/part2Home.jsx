import imgHome2 from '../../../assets/img/part2home.svg'
import { useTranslation } from 'react-i18next'
import classes from '../home1/landing.module.scss'


function Part2Home() {

    const [h] = useTranslation("home")

    return (
        <section className={classes.part2HomeContainer}>
            <div className={classes.infoHome2Container}>
                <img className={classes.imgHome2} src={imgHome2}></img>
                <div className={classes.divInfoHome2}>
                    <h1 className={classes.titleHome2}>{h("home.titleH2")}</h1>
                    <p>{h("home.textH2")}</p>
                </div>

            </div>
        </section>
    )
}

export default Part2Home