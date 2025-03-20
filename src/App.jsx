import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // Estado para controlar o tema
  const [isLightTheme, setIsLightTheme] = useState(false);

  // Verifica se existe um tema salvo no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightTheme(true);
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, []);

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    if (!isLightTheme) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className='App'>
      {/* Adicionando o botão para alternar o tema */}
      <button onClick={toggleTheme}>
        {isLightTheme ? 'Modo Escuro' : 'Modo Claro'}
      </button>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
 