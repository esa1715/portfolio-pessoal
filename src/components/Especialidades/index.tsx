import './Especialidades.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faRotateLeft } from '@fortawesome/free-solid-svg-icons'

interface Especialidade {
    img: string;
    nome: string;
    descricao: string;
}

const Especialidades: React.FC = () => {
    const especialidades: Especialidade[] = [
        {
            img: "/assets/react.png",
            nome: "React",
            descricao: "Desenvolver aplicações robustas em React, priorizando a reutilização de componentes e a organização do código para garantir manutenção eficiente e escalabilidade."
        },
        {
            img: "/assets/responsividade.png",
            nome: "Responsividade",
            descricao: "Criar layouts totalmente responsivos, garantindo adaptação fluida a diferentes dispositivos, desde desktops até smartwatches."
        },
        {
            img: "/assets/interatividadevisual.png",
            nome: "Design Interativo",
            descricao: "Desenvolver interações dinâmicas e envolventes, como animações e efeitos de hover, para aprimorar a experiência do usuário."
        }        
    ]

    return (
        <section id='especialidades'>
            <div className='especialidades__tit'>
                <h2>MINHAS ESPECIALIDADES</h2>
                <FontAwesomeIcon icon={faMobile}/>
                <FontAwesomeIcon icon={faRotateLeft}/>
            </div>
            <ul>
                {especialidades.map((especialidade, index) => (
                    <li key={index} className='especialidade'>
                        <img src={especialidade.img} alt={especialidade.nome}/>
                        <h3>{especialidade.nome}</h3>
                        <p>{especialidade.descricao}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Especialidades;
