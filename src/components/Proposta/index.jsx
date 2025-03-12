import { useState } from 'react';
import './Proposta.css';
import emailjs from '@emailjs/browser';

const Proposta = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

function sendEmail(e) {
    e.preventDefault();

    if(name === '' || email === '' || message === '') {
    alert("Preencha todos os campos")
    return;
  }

  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }

  emailjs.send("service_g0fdcsh", "template_tembsqi", templateParams, "tKfoA_41B4rKrfbf1")
  .then((response) => {
    alert("EMAIL ENVIADO", response.status, response.text)
    setName('')
    setEmail('')
    setMessage('')
}, (err) => {
    alert("ERRO: ", err)
})
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

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
};

export default Proposta;
