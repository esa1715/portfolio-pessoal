import { useState } from 'react';
import './Navbar.css';
import Projetos from '../Projetos';
import Especialidades from '../Especialidades';
import Proposta from '../Proposta';
import Destaques from '../Destaques';

const Navbar: React.FC = () => {
    const [selecaoAtiva, setSelecaoAtiva] = useState<string | null>(null);

    return (
        <section className='navbar'>
            <div className='navbar__content'>
                <ul>
                    <li>
                        <button onClick={() => setSelecaoAtiva('destaques')}>Destaques</button>
                    </li>
                    <li>
                        <button onClick={() => setSelecaoAtiva('projetos')}>Projetos</button>
                    </li>
                    <li>
                        <button onClick={() => setSelecaoAtiva('especialidades')}>Especialidades</button>
                    </li>
                    <li>
                        <button onClick={() => setSelecaoAtiva('proposta')}>Proposta</button>
                    </li>
                </ul>
            </div>

            <div className='conteudo'>
                {selecaoAtiva === 'destaques' && <Destaques />}
                {selecaoAtiva === 'projetos' && <Projetos />}
                {selecaoAtiva === 'especialidades' && <Especialidades />}
                {selecaoAtiva === 'proposta' && <Proposta />}
            </div>
        </section>
    );
};

export default Navbar;
