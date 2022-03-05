import './style.css'
import { Button, Form } from 'react-bootstrap'


function SignUp() {
    return (
        <section className="signUp-container">


            <div className="card-container">
                <section className='signUp-card'>
                    <header className='header-login-card'>
                        <h2 className='title-login'>Create an account</h2>
                    </header>
                    <form className='form-card'>
                        <div className='input-div'>
                            <label htmlFor="email">EMAIL</label>
                            <input type='email' className='input-signup' name="email"></input>
                        </div>

                        <div className='input-div'>
                            <label htmlFor="email">USERNAME</label>
                            <input type='name' className='input-signup' name="name"></input>
                        </div>

                        <div className='input-div'>
                            <label htmlFor="email">PASSWORD</label>
                            <input type='password' className='input-signup' name="password"></input>
                        </div>

                        <div >
                            <div>
                                <p className='font-card-sign'>FECHA DE NACIMIENTO</p>
                            </div>
                            <div className='div-selects'>
                                <select className='select-date-signup' name="day" >
                                    <option value='day'>Seleccionar</option>
                                </select>

                                <select className='select-date-signup' name="month" id="">
                                    <option value='month'>Seleccionar</option>
                                </select>

                                <select className='select-date-signup'>
                                    <option value='year'>Seleccionar</option>
                                </select>
                            </div>
                            </div>

                            <div className='div-check-privacy'>
                                <Form.Check Enabled  style={{fontSize:'30px'}}/>
                                <div className='div-privacy-login'>
                                <p className='privacy-login'>He leído y acepto las Condiciones de servicio y la Politica de Privacidad de Discord</p>
                                </div>
                               
                            </div>

                            <div>
                                <Button style={{width:'100%'}} variant="primary" size="lg">Continuar</Button>
                            </div>

                            <footer>
                                <p className='font-acc-sign'>¿Ya tienes una cuenta?</p>
                            </footer>

                        

                    </form>
                </section>
            </div>
        </section>
    )
}

export default SignUp