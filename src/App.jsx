import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightTheme(true);
      document.body.classList.add('light-theme');
    } else {
      setIsLightTheme(false);
      document.body.classList.remove('light-theme');
    }
  }, []);

  const toggleTheme = (theme) => {
    if (theme === 'light') {
      setIsLightTheme(true);
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      setIsLightTheme(false);
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className='App'>
      
      <Helmet>
        <title>Portfólio de Erik da Silva Alves | Desenvolvedor Front-End</title>
        <meta name="description" content="Confira os projetos mais recentes de Erik da Silva Alves, desenvolvedor front-end especializado em React e design responsivo." />
        <meta name="keywords" content="desenvolvedor front-end, React, projetos web, design responsivo" />
        <meta property="og:title" content="Portfólio de Erik da Silva Alves" />
        <meta property="og:description" content="Confira os projetos mais recentes de Erik da Silva Alves, desenvolvedor front-end especializado em React e design responsivo." />
        <meta property="og:url" content="https://portfolio-pessoal-alpha-nine.vercel.app/" /> {/* Link do seu site */}
      </Helmet>

      <section className='tema'>
        <div className="theme-switch">
          <div className={`switch-indicator ${isLightTheme ? 'light' : 'dark'}`} />
          <FontAwesomeIcon 
            icon={faMoon} 
            className="icon moon-icon"
            style={{color: "#f5fdfd",}}
            onClick={() => toggleTheme('dark')}
          />
          <FontAwesomeIcon 
            icon={faSun} 
            style={{color: "#f5fdfd",}} 
            className="icon sun-icon"
            onClick={() => toggleTheme('light')}
            />
        </div>
      </section>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
