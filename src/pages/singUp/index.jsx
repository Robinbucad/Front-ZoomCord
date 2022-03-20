import './style.css'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function SignUp() {

    

    const [t] = useTranslation("registerLogin")
    console.log(t("registerLogin.username"))

    const [value, updateValue] = useState('false')
    const [btn, updateBtn] = useState(true)
    let navigate = useNavigate()

    const onChange = e => {
        if(e.target.value === 'false'){
            updateValue('true')
            updateBtn(false)
        }else{
            updateValue('false')
            updateBtn(true)
        }
    }

    

    const onSubmit = e => {
        e.preventDefault()
        const userFormData = new FormData(e.target);
        fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                body:JSON.stringify(Object.fromEntries(userFormData)), // From entries es todos los value de los inputs
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(r => {
                if(r.status === 409){
                    console.log(r)
                    alert('Usuario existente')
                }else{
                    
                    navigate(`/`)
                }
            })
            
        
    }   



    return (
        <section className="signUp-container">


            <div className="card-container">
                <section className='signUp-card'>
                    <header className='header-login-card'>
                        <h2 className='title-login'>{t("registerLogin.create")}</h2>
                    </header>
                    <form className='form-card' onSubmit={onSubmit}>
                        <div className='input-div'>
                            <label htmlFor="email">EMAIL</label>
                            <input type='email' className='input-signup' name="email"></input>
                        </div>

                        <div className='input-div'>
                            <label htmlFor="email">{t("registerLogin.username")}</label>
                            <input type='name' className='input-signup' name="username"></input>
                        </div>

                        <div className='input-div'>
                            <label htmlFor="email">{t("registerLogin.password")}</label>
                            <input type='password' className='input-signup' name="password"></input>
                        </div>

                        <div >
                            <div className='div-selects'>
                                <label className='font-card-sign' htmlFor='date'>{t("registerLogin.date")}</label>
                               <input className='input-signup' type='date' name='date'></input>
                            </div>
                        </div>

                        <div className='div-check-privacy'>
                            <Form.Check onChange={onChange} value={value} Enabled style={{ fontSize: '30px' }} />
                            <div className='div-privacy-login'>
                                <p className='privacy-login'>{t("registerLogin.pol")}</p>
                            </div>

                        </div>

                        <div>
                            <Button type='submit' style={{ width: '100%' }} variant="primary" disabled={btn} size="lg">{t("registerLogin.btn")}</Button>
                        </div>

                        <footer>
                           <Link to='/login'> <p className='font-acc-sign'>{t("registerLogin.haveAcc")}</p></Link>
                        </footer>



                    </form>
                </section>
            </div>
        </section>
    )
}

export default SignUp

