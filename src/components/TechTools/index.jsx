import './TechTools.css'

const TechTools = () => {
    return (
        <section className='techtools'>
        <div className='techtools__content'>
            <h2 className='techTools__tit'>TECNOLOGIAS E FERRAMENTAS</h2>
            <ul>
                <li>
                    <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' target="_blank" rel="noreferrer">
                    <img src='/assets/html-5.png' alt="Logo HTML-5" />
                    <span>HTML</span>
                    </a>
                </li>
                <li>
                    <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target="_blank" rel="noreferrer">
                    <img src='/assets/css-3.png' alt="Logo CSS-3" />
                    <span>CSS</span>
                    </a>
                </li>
                <li>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer">
                    <img src='/assets/javascript.png' alt="Logo JavaScript" />
                    <span>JavaScript</span>
                    </a>
                </li>
                <li>
                    <a href='https://docs.github.com/pt' target="_blank" rel="noreferrer">
                    <img src='/assets/github.png' alt="Logo GitHub" />
                    <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a href='https://react.dev/' target="_blank" rel="noreferrer">
                    <img src='/assets/react.png' alt="Logo React" />
                    <span>React</span>
                    </a>
                </li>
                <li>
                    <a href='https://getbootstrap.com/docs/5.3/getting-started/introduction/' target="_blank" rel="noreferrer">
                    <img src='/assets/bootstrap.png' alt="Logo Bootstrap" />
                    <span>Bootstrap</span>
                    </a>
                </li>
                <li>
                    <a href='https://help.figma.com/hc/en-us' target="_blank" rel="noreferrer">
                    <img src='/assets/figma.png' alt="Logo Figma" />
                    <span>Figma</span>
                    </a>
                </li>
                <li>
                    <a href='https://git-scm.com/doc' target="_blank" rel="noreferrer">
                    <img src='/assets/git.png' alt="Logo Git" />
                    <span>Git</span>
                    </a>
                </li>
                <li>
                    <a href='https://vite.dev/' target="_blank" rel="noreferrer">
                    <img src='/assets/vite-js.png' alt="Logo Vite" />
                    <span>Vite</span>
                    </a>
                </li>
                <li>
                    <a href='https://www.w3schools.com/excel/' target="_blank" rel="noreferrer">
                    <img src='/assets/excel.png' alt="Logo Excel" />
                    <span>Excel</span>
                    </a>
                </li>
                <li>
                    <a href='https://www.w3schools.blog/powerpoint-tutorial' target="_blank" rel="noreferrer">
                    <img src='/assets/powerpoint.png' alt="Logo PowerPoint" />
                    <span>PowerPoint</span>
                    </a>
                </li>
                <li>
                    <a href='https://www.w3schools.blog/ms-word-tutorial' target="_blank" rel="noreferrer">
                    <img src='/assets/word.png' alt="Logo Word" />
                    <span>Word</span>
                    </a>
                </li>
                <li>
                    <a href='https://learn.microsoft.com/pt-br/power-bi/' target="_blank" rel="noreferrer">
                    <img src='/assets/powerbi.png' alt="Logo Power BI" />
                    <span>Power BI</span>
                    </a>
                </li>
            </ul>
        </div>
        </section>
    )
}

export default TechTools