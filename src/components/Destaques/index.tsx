import './Destaques.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Destaque {
    img: string;
    nome: string;
    categoria: string;
    descricao: string;
    badges: string[];
    repositorio: string;
    projeto: string;
}

const Destaques: React.FC = () => {
    const destaques: Destaque[] = [
        {
            img: "/assets/msf/preview.png",
            nome: 'Multi-Step Form',
            categoria: " - Frontend Mentor Challenge - ",
            descricao: "Projeto 100% responsivo desenvolvido com React e TypeScript. Este projeto consiste em um formulário multi-etapas dividido em quatro fases, simulando um fluxo de cadastro real utilizado em aplicações modernas. Cada etapa coleta diferentes tipos de informações, garantindo uma experiência fluida e organizada para o usuário. Para o gerenciamento dos inputs e validações, foi utilizado o React Hook Form, o que garante maior performance e flexibilidade na manipulação dos dados. O layout é adaptável a diferentes tamanhos de tela, proporcionando uma navegação intuitiva tanto em dispositivos móveis quanto em desktops.",
            badges: [
                'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
                'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
                'https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white',
            ],
            repositorio: "https://github.com/esa1715/multi-step-form-fem",
            projeto: "https://multi-step-form-fem-nine.vercel.app/", 
        },
        {
            img: "/assets/easybank-lp/preview.png",
            nome: 'Easybank Landing Page',
            categoria: " - Frontend Mentor Challenge - ",
            descricao: "Este projeto me ajudou a consolidar conhecimentos como responsividade e uso de media queries, posicionamento de imagens com position: absolute, customização de cores em textos e ícones SVG. Também foi nesse projeto, comecei a usar commits mais estruturados, seguindo o padrão feat, fix, etc., o que me ajudou a entender melhor a importância de um bom histórico de alterações no Git.",
            badges: [
                'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
                'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
                'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white',
                'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'
            ],
            repositorio: "https://github.com/esa1715/digital-bank-lp-fem",
            projeto: "https://digital-bank-lp-fem.vercel.app/", 
        },
        {
            img: "/assets/spacetourism/preview.png",
            nome: "Space Tourism Website",
            categoria: " - Frontend Mentor Challenge - ",
            descricao: "Desenvolvido como uma Single Page Application (SPA) usando React, o site possui três abas além da home: uma com informações sobre os destinos, outra sobre os membros da equipe e uma terceira para as tecnologias. Este foi um dos projetos que mais me ajudaram a conhecer e fixar conceitos de front-end, como gerenciamento de estados, roteamento com React Router e componentização.",
            badges: [
                'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
                'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
            ],
            repositorio: "https://github.com/esa1715/st-fementor",
            projeto: "https://st-fementor.vercel.app/", 
        },
        {
            img: "/assets/otreact/preview.png",
            nome: "OptimusTech - React",
            categoria: " - Projeto Próprio - ",
            descricao: "Este foi o meu primeiro projeto próprio. Nele, refatorei o projeto do desafio #7DaysOfCode - HTML e CSS da Giovanna Moeller em React e o deixei responsivo. A página simula uma plataforma de vagas de emprego para uma empresa fictícia. Inclui botões e modais interativos, incluindo um de confirmação de sucesso.",
            badges: [
                'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
            ],
            repositorio: "https://github.com/esa1715/optimustech-react.git",
            projeto: "https://optimustech-react.vercel.app/", 
        },
        {
            img: "/assets/pcorgano/preview.png",
            nome: "Página de Colaboradores da Organo",
            categoria: " - Curso Alura - ",
            descricao: 'Projeto criado do zero durante o "Curso de React: Desenvolvendo com JavaScript" da Alura. A aplicação utiliza React e JavaScript para possibilitar a criação dinâmica de cards para colaboradores, com personalização de acordo com o time do colaborador.',
            badges: [
                'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
            ],
            repositorio: "https://github.com/esa1715/pag-organo-react",
            projeto: "https://pag-organo-react.vercel.app/",
        },
        {
            img: "/assets/lpspotify/preview.png",
            nome: "Landing Page do Spotify - Alura",
            categoria: " - Imersão Front-End Alura - ",
            descricao: "Meu primeiro projeto, desenvolvido durante a 2ª Imersão Front-End da Alura. Trata-se de uma réplica da landing page do Spotify. Foi nessa imersão que comecei a me interessar por essa área e onde passei a entender melhor HTML e CSS, além de ter meu primeiro contato com JavaScript e React.",
            badges: [
                'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
                'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
                'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'
            ],
            repositorio: "https://github.com/esa1715/landing-page-spotify",
            projeto: "https://esa1715.github.io/landing-page-spotify/",    
        }
    ];
    
    return (
    <section id='destaques'>
        <div className='destaques__tit'>
            <h2>PROJETOS EM DESTAQUE</h2>
        </div>
        <ul>
            {destaques.map((destaque, index) => (
                <li key={index}>
                    <LazyLoadImage 
                    src={destaque.img} 
                    alt='preview do projeto' 
                    effect="blur"
                    className='preview'
                />
                
                    <div className='destaque__tit'>
                        <h3>{destaque.nome}</h3>
                        <p>{destaque.categoria}</p>
                    </div>
                    <div className='destaque__info'>
                    <div className='destaque__desc'>
                    <h3>Sobre o Projeto</h3>
                    <p>{destaque.descricao}</p>
                    </div>
                    <div className='more-info'>
                    <div className="featured-project-tools">
                    <h3>Tecnologias Utilizadas</h3>
                    <div className='tools-badges'>
                        {destaque.badges.map((badge, i) => (
                            <img key={i} src={badge} alt="badge de tecnologia" />
                        ))}
                    </div>
                    </div>
                    <div className='destaque__links'>
                    <h3>Links</h3>
                    <div className='featured-project-links'>
                        <div className='fpl-content'>
                            <a href={destaque.repositorio} target="_blank" rel="noreferrer" className="fp-github-link">
                                <FontAwesomeIcon icon={faGithub} className='fp-gh-icon'/>
                                Repositório
                            </a>
                            
                            <a href={destaque.projeto} target="_blank" rel="noreferrer" className="fp-link">    
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                Ver Projeto
                            </a>

                        



                        </div>
                        {/* <a href={destaque.projeto} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLink} size="xs" />
                            <span>Projeto</span>
                        </a>  */}
                        </div>
                    </div>
                    
                    </div>
                </div>
            </li>
        ))}
      </ul>
    </section>
  );
};

export default Destaques;
