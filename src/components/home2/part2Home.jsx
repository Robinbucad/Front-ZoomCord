import imgHome2 from '../../assets/img/part2home.svg'

function Part2Home() {
    return (
        <section className="part2-home-container">
            <div className='info-home2-container'>
                <img className='img-home2' src={imgHome2}></img>
                <div className='div-info-home2'>
                    <h1 className='title-home2'>Crea un lugar solo para miembros en el que encajes</h1>
                    <p>Los servidores de Discord se organizan en canales ordenados por temas donde puedes colaborar,
                        compartir o simplemente hablar de tu día sin monopolizar un chat de grupo.</p>
                </div>

            </div>
        </section>
    )
}

export default Part2Home