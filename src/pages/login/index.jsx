import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useUsername } from '../../hooks/hook-name-user'
import './style.css'

function LoginPage() {

    const [t] = useTranslation("registerLogin")
    let navigate = useNavigate()

    const [user, updateUser] = useState()
    const [password, updatePassword] = useState()
    const {idUser} = useUsername()
    

    const handleUsername = e => {
        updateUser(e.target.value)
    }

    const handlePassword = e => {
        updatePassword(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const userFormData = new FormData(e.target);
        const d = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            
            body: JSON.stringify(Object.fromEntries(userFormData)), // From entries es todos los value de los inputs
            headers: {
                "Content-Type": "application/json"
            },
        })
        const r = await d.json()
        if(r.access_token){
            console.log('bien')
            sessionStorage.setItem('token', r.access_token)
            navigate(`/channels/@me/${idUser}`)
        }else{
            console.log('mal')
        }
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