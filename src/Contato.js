import React from 'react';
import foto from '../src/img/contato.jpg';

const Contato = () => {
  return (
    <div className="container produtoEsp animar">
      <img src={foto} alt="contatoImg" />
      <div className="infos">
        <h1>Entre em contato</h1>
        <p>- petersonbozza7@gmail.com</p>
        <p>- 969192945</p>
        <p>- R. Tomas Quintanilha 331</p>
      </div>
    </div>
  );
};

export default Contato;
