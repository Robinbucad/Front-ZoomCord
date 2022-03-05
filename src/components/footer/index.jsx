
import { Link } from 'react-router-dom'
import './style.css'

function HomeFooter() {
    return (
        <footer className="footer-home">
            <div className='part1-footer'>
                <div>
                    <h2 className='title-footer'>IMAGINAR EN UN LUGAR</h2>
                    <select>
                        <option>Español</option>
                        <option>English</option>
                        <option>Français</option>
                    </select>
                    <div>
                        <p>Redes sociales</p>
                    </div>
                </div>
                <div>
                    <p className='my-name'>Hecho por Robin Bucad Villanueva, estudiante de NEOLAND</p>
                </div>
            </div>
            <div className='part2-footer'>
                <h1>Foto discord</h1>
               <Link to='/signUp'> <button className='btn-login-footer'>Regístrate</button></Link>
            </div>
        </footer>
    )
}

export default HomeFooter