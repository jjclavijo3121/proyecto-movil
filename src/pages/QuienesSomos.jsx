import React from 'react';
import './styles/QuienesSomos.css';
import productos from '../data/DataProductos';
import { Link } from 'react-router-dom';

const QuienesSomos = () => {
  return (
    <>
      <div className="quienes-banner-imagen">
        <h1 className="quienes-titulo-banner">Quienes Somos</h1>
        <img src="/iphone16_banner.png" alt="Banner Quienes Somos" />
      </div>

      <div className="quienes-tarjetas-seccion">
        <div className="quienes-tarjeta">
          <img src="/tiroalblanco.png" alt="Nuestro proposito" />
          <h2>Nuestro proposito</h2>
          <p>
            Llevar la mejor experiencia de usuario a nuestros clientes a traves de un servicio de calidad con productos y precios inigualables.
          </p>
        </div>

        <div className="quienes-tarjeta">
          <img src="/bombillo.png" alt="Por que lo hacemos" />
          <h2>Por que lo hacemos</h2>
          <p>
            Entendemos la excelencia en el servicio como un aspecto que va mas alla de la venta. Somos apasionados y queremos que nuestros clientes y aliados siempre esten satisfechos en cada momento de relacion con nuestra marca.
          </p>
        </div>

        <div className="quienes-tarjeta">
          <img src="/signosdepre.png" alt="Como lo haremos" />
          <h2>Como lo haremos</h2>
          <p>
            Capacitamos a nuestro personal en atencion de servicio en puntos de venta y canales digitales. Garantizamos que nuestros colaboradores y socios se identifiquen con nuestro proposito de marca.
          </p>
        </div>
      </div>

      <div className="quienes-historia">
        <h1>Por que somos lideres</h1>
        <p>
          Somos lideres porque tenemos los mejores productos, los mejores precios, y en especial, porque brindamos la mejor experiencia antes, durante y despues de tu compra gracias al trabajo de nuestro equipo de colaboradores.
          <br /><br />
          Nuestra historia inicia en Medellin, Colombia, donde el disfrute por la tecnologia y la pasion por el servicio nos hizo crecer rapidamente, posicionandonos como los lideres a nivel nacional. Hoy en dia, contamos con tres sedes en la ciudad, envios garantizados a todo el pais, y la certeza de que muy pronto, nuestros puntos de venta estaran presentes en mas lugares de Colombia.
        </p>
      </div>

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
                        src={prod.imagenPrincipal || prod.imagen || '/phone.png'}
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
