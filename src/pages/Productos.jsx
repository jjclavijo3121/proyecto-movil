import React from 'react';
import './styles/Productos.css';
import { Link } from 'react-router-dom'; 
import productos from "../data/DataProductos.js";

const Productos = () => {
  return (
    <>
      {/* Banner de video */}
      <div className="productos-banner-video">
        <video autoPlay muted loop playsInline>
          <source src="/banner_video.mp4" type="video/mp4" />
          Tu navegador no soporta este video.
        </video>
      </div>

      <div className="coleccion-contenedor"> 
        {/* Título y filtros */}
        <div className="coleccion-header">
          <div className="filtros">
            <button className="filtro-btn">
              <i className="icono-ajustes" /> Filtrar
            </button>
            <div className="dropdown">
              <button className="caracteristicas-btn">
                Características <span className="flecha-abajo">▼</span>
              </button>
            </div>
          </div>

          <p className="descripcion">
            Prepárate para ser envuelto en un mundo de elegancia tecnológica con <strong>"Tech Elegance: La Colección Apple"</strong>.<br />
            Descubre cómo cada producto transforma tu día a día, permitiéndole alcanzar nuevos horizontes y desbloquear todo tu potencial en un estilo sin igual. Bienvenido a la excelencia Apple.
          </p>
        </div>
      </div>


      <div className="productos-wrapper">
        <div className="productos-container">
          {productos.map((prod) => (
            <Link to={`/producto/${prod.id}`} key={prod.id} className="producto-card-link">
              <div className="producto-card-wrapper">
                <div className="producto-card">
                  <img
                    src={prod.imagenPrincipal || prod.imagen || '/placeholder.jpg'}
                    alt={prod.nombre}
                    className="producto-imagen-ajustada"
                  />
                  <h3>{prod.nombre}</h3>
                  <p className="marca">{prod.marca}</p>
                  <p className="precio-original">${Number(prod.precioOriginal).toLocaleString()}</p>
                  <p className="precio-actual">${Number(prod.precioActual).toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productos;


