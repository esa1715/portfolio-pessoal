import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <section className='header'>
            <div className='header__content'>
                <img src="https://avatars.githubusercontent.com/u/189414987?v=4" alt="Foto de perfil" className='header__avatar'/>
                <h1 className='header__tit'>Erik da Silva Alves</h1>
                <h2 className='header__sub'>Desenvolvedor Front-end Júnior</h2>
                <div className='header__cont'>
                    <h2>Redes Sociais</h2>
                    <div className='header__cont__icons'>
                        <ul>
                            <li>
                                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=silvalveserik1@gmail.com&su=Portfólio%20pessoal%20' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faAt} size="2xl" style={{color: "#ffed7e",}} />
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/esa1715' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} size='2xl' style={{color: "#ffed7e",}} />
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/esa1715' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2xl" style={{color: "#ffed7e",}} />
                                </a>    
                            </li>
                            <li>
                                <a href='https://api.whatsapp.com/send/?phone=%2B5511933329021&text&type=phone_number&app_absent=0' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#ffed7e",}} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;