// src/components/CardDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './CardDetails.css';

const CardDetails = () => {
  const { id } = useParams(); // ID de la URL

  // 🔁 Simulación de datos para este ejemplo
  const producto = {
    id,
    marca: 'Apple',
    nombre: 'iPhone 15 128GB Nuevo sim física',
    precioOriginal: 3449990,
    precioDescuento: 2869990,
    colores: ['Azul', 'Amarillo', 'Rosado', 'Negro', 'Verde'],
    imagenPrincipal: '/imagenes/iphone-blanco.png',
    imagenes: [
      '/imagenes/iphone-amarillo.png',
      '/imagenes/iphone-rosado.png',
      '/imagenes/iphone-negro.png',
      '/imagenes/iphone-verde.png',
      '/imagenes/iphone-azul.png'
    ]
  };

  return (
    <div className="detalle-container">
      <div className="imagenes">
        <div className="miniaturas">
          {producto.imagenes.map((img, idx) => (
            <img key={idx} src={img} alt={`miniatura-${idx}`} className="miniatura" />
          ))}
        </div>
        <img src={producto.imagenPrincipal} alt={producto.nombre} className="imagen-principal" />
      </div>

      <div className="info-producto">
        <span className="marca">{producto.marca}</span>
        <h1>{producto.nombre}</h1>
        <div className="precios">
          <span className="precio-original">${producto.precioOriginal.toLocaleString()}</span>
          <span className="precio-descuento">${producto.precioDescuento.toLocaleString()}</span>
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
