import classes from '../messenger/friendMd.module.scss'

function HeaderApp() {


    return (
        <header className={classes.headerChat}>
            <p>NAME USER</p>
            <div className={classes.settingsChat}>
                <p>Call</p>
                <p>Videocall</p>
            </div>
        </header>
    )
}

export default HeaderApp