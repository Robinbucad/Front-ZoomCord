import logo from '../../../assets/img/discord-logo-serv.jpg'
import { Link } from 'react-router-dom'
import CreateServModal from '../../modal/createServ'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function DivServs() {

    const [modalServShow, setServModalShow] = useState(false)

    const updateServName = e => {
        console.log(e)
    }

    return (
        <Container>
            <Row>

                <Col lg={6}>
                    <p>
                        aqui duv
                    </p>

                    <CreateServModal show={modalServShow} onHide={() => setServModalShow(false)} ></CreateServModal>
                   

                    <button onClick={() => setServModalShow(true)} className='icon-serv-add'>
                        <h1>+</h1>
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default DivServs