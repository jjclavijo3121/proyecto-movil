import React from 'react';
import './styles/Home.css';

const Body = () => {
  return (
    <div className="body-background">
      <h1 className="inicio-titulo">Bienvenido a la página de celulares</h1>
      <p className="inicio-subtitulo">Aquí irá tu contenido...</p>

      <div className="inicio-botones">
        <button className="boton-azul">Más información</button>
        <button className="boton-borde">Comprar el iPhone</button>
      </div>

      <img
        className="body-main-image"
        src="/public/phone.png"
        alt="Imagen principal"
      />
    </div>
  );
};

export default Body;
