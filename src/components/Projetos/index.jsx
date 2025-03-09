import './Projetos.css'

const Projetos = () => {
    const projetos = [
        {
            nome: "Página de vagas - Empresa fictícia (#7DaysOfCode)",
            descricao: "Projeto desenvolvido no desafio #7DaysOfCode - HTML e CSS com Giovanna Moeller. A proposta foi desenvolver uma página de 'Vagas' para uma empresa fictícia, aplicando conceitos como estruturação semântica, Flexbox e Grid.",
            link: "https://esa1715.github.io/pag-vagas-empresa-ficticia/",
            tags: ["HTML", "CSS"],
        }
    ]
    
    return (
        <section id='projetos'>
            <h2>Meus Projetos</h2>
            <ul>
                {projetos.map((projeto, index) => (
                    <li key={index} className='projeto'>
                        <h3>{projeto.nome}</h3>
                        <p>{projeto.descricao}</p>
                        <a href={projeto.link} target="_blank" rel="noreferrer">{projeto.link}</a>
                        <div className="tags">
                            {projeto.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projetos;
