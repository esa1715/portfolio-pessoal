import './TechTools.css'

const TechTools = () => {
    return (
        <section className='techtools'>
        <div className='techtools__content'>
            <h2 className='techTools__tit'>TECNOLOGIAS E FERRAMENTAS</h2>
            <div className='techtools__icons'>
                <div className='icon__content'>
                    <img src="src/assets/html-5.png" alt="Logo HTML-5" />
                    <span>HTML</span>
                </div>
                <div className='icon__content'>
                    <img src="src/assets/css-3.png" alt="Logo CSS-3" />
                    <span>CSS</span>
                </div>
                <div className='icon__content'>
                    <img src="src/assets/javascript.png" alt="Logo JavaScript" />
                    <span>JavaScript</span>
                </div>
                <div className='icon__content'>
                    <img src="src/assets/github.png" alt="Logo GitHub" />
                    <span>GitHub</span>
                </div>
                <div className='icon__content'>
                    <img src="src/assets/react.png" alt="Logo React" />
                    <span>React</span>
                </div>
                <div className='icon__content'>
                    <img src="src/assets/excel.png" alt="Logo Excel" />
                    <span>Excel</span>
                </div>
                <div className='icon__content'>
                    <img src="src/assets/powerpoint.png" alt="Logo PowerPoint" />
                    <span>PowerPoint</span>
                </div>
                <div className='icon__content'>
                    <img src="src/assets/word.png" alt="Logo Word" />
                    <span>Word</span>
                </div>
                <div className='icon__content'>
                    <img src="src/assets/powerbi.png" alt="Logo Power BI" />
                    <span>Power BI</span>
                </div>
            </div>
        </div>
        </section>
    )
}

export default TechTools