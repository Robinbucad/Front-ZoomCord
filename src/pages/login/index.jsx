import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'

function LoginPage() {
    return (
        <section className="signUp-container">


            <div className="card-container">
                <section className='login-card'>

                    <form className='form-card'>
                        <div className='input-div'>
                            <label htmlFor="email">EMAIL</label>
                            <input type='email' className='input-signup' name="email"></input>
                        </div>


                        <div className='input-div'>
                            <label htmlFor="email">PASSWORD</label>
                            <input type='password' className='input-signup' name="password"></input>
                            <p>¿Olvidaste la contraseña?</p>
                        </div>



                        <div>
                            <Link to='/discord'><Button style={{ width: '100%' }} variant="primary" size="lg">Continuar</Button></Link>
                        </div>

                        <footer>
                            <Link to='/signUp'><p className='font-acc-sign'>¿Aun no tienes una cuenta?</p></Link>
                        </footer>



                    </form>
                </section>
            </div>
        </section>
    )
}

export default LoginPage