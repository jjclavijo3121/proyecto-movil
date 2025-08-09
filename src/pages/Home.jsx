import React from 'react';
import './styles/Home.css';

const Body = () => {

  return (
    <>
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

      {/* Sección del iPhone 16 */}
      <div className="seccion-iphone16">
        <h2 className="iphone16-titulo">El iPhone 16 está por llegar</h2>
        <p className="iphone16-subtitulo">
          Más potente, más inteligente, más Apple.
        </p>
        <button className="boton-borde">Ver más</button>
      </div>

      {/* Segunda imagen tipo banner con botón debajo */}
      <div className="home-banner-imagen">
        <img src="/public/iphone16_banner.png" alt="Banner Destacado" />
        <button className="boton-borde-iphone">Ver todos los modelos</button>
      </div>

      {/* Banner Samsung */}
      <div className="samsung-banner-container">
        <h2 className="samsung-banner-titulo">Colección Samsung</h2>
        <img src="/public/banner_samsung.png" alt="Banner Samsung" />
      </div>
    </>
  );
};

export default Body;
