import { Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './style.css'

function LoginPage() {

    const [t] = useTranslation("registerLogin")

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
                            <label htmlFor="email">{t("registerLogin.password")}</label>
                            <input type='password' className='input-signup' name="password"></input>
                            <p>{t("registerLogin.forgot")}</p>
                        </div>



                        <div>
                            <Link to='/discord'><Button style={{ width: '100%' }} variant="primary" size="lg">{t("registerLogin.btn")}</Button></Link>
                        </div>

                        <footer>
                            <Link to='/signUp'><p className='font-acc-sign'>{t("registerLogin.acc")}</p></Link>
                        </footer>



                    </form>
                </section>
            </div>
        </section>
    )
}

export default LoginPage