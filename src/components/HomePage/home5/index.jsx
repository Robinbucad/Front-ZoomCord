import { useTranslation } from 'react-i18next'
import home5img from '../../../assets/img/home5.svg'
import classes from '../home1/landing.module.scss'


function HomePart5(){

    const [h] = useTranslation("home")

    return(
        <section className={classes.part5HomeContainer}>
 
        
            <div className={classes.divInfoHome5}>
               
                <h1 className={classes.titleHome5}>{h("home.titleH5")}</h1>
               
                <p className={classes.textHome5}>{h("home.textH5")}</p>
            </div>

            <div>
                <img className={classes.imgHome5} src={home5img}></img>
            </div>

            <footer className={classes.footerHome5}>
                <h1>{h("home.text2H5")}</h1>
                <button className={classes.btnReadyHome5}>{h("home.downloadWinFooter")}</button>
            </footer>
     
    </section>
    )
}

export default HomePart5