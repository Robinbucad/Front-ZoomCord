import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/user/user.contex'
import classes from '../singUp/signUp.module.scss'


function LoginPage() {

    const [t] = useTranslation("registerLogin")
    let navigate = useNavigate()

    const [userName, updateUserName] = useState()
    const [password, updatePassword] = useState()
    const [user,setUser] = useContext(UserContext)




    const handleUsername = e => {
       
        updateUserName(e.target.value)
    }

    const handlePassword = e => {
        updatePassword(e.target.value)
    }

 

    const handleSubmit = async e => {
        e.preventDefault()
        const userFormData = new FormData(e.target);
        try{
            const d = await fetch('https://salty-escarpment-22835.herokuapp.com/auth/login', {
                method: 'POST',
                
                body: JSON.stringify(Object.fromEntries(userFormData)), 
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const r = await d.json()
            if(r.access_token){
    
                localStorage.setItem('token',r.access_token)
                sessionStorage.setItem('token', r.access_token)
                fetch(`http://localhost:3001/users`,{
                    method:'get',
                    headers:{
                        Authorization: `Bearer ${r.access_token}`
                    }
                })
                .then(r => r.json())
                .then(d => {
                    setUser(d)
        
                    localStorage.setItem('user',JSON.stringify(d))
                     navigate(`/discord/@me/${d._id}`)
                })
      
            }else{
                console.log('mal')
            }
            
        }catch(err){
            alert('Datos incorrectos')
        }
       
       

    }

    return (
        <section className={classes.signUpContainer}>


            <div className={classes.cardContainer}>
                <section className={classes.loginCard}>

                    <form onSubmit={handleSubmit} className={classes.formCard}>
                        <div className={classes.inputDiv}>
                            <label htmlFor="email">EMAIL</label>
                            <input onChange={handleUsername} type='email' className={classes.inputSignup} name="email"></input>
                        </div>


                        <div className={classes.inputDiv}>
                            <label htmlFor="email">{t("registerLogin.password")}</label>
                            <input onChange={handlePassword} type='password' className={classes.inputSignup} name="password"></input>
                            <p>{t("registerLogin.forgot")}</p>
                        </div>



                        <div>
                            <Button type='submit' style={{ width: '100%' }} variant="primary" size="lg">{t("registerLogin.btn")}</Button>
                        </div>

                        <footer>
                            <Link to='/signUp'><p className={classes.fontAccSign}>{t("registerLogin.acc")}</p></Link>
                        </footer>



                    </form>
                </section>
            </div>
        </section>
    )
}

export default LoginPage