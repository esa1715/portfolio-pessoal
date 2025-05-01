import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';

function App() {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false);

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

  const toggleTheme = (theme: 'light' | 'dark') => {
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
