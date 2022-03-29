
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classes from './signUp.module.scss'

function SignUp() {

    

    const [t] = useTranslation("registerLogin")
 

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
               
                    alert('Usuario existente')
                }else{
                    
                    navigate(`/`)
                }
            })
            
        
    }   



    return (
        <section className={classes.signUpContainer}>


            <div className={classes.cardContainer}>
                <section className={classes.signUpCard}>
                    <header className={classes.headerLoginCard}>
                        <h2 className={classes.titleLogin}>{t("registerLogin.create")}</h2>
                    </header>
                    <form className={classes.formCard} onSubmit={onSubmit}>
                        <div className={classes.inputDiv}>
                            <label htmlFor="email">EMAIL</label>
                            <input type='email' className={classes.inputSignup} name="email"></input>
                        </div>

                        <div className={classes.inputDiv}>
                            <label htmlFor="email">{t("registerLogin.username")}</label>
                            <input type='name' className={classes.inputSignup} name="username"></input>
                        </div>

                        <div className={classes.inputDiv}>
                            <label htmlFor="email">{t("registerLogin.password")}</label>
                            <input type='password' className={classes.inputSignup} name="password"></input>
                        </div>

                        <div >
                            <div className={classes.divSelects}>
                                <label className={classes.fontCardSign} htmlFor='date'>{t("registerLogin.date")}</label>
                               <input className={classes.inputSignup} type='date' name='date'></input>
                            </div>
                        </div>

                        <div className={classes.divCheckPrivacy}>
                            <Form.Check onChange={onChange} value={value} Enabled style={{ fontSize: '30px' }} />
                            <div className={classes.divPrivacyLogin}>
                                <p className={classes.privacyLogin}>I have read and accept Discord's <Link to='/terms' target="_blank"> Terms of Service</Link>  and   <Link to='/privacy' target="_blank"> Privacy Policy.</Link></p>
                            </div>

                        </div>

                        <div>
                            <Button type='submit' style={{ width: '100%' }} variant="primary" disabled={btn} size="lg">{t("registerLogin.btn")}</Button>
                        </div>

                        <footer>
                           <Link to='/login'> <p className={classes.fontAccSign}>{t("registerLogin.haveAcc")}</p></Link>
                        </footer>



                    </form>
                </section>
            </div>
        </section>
    )
}

export default SignUp

