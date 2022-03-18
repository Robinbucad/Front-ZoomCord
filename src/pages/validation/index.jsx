import { useSearchParams } from "react-router-dom"
import { Card, Button } from 'react-bootstrap'
import { useEffect } from "react"
import { useState } from "react"

function ValidateEmail() {

    const [query] = useSearchParams()

    const param = query.get('token')



    useEffect(async() => {
       
            try {
                const res = await fetch(`http://localhost:3001/auth/validate?token=${param}`, {
                    method: 'get',
                })
                const dat = await res.json()

            } catch (err) {
                console.log(err)
            }
        
    }, [])

    function vuelta() {
        setTimeout(() => {
            window.location = 'http://localhost:3000'
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
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {`Seras redirigido en ${counter}`}
                    </Card.Text>
        
                </Card.Body>
            </Card>
        </div>
    )
}

export default ValidateEmail