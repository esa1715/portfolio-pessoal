import { useState } from 'react';
import './Navbar.css';
import Projetos from '../Projetos';

const Navbar = () => {
    const [selecaoAtiva, setSelecaoAtiva] = useState(null);

    return (
        <section className='navbar'>
            <div className='navbar__content'>
                <ul>
                    <li>
                        <button onClick={() => setSelecaoAtiva('projetos')}>Meus Projetos</button>
                    </li>
                    <li>
                        <button onClick={() => setSelecaoAtiva('destaque')}>Habilidades em Destaque</button>
                    </li>
                    <li>
                        <button onClick={() => setSelecaoAtiva('contratar')}>Contratar para Projetos</button>
                    </li>
                </ul>
            </div>

            <div className='conteudo'>
                {selecaoAtiva === 'projetos' && <Projetos />}
                {selecaoAtiva === 'destaque' && <section id="destaque"></section>}
                {selecaoAtiva === 'contratar' && <section id="contratar"></section>}
            </div>
        </section>
    );
};

export default Navbar;
