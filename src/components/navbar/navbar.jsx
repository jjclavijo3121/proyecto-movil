import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';

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
          <li><Link to="/" className="navbar-link">Inicio</Link></li>

          <li className="dropdown">
            <span className="navbar-link">Productos</span>
            <ul className="dropdown-menu">
              <li><Link to="/productos" className="navbar-link">Apple</Link></li>
              <li><Link to="/samsung" className="navbar-link">Samsung</Link></li>
              <li><Link to="/accesorios" className="navbar-link">Accesorios</Link></li>
            </ul>
          </li>

          <li><Link to="/quienes-somos" className="navbar-link">Quienes Somos</Link></li>
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
          <ProfileDropdown />
          <div className="icon icon-market"><FiShoppingCart /></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
