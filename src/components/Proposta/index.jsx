import { useState } from 'react';
import './Proposta.css';
import emailjs from '@emailjs/browser';

const Proposta = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const [imageError, setImageError] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith('image/')) {
        setImageError('Por favor, envie apenas imagens.');
        setImage('');
        setImagePreview('');
        return;
      }

      if (file.size > 150 * 1024) {
        setImageError('A imagem não pode ser maior que 150KB.');
        setImage('');
        setImagePreview('');
        return;
      } else {
        setImageError('');
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result.split(',')[1]);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    if (image === '') {
      alert("Envie um design do seu projeto (imagem).");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      image: image,
    };

    emailjs.send("service_g0fdcsh", "template_tembsqi", templateParams, "tKfoA_41B4rKrfbf1")
      .then((response) => {
        alert("E-mail enviado com sucesso!", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setImage('');
        setImagePreview('');
      }, (err) => {
        alert("Erro ao enviar o e-mail:", err);
      });
  }

  return (
    <div className="proposta">
      <h2>ENVIE SUA IDEIA OU PROPOSTA</h2>
      <h3>Pensa que posso ajudar no seu projeto? Envie sua proposta ou ideia, ficarei feliz em recebê-la!</h3>
      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input 
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input 
          className="input"
          type="file"
          placeholder="Envie o design do seu projeto"
          onChange={handleImageChange}
        />

        {imagePreview && <img src={imagePreview} alt="Prévia da imagem" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />}

        {imageError && <div className="error-message">{imageError}</div>}

        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Proposta;
