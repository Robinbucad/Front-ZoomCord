import { useSearchParams } from "react-router-dom"
import { Card, Button } from 'react-bootstrap'
import { useEffect } from "react"
import { useState } from "react"
import classes from './validate.module.scss'
import disc from '../../assets/img/discord-logo.gif'
import tick from '../../assets/img/tick.gif'


function ValidateEmail() {

    const [query] = useSearchParams()

    const param = query.get('token')



   
       const fetchValidate = async() => {
        try {
            const res = await fetch(`http://localhost:3001/auth/validate?token=${param}`, {
                method: 'get',
            })
            const dat = await res.json()

        } catch (err) {
            console.log(err)
        }
       }
   

    function vuelta() {
        setTimeout(() => {
           fetchValidate()
        }, 5500)

    }
    vuelta()

    let [counter, updateCounter] = useState(4)
    //SE PASA EL COUNTER DONDE QUIERAS TENER EL CONTADOR

    let intervalId = useEffect(() => {
        setInterval(() => {
            updateCounter(counter--)
            console.log('gol')
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])


    return (
        <div className={classes.pageValidate}>
            <section className={classes.sectionInfo}>
                <p className={classes.titleVal}>Vuelva a la pagina de iniciar sesion</p>
                <img src={disc}></img>
                <p>{`Seras redireccionado en...  ${counter}`} </p>
                <img className={classes.tickImg} src={tick}></img>
            </section>
        </div>
    )
}

export default ValidateEmail


