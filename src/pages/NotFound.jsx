import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';

const NotFound = () => {
  return (
    <section className="notfound">
      <h1>404</h1>
      <p>La pagina que buscas no existe.</p>
      <Link to="/" className="notfound-link">
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;
