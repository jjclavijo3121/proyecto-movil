import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout.jsx';  // Asegúrate de importar tu Layout correctamente
import Home from './pages/Home.jsx';
import Productos from './pages/Productos.jsx';
import QuienesSomos from './pages/QuienesSomos.jsx';
import CardDetails from './components/Cards/CardDetails.jsx'; // Ajusta la ruta si tu archivo está en otra carpeta


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="producto/:id" element={<CardDetails />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



