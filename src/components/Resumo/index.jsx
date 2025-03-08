import './Resumo.css'

const Resumo = () => {
    return (
        <section className='resumo'>
            <div className='resumo__content'>
                <h2 className='resumo__tit'>RESUMO</h2>
                <p>Sou um <span>profissional</span> em início de carreira com <span>conhecimentos</span> intermediários-avançados <span>em</span> ferramentas do Front-End (<span className='span__html'>HTML</span>, <span className='span__css'>CSS</span>, <span className='span__js'>JavaScript</span>, <span className='span__react'>React</span>), do Pacote Office (<span className='resumo__span'>Excel</span>, <span className='span__pp'>PowerPoint</span>, <span className='span__word'>Word</span>) e em <span className='span__pbi'>Power BI</span>.</p>
                <p>Tenho <span>nível B2</span> em <span>inglês</span> e <span>A1-A2</span> em <span>italiano</span> e <span>espanhol</span>.</p>
                <p>Busco <span>oportunidades</span> que me permitam <span>aplicar</span> e <span>expandir</span> meus <span>conhecimentos</span>, contribuindo para o crescimento da organização e o meu <span>desenvolvimento profissional</span>.</p>
            </div>
        </section>
    )
}

export default Resumo