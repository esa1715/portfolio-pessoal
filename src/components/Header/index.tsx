import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <div className='header__content'>
                <img 
                    src="https://avatars.githubusercontent.com/u/189414987?v=4" 
                    alt="Foto de perfil de Erik" 
                    className='header__avatar'
                    loading='lazy'
                />
                <h1 className='header__tit'>ERIK DA SILVA ALVES</h1>
                <h2 className='header__sub'>DESENVOLVEDOR FRONT-END JÚNIOR</h2>
                <div className='header__redes'>
                    <h2>REDES SOCIAIS</h2>
                    <ul>
                        <li>
                            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=silvalveserik1@gmail.com&su=Portfólio%20pessoal%20' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faAt} size="2xl" className="icon" />
                                <span className="sr-only">Email pessoal de Erik</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/esa1715' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2xl" className="icon" />
                                <span className="sr-only">Página de perfil de Erik no GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/erikalves12' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2xl" className="icon" />
                                <span className="sr-only">Página de perfil de Erik no LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://api.whatsapp.com/send/?phone=%2B5511933329021&text&type=phone_number&app_absent=0' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} size="2xl" className="icon" />
                                <span className="sr-only">WhatsApp pessoal de Erik</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
