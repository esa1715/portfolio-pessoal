import './Especialidades.css'

const Especialidades = () => {
    const especialidades = [
        {
            nome: "React",
            descricao: "Desenvolver aplicações robustas em React, otimizando a reutilização de componentes e a organização do código para uma manutenção eficiente e escalável."
        },
        {
            nome: "Responsividade",
            descricao: "Desenvolver layouts responsivos que se adaptam perfeitamente a diferentes dispositivos, desde desktops até smartwatches"
        },
        {
            nome: "Design Interativo",
            descricao: "Criar interações dinâmicas e atraentes, como animações e efeitos de hover, para tornar a experiência do usuário mais envolvente e intuitiva."
        },
    ]

    return (
        <section id='especialidades'>
            <h2>MINHAS ESPECIALIDADES</h2>
            <ul>
                {especialidades.map((especialidades, index) => (
                    <li key={index} className='especialidades'>
                        <h3>{especialidades.nome}</h3>
                        <p>{especialidades.descricao}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Especialidades