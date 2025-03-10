import './Projetos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Projetos = () => {
    const projetos = [
        {
            img: "/assets/pcorgano/preview.png",
            nome: "Página de Colaboradores - Organo",
            link: "https://pag-organo-react.vercel.app/",
            tags: ["HTML", "CSS", "JavaScript", "React"],
        },

        {
            img: "/assets/listacompras/preview.png",
            nome: "Lista de Compras",
            link: "https://esa1715.github.io/lista-de-compras-alura/",
            tags: ["HTML", "CSS", "JavaScript", "React"],
        },

        {
            img: "/assets/portfolioalura/preview.png",
            nome: "Portfólio - Alura",
            link: "https://esa1715.github.io/html-css-alura/",
            tags: ["HTML", "CSS", "JavaScript", "React"],
        },

        {
            img: "/assets/pplinkedin/preview.png",
            nome: "Página de Perfil - LinkedIn",
            link: "https://esa1715.github.io/pag-perfil-linkedin/",
            tags: ["HTML", "CSS"],
        },

        {
            img: "/assets/pagvagas/preview.png",
            nome: "Página de Vagas - OptimusTech",
            link: "https://esa1715.github.io/pag-vagas-empresa-ficticia/",
            tags: ["HTML", "CSS"],
        },

        {
            img: "/assets/lpspotify/preview.png",
            nome: "Landing Page do Spotify",
            link: "https://esa1715.github.io/landing-page-spotify/",
            tags: ["HTML ", "CSS ", ,"JavaScript ", "React "],
        }
    ]
    
    return (
        <section id='projetos'>
            <h2>MEUS PROJETOS</h2>
            <ul>
                {projetos.map((projeto, index) => (
                    <li key={index} className='projeto'>
                        <img src={projeto.img} />
                        <a href={projeto.link} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLink} size="xs" style={{color: "#fff378",}} />
                            <h3>{projeto.nome}</h3>
                        </a>
                        {/* <div className="tags">
                            {projeto.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div> */}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projetos;
