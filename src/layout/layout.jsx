import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  // Verificamos si estamos en la página de detalle del producto
  const isDetailsPage = location.pathname.startsWith('/producto/');

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isDetailsPage ? '#000' : '#fff',
        color: isDetailsPage ? '#fff' : '#000',
      }}
    >
      <Navbar />
      <main
        style={{
          flex: 1,
          paddingTop: '90px', // Ajustable según tu navbar
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

