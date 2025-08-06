import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout.jsx';
import Home from './pages/Home.jsx';
import Productos from './pages/Productos.jsx';
import QuienesSomos from './pages/QuienesSomos.jsx';
import CardDetails from './components/Cards/CardDetails.jsx';
import ProductoSamsung from './pages/ProductoSamsung';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="/samsung" element={<ProductoSamsung />} />
          <Route path="producto/:id" element={<CardDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



