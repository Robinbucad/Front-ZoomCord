
import './style.css'



import DivServs from '../DCdivServ'
import DivFriend from '../DCmdList'
import FriendList from '../DCfriendList'

function DiscordApp() {

   

    return (
        <section className="div-app-discord">
            
            <DivServs></DivServs>
            <DivFriend></DivFriend>
            <FriendList></FriendList>

        </section>
    )
}

export default DiscordApp