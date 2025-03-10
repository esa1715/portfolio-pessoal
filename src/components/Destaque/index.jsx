import './Destaque.css'

const Destaque = () => {
    const destaque = [
        {
            nome: "Responsividade",
            descricao: ""
        },
    ]

    return (
        <section id='destaque'>
            <h2>O QUE EU POSSO FAZER DE POR VOCÊ?</h2>
            <ul>
                {destaque.map((destaque, index) => (
                    <li key={index} className='destaque'>
                        <h3>{destaque.nome}</h3>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Destaque