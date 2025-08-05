import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../data/DataProductos.js';
import './CardDetails.css';

const CardDetails = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));

  const [imagenSeleccionada, setImagenSeleccionada] = useState(producto?.imagenPrincipal || producto?.imagenes[0]);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false); // Estado para desplegar descripción

  if (!producto) {
    return <div style={{ padding: '2rem' }}>Producto no encontrado.</div>;
  }

  return (
    <div className="card-details-container">
      <div className="card-wrapper">
        <div className="image-gallery">
          {producto.imagenes.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`miniatura-${idx}`}
              onClick={() => setImagenSeleccionada(img)}
              className={`miniatura ${img === imagenSeleccionada ? 'seleccionada' : ''}`}
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

          {/* Sección de Descripción Acordeón */}
          <div className="accordion-section">
            <div
              className="accordion-header"
              onClick={() => setMostrarDescripcion(!mostrarDescripcion)}
            >
              <span>DESCRIPCIÓN</span>
              <span className={`flecha ${mostrarDescripcion ? 'abierta' : ''}`}>▼</span>
            </div>
            <hr />
            {mostrarDescripcion && (
              <div className="accordion-content">
                <p>{producto.descripcion}</p>

                {/* Si existen especificaciones, mostrarlas en tabla */}
                {producto.especificaciones && producto.especificaciones.length > 0 && (
                  <>
                    <h4><em>Especificaciones</em></h4>
                    <table className="tabla-especificaciones">
                      <tbody>
                        {producto.especificaciones.map((item, idx) => (
                          <tr key={idx}>
                            <td>{item.campo}</td>
                            <td>{item.valor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
