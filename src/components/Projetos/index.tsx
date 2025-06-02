import './Projetos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faRotateLeft, faLink } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Projeto { 
    img: string;
    nome: string;
    categoria: string;
    link: string;
}


const Projetos: React.FC = () => {
    const projetos: Projeto[] = [
        {
            img: "/assets/newshp/preview.png",
            nome: "News Homepage",
            categoria: " - Frontend Mentor Challenge - ",
            link: "https://news-homepage-fem-rose.vercel.app/",
        }, 
        {
            img: "/assets/alarado/preview.png",
            nome: "Homepage Alarado",
            categoria: " - devChallenges - ",
            link: "https://angular-alarado.vercel.app/",
        },
        {
            img: "/assets/caraoucoroa/preview.png",
            nome: "Cara ou Coroa",
            categoria: " - devChallenges - ",
            link: "https://caraoucoroa-six.vercel.app/",
        },
        {
            img: "/assets/ida/preview.png",
            nome: "Projetos Imersão DEV",
            categoria: " - Imersão DEV da Alura - ",
            link: "https://imersao-dev-alura-coral.vercel.app/",
        },
        {
            img: "/assets/blogpreviewcard/preview.png",
            nome: "Blog Preview Card",
            categoria: " - Frontend Mentor Challenge - ",
            link: "https://www.frontendmentor.io/solutions/blog-card-preview-react-UhBQC8iliW",
        },
        {
            img: "/assets/productcard/preview.png",
            nome: "Product Card Preview",
            categoria: " - Frontend Mentor Challenge - ",
            link: "https://www.frontendmentor.io/solutions/react-product-preview-card-dYByqgo74V",
        },
        {
            img: "/assets/profokus/preview.png",
            nome: "Projeto Fokus",
            categoria: " - Curso Alura - ",
            link: "https://projeto-fokus-alura-three.vercel.app/",
        },

        {
            img: "/assets/paglivros/preview.png",
            nome: "Página de Livros",
            categoria: " - Curso Alura - ",
            link: "https://metodos-array-alura.vercel.app/",
        },

        {
            img: "/assets/listacompras/preview.png",
            nome: "Lista de Compras",
            categoria: " - Curso Alura - ",
            link: "https://esa1715.github.io/lista-de-compras-alura/",
        },

        {
            img: "/assets/pagupload/preview.png",
            nome: "Página de Upload da CodeConnect",
            categoria: " - Curso Alura - ",
            link: "https://esa1715.github.io/pag-upload-code-connect/",
        },

        {
            img: "/assets/portfolioalura/preview.png",
            nome: "Portfólio Joana",
            categoria: " - Curso Alura - ",
            link: "https://esa1715.github.io/html-css-alura/",
        },

        {
            img: "/assets/pplinkedin/preview.png",
            nome: "Página de Perfil do LinkedIn",
            categoria: " - Desafio #7DaysOfCode - ",
            link: "https://esa1715.github.io/pag-perfil-linkedin/",
        },

        {
            img: "/assets/pagvagas/preview.png",
            nome: "Página de Vagas da OptimusTech",
            categoria: " - Desafio #7DaysOfCode - ",
            link: "https://esa1715.github.io/pag-vagas-empresa-ficticia/",
        },
    ]
    
    return (
        <section id='projetos'>
            <div className='projetos__tit'>
                <h2>MEUS PROJETOS</h2>
                <FontAwesomeIcon icon={faMobile}/>
                <FontAwesomeIcon icon={faRotateLeft}/>
            </div>
            <ul>
                {projetos.map((projeto, index) => (
                    <li key={index} className='projeto'>
                        <a href={projeto.link} target="_blank" rel="noreferrer">
                            <LazyLoadImage 
                                src={projeto.img} 
                                alt="preview do projeto"
                                effect="blur"
                            />
                            <FontAwesomeIcon icon={faLink} size="xs"/>
                            <h3>{projeto.nome}</h3>
                            <h4>{projeto.categoria}</h4>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projetos;