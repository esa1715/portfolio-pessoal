import './Especialidades.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile,faRotateLeft } from '@fortawesome/free-solid-svg-icons'

const Especialidades = () => {
    const especialidades = [
        {
            "nome": "React",
            "descricao": "Desenvolver aplicações robustas em React, priorizando a reutilização de componentes e a organização do código para garantir manutenção eficiente e escalabilidade."
        },
        {
            "nome": "Responsividade",
            "descricao": "Criar layouts totalmente responsivos, garantindo adaptação fluida a diferentes dispositivos, desde desktops até smartwatches."
        },
        {
            "nome": "Design Interativo",
            "descricao": "Desenvolver interações dinâmicas e envolventes, como animações e efeitos de hover, para aprimorar a experiência do usuário."
        }        
    ]

    return (
        <section id='especialidades'>
            <div className='especialidades__tit'>
                <h2>MINHAS ESPECIALIDADES</h2>
                <FontAwesomeIcon icon={faMobile} style={{color: "#fff378",}} />
                <FontAwesomeIcon icon={faRotateLeft} style={{color: "#fff378",}} />
            </div>
            <ul>
                {especialidades.map((especialidades, index) => (
                    <li key={index} className='especialidades'>
                        <h3>{especialidades.nome}</h3>
                        <p>{especialidades.descricao}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Especialidades;