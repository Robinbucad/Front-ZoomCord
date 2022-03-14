
import { Container, Col, Row } from 'react-bootstrap'
import classes from './friendList.module.scss'

function FriendList() {
    return (
        <section className={classes.cardListFriend}>
            <header className={classes.header}>

                <ul className={classes.headerList}>
                    <li>Amigos</li>
                    <li>Contectado</li>
                    <li>Pendiente</li>
                    <li>Bloqueado</li>
                    <li>Añadir amigo</li>
                </ul>


                <div className={classes.headerOpts} >
                    <p>OP1</p>
                    <p>OP2</p>
                    <p>OP3</p>
                </div>




            </header>
            <section className={classes.sectionFriends} >
                <div className={classes.containerFriendList} >
                    <div>
                        <input placeholder='Buscar' className={classes.inputFriends} type='text'></input>
                    </div>

                    <div>
                        <p>Conectado</p>
                    </div>

                    {/**AQUI VAN LOS USUARIOS */}
                    <div className={classes.friendList}>
                        <div className={classes.friend} >
                            <div className={classes.divUserFriend} >
                                <div className='img-user-div-list'>
                                    <p>IMG</p>
                                </div>
                                <div className={classes.friendInfo}>
                                    <p >Alno</p>
                                    <p>No molestar</p>
                                </div>

                            </div>

                            <div className={classes.friendOpt}>
                                <p>cht</p>
                                <p>OPT</p>
                            </div>

                        </div>

                        <div className={classes.friend} >
                            <div className={classes.divUserFriend} >
                                <div className='img-user-div-list'>
                                    <p>IMG</p>
                                </div>
                                <div className={classes.friendInfo}>
                                    <p >Alno</p>
                                    <p>No molestar</p>
                                </div>

                            </div>

                            <div className={classes.friendOpt}>
                                <p>cht</p>
                                <p>OPT</p>
                            </div>

                        </div>
                    </div>




                </div>

                <div className='active-friends'>
                    <div className='header-active-friends'>
                        <p>Activo ahora</p>
                    </div>

                </div>
            </section>


        </section>
    )
}

export default FriendList