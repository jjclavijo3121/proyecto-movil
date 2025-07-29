import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // <-- Import necesario

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setShowSearch(false);
    };
    if (showSearch) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showSearch]);

  const handleInputChange = (e) => setBusqueda(e.target.value);
  const handleSearchClick = () => setShowSearch((prev) => !prev);
  const handleBlur = () => setShowSearch(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/quienes-somos">Quienes Somos</Link></li>
        </ul>
        <div className="navbar-icons">
          <div className="search-animated-container">
            {showSearch && (
              <input
                ref={inputRef}
                type="text"
                className="search-animated-input"
                placeholder="Buscar..."
                value={busqueda}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            )}
            <div className="icon icon-search" onClick={handleSearchClick} tabIndex={0}>
              <FiSearch />
            </div>
          </div>
          <div className="icon icon-market"><FiShoppingCart /></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
