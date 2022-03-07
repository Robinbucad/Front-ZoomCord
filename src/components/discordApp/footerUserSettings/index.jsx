

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
            <p>M</p>
            <p>E</p>
            <button onClick={props.handleShow}>Set</button>
        </div>
    </footer>

    )
}

export default UserSettingsFooter