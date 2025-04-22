import './Destaques.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faRotateLeft, faLink } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Destaques = () => {
    const destaques = [
        {
            img: "/assets/spacetourism/preview.png",
            nome: "Space Tourism Website",
            categoria: " - Frontend Mentor Challenge - ",
            descricao: "Desenvolvido como uma Single Page Application (SPA) usando React, o site possui três abas além da home: uma com informações sobre os destinos, outra sobre os membros da equipe e uma terceira para as tecnologias. Este foi um dos projetos que mais me ajudaram a conhecer e fixar conceitos de front-end, omo gerenciamento de estados, roteamento com React Router e componentização.",
            repositorio: "https://github.com/esa1715/st-fementor",
            projeto: "https://st-fementor.vercel.app/", 
        },

        {
            img: "/assets/otreact/preview.png",
            nome: "OptimusTech - React",
            categoria: " - Projeto Próprio - ",
            descricao: "Este foi o meu primeiro projeto próprio. Nele, refatorei o projeto do desafio #7DaysOfCode - HTML e CSS da Giovanna Moeller em React e o deixei responsivo. A página simula uma plataforma de vagas de emprego para uma empresa fictícia. Inclui botões e modais interativos, incluindo um de confirmação de sucesso.",
            repositorio: "https://github.com/esa1715/optimustech-react.git",
            projeto: "https://optimustech-react.vercel.app/", 
        },

        {
            img: "/assets/pcorgano/preview.png",
            nome: "Página de Colaboradores da Organo",
            categoria: " - Curso Alura - ",
            descricao: 'Projeto criado do zero durante o "Curso de React: Desenvolvendo com JavaScript" da Alura. A aplicação utiliza React e JavaScript para possibilitar a criação dinâmica de cards para colaboradores, com personalização de acordo com o time do colaborador.',
            repositorio: "https://github.com/esa1715/pag-organo-react",
            projeto: "https://pag-organo-react.vercel.app/",
        },

        {
            img: "/assets/lpspotify/preview.png",
            nome: "Landing Page do Spotify - Alura",
            categoria: " - Imersão Front-End Alura - ",
            descricao: "Meu primeiro projeto, desenvolvido durante a 2ª Imersão Front-End da Alura. Trata-se de uma réplica da landing page do Spotify. Foi nessa imersão que comecei a me interessar por essa área e onde passei a entender melhor HTML e CSS, além de ter meu primeiro contato com JavaScript e React.",
            repositorio: "https://github.com/esa1715/landing-page-spotify",
            projeto: "https://esa1715.github.io/landing-page-spotify/",    
        }
    ]
    
    return (
        <section id='destaques'>
            <div className='destaques__tit'>
                <h2>PROJETOS EM DESTAQUE</h2>
                <FontAwesomeIcon icon={faMobile}/>
                <FontAwesomeIcon icon={faRotateLeft}/>
            </div>
                <ul>
                    {destaques.map((destaque, index) => (
                        <li key={index}>
                            <LazyLoadImage 
                                src={destaque.img} 
                                alt='preview do projeto' 
                                effect="blur"
                            />
                            <div className='destaque__info'>
                                <div className='destaque__tit'>
                                    <h3>{destaque.nome}</h3>
                                    <p>{destaque.categoria}</p>
                                </div>
                                <p className='destaque__desc'>{destaque.descricao}</p>
                                <div className='destaque__links'>
                                    <a href={destaque.repositorio} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLink} size="xs"/>
                                        <span>Repositório</span>
                                    </a> 
                                </div>
                                <div className='destaque__links'>
                                    <a href={destaque.projeto} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLink} size="xs"/>
                                        <span>Projeto</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
        </section>
    )
}

export default Destaques