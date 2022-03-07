import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './style.css'

function LoginPage() {

    const [t] = useTranslation("registerLogin")

    const [user,updateUser] = useState()
    const [password, updatePassword] = useState()

    const handleUsername  = e => {
        updateUser(e.target.value)
    }

    const handlePassword = e => {
        updatePassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        localStorage.setItem('username', user)
        localStorage.setItem('password', password)
    }

    return (
        <section className="signUp-container">


            <div className="card-container">
                <section className='login-card'>

                    <form onSubmit={handleSubmit} className='form-card'>
                        <div className='input-div'>
                            <label htmlFor="email">EMAIL</label>
                            <input onChange={handleUsername} type='email' className='input-signup' name="email"></input>
                        </div>


                        <div className='input-div'>
                            <label htmlFor="email">{t("registerLogin.password")}</label>
                            <input onChange={handlePassword} type='password' className='input-signup' name="password"></input>
                            <p>{t("registerLogin.forgot")}</p>
                        </div>



                        <div>
                            <Button type='submit' style={{ width: '100%' }} variant="primary" size="lg">{t("registerLogin.btn")}</Button>
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