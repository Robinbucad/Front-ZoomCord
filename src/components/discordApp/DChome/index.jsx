import { Col, Row } from 'react-bootstrap'




import DivServs from '../DCdivServ'
import DivFriend from '../DCmdList'
import FriendList from '../DCfriendList'
import { Container } from 'react-bootstrap'

function DiscordApp() {



    return (
        <Container fluid style={{minHeight:'100vh'}}>
            <Row>
                <Col lg={1} style={{minHeight:'100vh'}}>
                    <DivServs></DivServs>
                </Col>
                <Col lg={2} style={{minHeight:'100vh'}}>
                    <DivFriend></DivFriend>
                </Col>
                <Col lg={9} style={{minHeight:'100vh'}}>
                    <FriendList></FriendList>
                </Col>



            </Row>


        </Container>
    )
}

export default DiscordApp