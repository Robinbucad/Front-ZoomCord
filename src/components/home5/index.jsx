import home5img from '../../assets/img/home5.svg'

function HomePart5(){
    return(
        <section className="part5-home-container">
 
        
            <div className='div-info-home5'>
               
                <h1 className='title-home5'>UNA TECNOLOGÍA FIABLE PARA MANTENERSE EN CONTACTO</h1>
               
                <p className="text-home5">Gracias a la voz y el vídeo de baja latencia, parece que estáis en la misma habitación. Saluda a la cámara, accede a las transmisiones de los juegos de tus amigos o reuníos y disfrutad de una sesión de dibujo compartiendo la pantalla.</p>
            </div>

            <div>
                <img className='img-home5' src={home5img}></img>
            </div>

            <footer className='footer-home5'>
                <h1>¿Todo listo para comenzar tu viaje?</h1>
                <button className='btn-readyHome5'>Descargar para Windows</button>
            </footer>
     
    </section>
    )
}

export default HomePart5