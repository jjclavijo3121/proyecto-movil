import React from 'react';
import './styles/QuienesSomos.css';
import productos from '../data/DataProductos';
import { Link } from 'react-router-dom';

const QuienesSomos = () => {
  return (
    <>
      {/* Banner principal */}
      <div className="quienes-banner-imagen">
        <h1 className="quienes-titulo-banner">Quiénes Somos</h1>
        <img src="/public/banner-quienes.jpg" alt="Banner Quienes Somos" />
      </div>

      {/* Sección de tarjetas */}
      <div className="quienes-tarjetas-seccion">
        <div className="quienes-tarjeta">
          <img src="/public/tiroalblanco.png" alt="Nuestro propósito" />
          <h2>Nuestro propósito</h2>
          <p>
            Llevar la mejor experiencia de usuario a nuestros clientes a través de un servicio de calidad con productos y precios inigualables.
          </p>
        </div>

        <div className="quienes-tarjeta">
          <img src="/public/bombillo.png" alt="¿Por qué lo hacemos?" />
          <h2>¿Por qué lo hacemos?</h2>
          <p>
            Entendemos la excelencia en el servicio como un aspecto que va más allá de la venta. Somos apasionados y queremos que nuestros clientes y aliados siempre estén satisfechos en cada momento de relación con nuestra marca.
          </p>
        </div>

        <div className="quienes-tarjeta">
          <img src="/public/como.png" alt="¿Cómo lo haremos?" />
          <h2>¿Cómo lo haremos?</h2>
          <p>
            Capacitamos a nuestro personal en atención de servicio en puntos de venta y canales digitales. Garantizamos que nuestros colaboradores y socios se identifiquen con nuestro propósito de marca.
          </p>
        </div>
      </div>

      {/* Sección de historia y liderazgo */}
      <div className="quienes-historia">
        <h1>¿Por qué somos líderes?</h1>
        <p>
          Somos líderes porque tenemos los mejores productos, los mejores precios, y en especial, porque brindamos la mejor experiencia antes, durante y después de tu compra gracias al trabajo de nuestro equipo de colaboradores.
          <br /><br />
          Nuestra historia inicia en Medellín, Colombia, donde el disfrute por la tecnología y la pasión por el servicio nos hizo crecer rápidamente, posicionándonos como los líderes a nivel nacional. Hoy en día, contamos con tres sedes en la ciudad, envíos garantizados a todo el país, y la certeza de que muy pronto, nuestros puntos de venta estarán presentes en más lugares de Colombia.
        </p>
      </div>

      {/* Sección de productos Apple */}
      <div className="quienes-productos-seccion">
        <h1>Conoce Nuestros Productos</h1>
        <div className="productos-wrapper">
          <div className="productos-container">
            {productos
              .filter((prod) => prod.marca.toLowerCase() === 'apple')
              .slice(0, 4)
              .map((prod) => (
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

        {/* Botón para ir a la página de productos Apple */}
        <div className="quienes-vermas-btn-container">
          <Link to="/productos" className="quienes-vermas-btn">
            Ver todos los productos Apple
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuienesSomos;
