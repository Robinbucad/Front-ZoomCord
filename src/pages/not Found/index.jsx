import { useState, useEffect } from "react"
import {Spinner} from 'react-bootstrap'

function PageNotFound(){
    
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
            console.log('gol')
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])
    
    return(
        <div>
            <h1>Page not found</h1>
            <Spinner animation="border" />
        </div>
    )
}


export default PageNotFound