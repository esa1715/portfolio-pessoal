import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import Projetos from '../Projetos';
import Especialidades from '../Especialidades';

const Navbar = () => {
    const [selecaoAtiva, setSelecaoAtiva] = useState(null);

    return (
        <section className='navbar'>
            <div className='navbar__content'>
                <ul>
                    <li>
                        <button onClick={() => setSelecaoAtiva('projetos')}>Projetos</button>
                    </li>
                    <li>
                        <button onClick={() => setSelecaoAtiva('especialidades')}>Especialidades</button>
                    </li>
                    <li>
                        <button onClick={() => setSelecaoAtiva('contratar')}>Contratar</button>
                    </li>
                </ul>
            </div>

            <div className='conteudo'>
                {selecaoAtiva === 'projetos' && <Projetos />}
                {selecaoAtiva === 'especialidades' && <Especialidades />}
                {selecaoAtiva === 'contratar' && <section id="contratar"><FontAwesomeIcon icon={faGear} spin style={{color: "#333333",}} /> Em desenvolvimento... <FontAwesomeIcon icon={faGear} spin style={{color: "#333333",}} /></section>}
            </div>
        </section>
    );
};

export default Navbar;
