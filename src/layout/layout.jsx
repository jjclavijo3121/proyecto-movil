import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Navbar />
      <main style={{ 
        flex: 1, 
        paddingTop: '90px' // Ajusta este valor si tu navbar es más alto o más bajo
      }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
