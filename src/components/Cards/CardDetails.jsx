import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../data/DataProductos.js';
import './CardDetails.css';

const CardDetails = () => {
  const { id } = useParams(); // ID desde la URL
  const producto = productos.find((p) => p.id === Number(id)); // Buscar el producto correspondiente

  // Validación por si no se encuentra el producto
  if (!producto) {
    return <div style={{ padding: '2rem' }}>Producto no encontrado.</div>;
  }

  return (
    <div className="detalle-container">
      <div className="imagenes">
        <div className="miniaturas">
        {producto.imagenes?.map((img, idx) => (
          <img key={idx} src={img} alt={`miniatura-${idx}`} className="miniatura" />
        ))}
        </div>
        <img src={producto.imagenPrincipal || producto.imagenes[0]} alt={producto.nombre} className="imagen-principal" />
      </div>

      <div className="info-producto">
        <span className="marca">{producto.marca}</span>
        <h1>{producto.nombre}</h1>
        <div className="precios">
          <span className="precio-original">${producto.precioOriginal.toLocaleString()}</span>
          <span className="precio-descuento">${producto.precioActual.toLocaleString()}</span>
        </div>
        <p className="info-envio">Impuesto incluido. Los gastos de envío se calculan en la pantalla de pagos.</p>

        <div className="colores">
          <p>COLOR</p>
          <div className="color-options">
            {producto.colores.map((color, idx) => (
              <button key={idx} className="color-btn">{color.toUpperCase()}</button>
            ))}
          </div>
        </div>

        <p className="envio">📦 Envío para toda Colombia.</p>
        <button className="comparar-btn">Añadir a comparar</button>
      </div>
    </div>
  );
};

export default CardDetails;
