import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../data/DataProductos.js';
import './CardDetails.css';

const CardDetails = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));

  const [imagenSeleccionada, setImagenSeleccionada] = useState(producto?.imagenPrincipal || producto?.imagenes[0]);

  if (!producto) {
    return <div style={{ padding: '2rem' }}>Producto no encontrado.</div>;
  }

  return (
    <div className="card-details-container">
      <div className="image-gallery">
        {producto.imagenes.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`miniatura-${idx}`}
            onClick={() => setImagenSeleccionada(img)}
            className="miniatura"
          />
        ))}
      </div>

      <div className="main-image">
        <img src={imagenSeleccionada} alt={producto.nombre} />
      </div>

      <div className="product-info">
        <div className="product-brand">{producto.marca}</div>
        <div className="product-title">{producto.nombre}</div>

        <div className="price-section">
          <div className="old-price">${producto.precioOriginal.toLocaleString()}</div>
          <div className="new-price">${producto.precioActual.toLocaleString()}</div>
        </div>

        <p className="info-envio">Impuesto incluido. Los gastos de envío se calculan en la pantalla de pagos.</p>

        <div className="product-color">
          <p>COLOR</p>
          {producto.colores.map((color, idx) => (
            <button key={idx} className="color-option">{color.toUpperCase()}</button>
          ))}
        </div>

        <div className="shipping-info">
          <i className="fa fa-truck"></i> Envío para toda Colombia.
        </div>

        <div className="buttons">
          <button>Añadir a comparar</button>
          <button>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

