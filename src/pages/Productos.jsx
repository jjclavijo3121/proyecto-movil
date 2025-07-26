import React from 'react';
import './styles/Productos.css';

const productos = [
  {
    id: 1,
    nombre: 'iPhone 12 Pro Max 256GB De EXH + Vidrio Atomic Semiautomático',
    marca: 'APPLE',
    precioOriginal: 2899990,
    precioActual: 1899990,
    imagen: 'https://i.imgur.com/xDBt6Os.png',
  },
  {
    id: 2,
    nombre: 'iPhone 14 Pro Max 128GB De EXH sim virtual',
    marca: 'APPLE',
    precioOriginal: 3999990,
    precioActual: 2949990,
    imagen: '/public/iphone14pro.png',
  },
  {
    id: 3,
    nombre: 'iPad Mini 7TH Generación 128GB',
    marca: 'APPLE',
    precioOriginal: 3399990,
    precioActual: 2699990,
    imagen: '/public/iphone12.png',
  },
  // Agrega más productos aquí...
];

const Productos = () => {
  return (
    <div className="productos-container">
      {productos.map((prod) => (
        <div className="producto-card" key={prod.id}>
          <img src={prod.imagen} alt={prod.nombre} />
          <h3>{prod.nombre}</h3>
          <p className="marca">{prod.marca}</p>
          <p className="precio-original">${prod.precioOriginal.toLocaleString()}</p>
          <p className="precio-actual">${prod.precioActual.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Productos;
