import React from 'react';
import './styles/ProductoSamsung.css';
import { Link } from 'react-router-dom';
import productos from "../data/DataProductos.js";

const ProductoSamsung = () => {
  const samsungProducts = productos.filter(prod => prod.marca.toLowerCase() === 'samsung');

  return (
    <>
      {/* Banner de video */}
      <div className="productos-banner-imagen">
        <img src="/fondo-samsung.png" alt="Banner Samsung" className="banner-img" />
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
            Descubre el futuro en tus manos con la <strong>"Colección Samsung Galaxy"</strong>.<br />
            Disfruta de innovación, potencia y estilo con dispositivos que te conectan con lo que realmente importa. Bienvenido al universo Samsung.
          </p>
        </div>
      </div>

      <div className="productos-wrapper">
        <div className="productos-container">
          {samsungProducts.map((prod) => (
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

export default ProductoSamsung;
