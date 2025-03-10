import './Projetos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Projetos = () => {
    const projetos = [
        {
            img: "/assets/otreact/preview.png",
            nome: "OptimusTech - React",
            categoria: " - Projeto Próprio - ",
            link: "https://optimustech-react.vercel.app/",
            tags: ["HTML", "CSS", "JavaScript", "React"],
        },

        {
            img: "/assets/pcorgano/preview.png",
            nome: "Página de Colaboradores da Organo",
            categoria: " - Curso Alura - ",
            link: "https://pag-organo-react.vercel.app/",
            tags: ["HTML", "CSS", "JavaScript", "React"],
        },
        
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
            link: "https://pag-organo-react.vercel.app/",
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

        {
            img: "/assets/lpspotify/preview.png",
            nome: "Landing Page do Spotify - Alura",
            categoria: " - Imersão Front-End Alura - ",
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
                        <h4>{projeto.categoria}</h4>
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
