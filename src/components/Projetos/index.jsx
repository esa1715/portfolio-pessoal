import './Projetos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faRotateLeft, faLink } from '@fortawesome/free-solid-svg-icons'


const Projetos = () => {
    const projetos = [ 
        {
            img: "/assets/profokus/preview.png",
            nome: "Projeto Fokus",
            categoria: " - Curso Alura - ",
            link: "https://projeto-fokus-alura-three.vercel.app/",
            tags: ["JavaScript"],
        },

        {
            img: "/assets/paglivros/preview.png",
            nome: "Página de Livros",
            categoria: " - Curso Alura - ",
            link: "https://metodos-array-alura.vercel.app/",
            tags: ["JavaScript"],
        },

        {
            img: "/assets/listacompras/preview.png",
            nome: "Lista de Compras",
            categoria: " - Curso Alura - ",
            link: "https://esa1715.github.io/lista-de-compras-alura/",
            tags: ["HTML", "CSS", "JavaScript", "React"],
        },

        {
            img: "/assets/pagupload/preview.png",
            nome: "Página de Upload da CodeConnect",
            categoria: " - Curso Alura - ",
            link: "https://esa1715.github.io/pag-upload-code-connect/",
            tags: ["JavaScript"],
        },

        {
            img: "/assets/portfolioalura/preview.png",
            nome: "Portfólio Joana",
            categoria: " - Curso Alura - ",
            link: "https://esa1715.github.io/html-css-alura/",
            tags: ["HTML", "CSS", "JavaScript", "React"],
        },

        {
            img: "/assets/pplinkedin/preview.png",
            nome: "Página de Perfil do LinkedIn",
            categoria: " - Desafio #7DaysOfCode - ",
            link: "https://esa1715.github.io/pag-perfil-linkedin/",
            tags: ["HTML", "CSS"],
        },

        {
            img: "/assets/pagvagas/preview.png",
            nome: "Página de Vagas da OptimusTech",
            categoria: " - Desafio #7DaysOfCode - ",
            link: "https://esa1715.github.io/pag-vagas-empresa-ficticia/",
            tags: ["HTML", "CSS"],
        },
    ]
    
    return (
        <section id='projetos'>
            <div className='projetos__tit'>
                <h2>MEUS PROJETOS</h2>
                <FontAwesomeIcon icon={faMobile} style={{color: "#fff378",}} />
                <FontAwesomeIcon icon={faRotateLeft} style={{color: "#fff378",}} />
            </div>
            <ul>
                {projetos.map((projeto, index) => (
                    <li key={index} className='projeto'>
                        <a href={projeto.link} target="_blank" rel="noreferrer">
                            <img src={projeto.img} />
                            <FontAwesomeIcon icon={faLink} size="xs" style={{color: "#fff378",}} />
                            <h3>{projeto.nome}</h3>
                            <h4>{projeto.categoria}</h4>
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
