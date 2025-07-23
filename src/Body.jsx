import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="body-background">
      <h1>Bienvenido a la página de celulares</h1>
      <p>Aquí irá tu contenido...</p>
      <img
        className="body-main-image"
        src="/public/phone.png"
        alt="Imagen principal"
      />
    </div>
  );
};

export default Body;
