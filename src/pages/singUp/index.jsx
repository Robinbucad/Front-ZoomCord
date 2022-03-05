import './style.css'
import { Button, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function SignUp() {

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
            fetch('http://localhost:4000/users', {
                method: 'POST',
                body: JSON.stringify({
                    email: e.target.email.value,
                    username: e.target.username.value,
                    password: e.target.password.value,
                    date: e.target.date.value
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(r => r.json())
            .then(d => navigate('/'))   
    }

    


    return (
        <section className="signUp-container">


            <div className="card-container">
                <section className='signUp-card'>
                    <header className='header-login-card'>
                        <h2 className='title-login'>Create an account</h2>
                    </header>
                    <form className='form-card' onSubmit={onSubmit}>
                        <div className='input-div'>
                            <label htmlFor="email">EMAIL</label>
                            <input type='email' className='input-signup' name="email"></input>
                        </div>

                        <div className='input-div'>
                            <label htmlFor="email">USERNAME</label>
                            <input type='name' className='input-signup' name="username"></input>
                        </div>

                        <div className='input-div'>
                            <label htmlFor="email">PASSWORD</label>
                            <input type='password' className='input-signup' name="password"></input>
                        </div>

                        <div >
                            <div className='div-selects'>
                                <label className='font-card-sign' htmlFor='date'>FECHA DE NACIMIENTO</label>
                               <input className='input-signup' type='date' name='date'></input>
                            </div>
                        </div>

                        <div className='div-check-privacy'>
                            <Form.Check onChange={onChange} value={value} Enabled style={{ fontSize: '30px' }} />
                            <div className='div-privacy-login'>
                                <p className='privacy-login'>He leído y acepto las Condiciones de servicio y la Politica de Privacidad de Discord</p>
                            </div>

                        </div>

                        <div>
                            <Button type='submit' style={{ width: '100%' }} variant="primary" disabled={btn} size="lg">Continuar</Button>
                        </div>

                        <footer>
                           <Link to='/login'> <p className='font-acc-sign'>¿Ya tienes una cuenta?</p></Link>
                        </footer>



                    </form>
                </section>
            </div>
        </section>
    )
}

export default SignUp