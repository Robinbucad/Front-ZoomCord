import { useState, useEffect } from "react"
import { Spinner } from 'react-bootstrap'
import classes from './notFound.module.scss'
import notFound from '../../assets/img/notFound.png'

function PageNotFound() {

    function vuelta() {
        setTimeout(() => {
            window.location = 'http://localhost:3000'
        }, 1000)

    }
    vuelta()

    let [counter, updateCounter] = useState(4)


    let intervalId = useEffect(() => {
        setInterval(() => {
            updateCounter(counter--)
        }, 1500)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <section className={classes.pageContainer}>
            <div className={classes.sectionNotFound}> 
                <h1 className={classes.notFoundNum}>404</h1>
                <h1>Oops page not found...</h1>
                <img className={classes.imgNotFound} src={notFound}></img>
                <Spinner animation="border" />
            </div>

        </section>
    )
}


export default PageNotFound