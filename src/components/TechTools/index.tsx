import { useState, useEffect } from 'react';
import './TechTools.css';
import React from 'react';

const TechTools: React.FC = () => {
    const [githubLogo, setGithubLogo] = useState<string>('/assets/github-white.png');

    const handleThemeChange = (): void => {
        if (document.body.classList.contains('light-theme')) {
            setGithubLogo('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg');
        } else {
            setGithubLogo('/assets/github-white.png');
        }
    };

    useEffect(() => {
        handleThemeChange();

        const observer = new MutationObserver(handleThemeChange);

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className='techtools'>
            <div className='techtools__content'>
                <h2 className='techTools__tit'>TECNOLOGIAS E FERRAMENTAS</h2>
                <ul>
                    <li>
                        <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' alt="Logo HTML-5" loading='lazy' />
                            <span>HTML</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' alt="Logo CSS-3" loading='lazy' />
                            <span>CSS</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' 
                            alt="Logo JavaScript" loading='lazy' />
                            <span>JavaScript</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.typescriptlang.org/docs/' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' 
                            alt="Logo TypeScript" 
                            loading='lazy' />
                            <span>TypeScript</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://react.dev/' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' 
                            alt="Logo React" loading='lazy' />
                            <span>React</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://tailwindcss.com/docs/installation/using-vite' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' 
                            alt="Logo Tailwind" loading='lazy' />
                            <span>Tailwind</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://sass-lang.com/documentation/' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' 
                            alt="Logo Sass" loading='lazy' />
                            <span>Sass</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://getbootstrap.com/docs/5.3/getting-started/introduction/' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' alt="Logo Bootstrap" loading='lazy' />
                            <span>Bootstrap</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://vite.dev/' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' alt="Logo Vite" loading='lazy' />
                            <span>Vite</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://git-scm.com/doc' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' alt="Logo Git" loading='lazy' />
                            <span>Git</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://docs.github.com/pt' target="_blank" rel="noreferrer">
                            <img src={githubLogo} alt="Logo GitHub" loading='lazy' />
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://help.figma.com/hc/en-us' target="_blank" rel="noreferrer">
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' alt="Logo Figma" loading='lazy' />
                            <span>Figma</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default TechTools;
