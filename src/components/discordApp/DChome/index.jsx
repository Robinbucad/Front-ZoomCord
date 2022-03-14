import { Col, Row } from 'react-bootstrap'
import './style.scss'



import DivServs from '../DCdivServ'
import DivFriend from '../DCmdList'
import FriendList from '../DCfriendList'
import { Container } from 'react-bootstrap'

function DiscordApp() {



    return (
        <section className='chat-container' >

            <div className='div-serv'>
                <DivServs></DivServs>
            </div>


            <div  className='md-container'>
                <DivFriend></DivFriend>
            </div>
            <div className='friend-container' >
                <FriendList></FriendList>
            </div>






        </section>
    )
}

export default DiscordApp