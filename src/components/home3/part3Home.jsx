import imgHome3 from '../../assets/img/part3Home.svg'

function HomePart3(){
    return(
        <section className="part3-home-container">
            <div className='info-home2-container'>
                <div className='div-info-home2'>
                    <h1 className='title-home2'>Donde es fácil pasar el rato</h1>
                    <p>Los servidores de Discord se organizan en canales ordenados por temas donde puedes colaborar,
                         compartir o simplemente hablar de tu día sin monopolizar un chat de grupo.</p>
                </div>
                <img className='img-home2' src={imgHome3}></img>

            </div>
        </section>
    )
}

export default HomePart3