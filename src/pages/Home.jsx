import React from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <>
      <div className="body-background">
        <h1 className="inicio-titulo">Bienvenido a la pagina de celulares</h1>
        <p className="inicio-subtitulo">Aqui ira tu contenido...</p>

        <div className="inicio-botones">
          <Link to="/quienes-somos" className="boton-azul">Quienes Somos</Link>
          <Link to="/productos" className="boton-borde">Comprar iPhone</Link>
        </div>

        <img
          className="body-main-image"
          src="/phone.png"
          alt="Imagen principal"
        />
      </div>

      <div className="seccion-iphone16">
        <h2 className="iphone16-titulo">El iPhone 16 Pro esta por llegar</h2>
        <p className="iphone16-subtitulo">
          Mas potente, mas inteligente, mas Apple.
        </p>
        <Link to="/producto/6" className="boton-borde">Ver mas</Link>
      </div>

      <div className="home-banner-imagen">
        <img src="/iphone16-home.png" alt="Banner Destacado" />
        <Link to="/productos" className="boton-borde-iphone">Ver todos los modelos</Link>
      </div>

      <div className="body-background-samsung">
        <h1 className="inicio-titulo-samsung">Bienvenido a la pagina de Samsung</h1>
        <p className="inicio-subtitulo-samsung">Aqui ira tu contenido...</p>

        <div className="inicio-botones-samsung">
          <Link to="/samsung" className="boton-borde-samsung">Comprar Samsung</Link>
        </div>
        <img
          className="body-main-image-samsung"
          src="/phone-samsung.png"
          alt="Imagen principal"
        />
      </div>
    </>
  );
};

export default Body;
