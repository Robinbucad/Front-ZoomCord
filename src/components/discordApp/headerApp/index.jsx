import classes from '../messenger/friendMd.module.scss'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState } from 'react'

function HeaderApp() {
    const [btn,setBtn] = useState(false)

    const handleClick = e => {
        document.body.classList.toggle(classes.dark)
        document.body.classList.toggle(classes.light)
        if (btn === false) {
            setBtn(classes.active)
        } else {
            setBtn(false)
        }
    }


    return (
        <header className={classes.headerChat}>
            <p>NAME USER</p>
            <div className={classes.settingsChat}>
                <p>Call</p>
                <p>Videocall</p>
                <button onClick={handleClick} className={classes.switch} id={btn} >
                    <span><FaMoon></FaMoon></span>
                    <span><FaSun></FaSun></span>

                </button>
            </div>
        </header>
    )
}

export default HeaderApp