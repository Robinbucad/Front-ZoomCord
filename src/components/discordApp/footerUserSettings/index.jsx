
import { GearFill, Headset, Mic } from 'react-bootstrap-icons/'


function UserSettingsFooter(props){
    return(
        <footer className='footer-user'>
        <div className='user-footer-img'>
            <p>HOLA</p>
        </div>
        <div className='user-info-footer'>
            <p className='user-name'>BeZzK</p>
            <p>#3616</p>
        </div>
        <div className='user-info-opts'>
            <button className='btn-sett-footer' ><Mic></Mic></button>   
            <button className='btn-sett-footer' ><Headset></Headset></button>
            <button className='btn-sett-footer' onClick={props.handleShow}><GearFill ></GearFill></button>
            
        </div>
    </footer>

    )
}

export default UserSettingsFooter