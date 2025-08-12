import React from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <>
      <div className="body-background">
        <h1 className="inicio-titulo">Bienvenido a la página de celulares</h1>
        <p className="inicio-subtitulo">Aquí irá tu contenido...</p>

        <div className="inicio-botones">
          <Link to="/quienes-somos">
            <button className="boton-azul">Quienes Somos</button>
          </Link>
          <Link to="/productos">
            <button className="boton-borde">Comprar iPhone</button>
          </Link>
        </div>

        <img
          className="body-main-image"
          src="/public/phone.png"
          alt="Imagen principal"
        />
      </div>

      {/* Sección del iPhone 16 */}
      <div className="seccion-iphone16">
        <h2 className="iphone16-titulo">El iPhone 16 está por llegar</h2>
        <p className="iphone16-subtitulo">
          Más potente, más inteligente, más Apple.
        </p>
        <Link to="/producto/6">
          <button className="boton-borde">Ver más</button>
        </Link>
      </div>

      {/* Segunda imagen tipo banner con botón debajo */}
      <div className="home-banner-imagen">
        <img src="/public/iphone16-home.png" alt="Banner Destacado" />
        <Link to="/productos">
          <button className="boton-borde-iphone">Ver todos los modelos</button>
        </Link>
      </div>

      {/* Banner Samsung */}
      <div className="samsung-banner-container">
        <h2 className="samsung-banner-titulo">Colección Samsung</h2>
        <img src="/public/banner_samsung.png" alt="Banner Samsung" />
      </div>

      <div className="body-background-samsung">
        <h1 className="inicio-titulo-samsung">Bienvenido a la página de Samsung</h1>
        <p className="inicio-subtitulo-samsung">Aquí irá tu contenido...</p>

        <div className="inicio-botones-samsung">
          <Link to="/samsung">
            <button className="boton-borde-samsung">Comprar Samsung</button>
          </Link>
        </div>
        <img
          className="body-main-image-samsung"
          src="/public/phone-samsung.png"
          alt="Imagen principal"
        />
      </div>
    </>
  );
};

export default Body;

