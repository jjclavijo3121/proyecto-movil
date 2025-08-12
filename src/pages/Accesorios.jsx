import React, { useEffect } from 'react';
import './styles/Productos.css';
import { Link } from 'react-router-dom';
import productos from '../data/DataProductos.js';

const Accesorios = () => {
  // 🔹 Scroll al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔹 Filtrar solo productos con marca "Accesorios"
  const accesoriosProducts = productos.filter(
    (prod) => prod.marca.toLowerCase() === 'accesorios'
  );

  return (
    <>
      {/* Banner de video */}
      <div className="productos-banner-video">
        <video autoPlay muted loop playsInline>
          <source src="/banner_video_accesorios.mp4" type="video/mp4" />
          Tu navegador no soporta este video.
        </video>
      </div>

      <div className="coleccion-contenedor">
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
            Bienvenido a nuestra exclusiva colección de{' '}
            <strong>Accesorios Premium</strong>.<br />
            Desde AirPods hasta cargadores rápidos, encuentra todo lo que
            necesitas para complementar tu dispositivo con estilo y calidad.
          </p>
        </div>
      </div>

      <div className="productos-wrapper">
        <div className="productos-container">
          {accesoriosProducts.map((prod) => (
            <Link
              to={`/producto/${prod.id}`}
              key={prod.id}
              className="producto-card-link"
            >
              <div className="producto-card-wrapper">
                <div className="producto-card">
                  <img
                    src={prod.imagenPrincipal || '/placeholder.jpg'}
                    alt={prod.nombre}
                    className="producto-imagen-ajustada"
                  />
                  <h3>{prod.nombre}</h3>
                  <p className="marca">{prod.marca}</p>
                  <p className="precio-original">
                    ${Number(prod.precioOriginal).toLocaleString()}
                  </p>
                  <p className="precio-actual">
                    ${Number(prod.precioActual).toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accesorios;
