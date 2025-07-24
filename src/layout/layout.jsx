import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '0rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
