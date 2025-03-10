import { useState } from 'react';
import './Navbar.css';
import Projetos from '../Projetos';
import Destaque from '../Destaque';

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
                        <button onClick={() => setSelecaoAtiva('destaque')}>Destaque</button>
                    </li>
                    <li>
                        <button onClick={() => setSelecaoAtiva('contratar')}>Contratar</button>
                    </li>
                </ul>
            </div>

            <div className='conteudo'>
                {selecaoAtiva === 'projetos' && <Projetos />}
                {selecaoAtiva === 'destaque' && <Destaque />}
                {selecaoAtiva === 'contratar' && <section id="contratar"></section>}
            </div>
        </section>
    );
};

export default Navbar;
