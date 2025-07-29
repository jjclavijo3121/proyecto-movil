import React from 'react';
import './styles/Productos.css';

const productos = [
  {
    id: 1,
    nombre: 'iPhone 12 Pro Max 256GB De EXH + Vidrio Atomic Semiautomático',
    marca: 'APPLE',
    precioOriginal: 2899990,
    precioActual: 1899990,
    imagen: '/iphone12.png',
  },
  {
    id: 2,
    nombre: 'iPhone 14 Pro Max 128GB De EXH sim virtual',
    marca: 'APPLE',
    precioOriginal: 3999990,
    precioActual: 2949990,
    imagen: '/iphone14.png',
  },
  {
    id: 3,
    nombre: 'iPad Mini 7TH Generación 128GB',
    marca: 'APPLE',
    precioOriginal: 3399990,
    precioActual: 2699990,
    imagen: '/ipadmini.png',
  },
  {
    id: 4,
    nombre: "iPhone 13 128GB sim virtual",
    marca: "APPLE",
    precioOriginal: 3299000,
    precioActual: 2990000,
    imagen: "/iphone13.png"
  },
  {
    id: 5,
    nombre: "iPhone 11 128GB Sim Fisica",
    marca: "APPLE",
    precioOriginal: 1990000,
    precioActual: 1390000,
    imagen: "/iphone11.png"
  },
  {
    id: 6,
    nombre: "iPhone 12 128GB Sim Fisica",
    marca: "APPLE",
    precioOriginal: 2390000,
    precioActual: 1890000,
    imagen: "/iphone12a.png"
  },
  {
    id: 7,
    nombre: "iPhone 12 128GB Sim Fisica",
    marca: "APPLE",
    precioOriginal: 2390000,
    precioActual: 1890000,
    imagen: "/iphone12b.png"
  },
  {
    id: 8,
    nombre: "iPhone 12 128GB Sim Fisica",
    marca: "APPLE",
    precioOriginal: 2390000,
    precioActual: 1890000,
    imagen: "/iphone12c.png"
  },
];

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


      {/* Cards de productos */}
      <div className="productos-container">
        {productos.map((prod) => (
          <div className="producto-card" key={prod.id}>
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p className="marca">{prod.marca}</p>
            <p className="precio-original">${Number(prod.precioOriginal).toLocaleString()}</p>
            <p className="precio-actual">${Number(prod.precioActual).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Productos;

