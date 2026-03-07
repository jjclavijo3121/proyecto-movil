import React, { useEffect, useMemo, useState } from 'react';
import './styles/ProductoSamsung.css';
import { Link } from 'react-router-dom';
import productos from "../data/DataProductos.js";
import FilterMenu from '../components/FilterMenu/FilterMenu.jsx';
import SortDropdown from '../components/SortDropdown/SortDropdown.jsx';
import { sortProducts } from '../utils/sortProducts.js';

const ProductoSamsung = () => {
  // Estados para el menú de filtros
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState('caracteristicas');

  const samsungProducts = useMemo(
    () => productos.filter(prod => prod.marca.toLowerCase() === 'samsung'),
    []
  );

  // Aplicar filtros y ordenamiento a los productos Samsung
  useEffect(() => {
    let filtered = samsungProducts;

    // Aplicar filtros activos
    Object.keys(activeFilters).forEach(filterKey => {
      const filterValue = activeFilters[filterKey];
      if (!filterValue) return;

      switch (filterKey) {
        case 'categoria':
          if (filterValue === 'samsung') {
            filtered = filtered.filter(prod => 
              prod.marca.toLowerCase() === 'samsung'
            );
          }
          break;
        case 'precio':
          filtered = filtered.filter(prod => {
            const precio = prod.precioActual;
            switch (filterValue) {
              case '0-500':
                return precio <= 500000;
              case '500-1000':
                return precio > 500000 && precio <= 1000000;
              case '1000-2000':
                return precio > 1000000 && precio <= 2000000;
              case '2000+':
                return precio > 2000000;
              default:
                return true;
            }
          });
          break;
        default:
          break;
      }
    });

    // Aplicar ordenamiento
    const sorted = sortProducts(filtered, sortType);
    setFilteredProducts(sorted);
  }, [activeFilters, sortType, samsungProducts]);

  // Inicializar productos filtrados
  useEffect(() => {
    setFilteredProducts(samsungProducts);
  }, [samsungProducts]);

  const handleFilterChange = (categoryKey, value) => {
    if (categoryKey === 'clear') {
      setActiveFilters({});
    } else {
      setActiveFilters(prev => ({
        ...prev,
        [categoryKey]: prev[categoryKey] === value ? null : value
      }));
    }
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const handleSortChange = (newSortType) => {
    setSortType(newSortType);
  };

  return (
    <>
      {/* Banner de video */}
      <div className="productos-banner-imagen">
        <img src="/fondo-samsung.png" alt="Banner Samsung" className="banner-img" />
      </div>


      <div className="coleccion-contenedor">
        {/* Título y filtros */}
        <div className="coleccion-header">
          <div className="filtros">
            <button className="filtro-btn" onClick={toggleFilterMenu}>
              <i className="icono-ajustes" /> Filtrar
            </button>
            <div className="dropdown">
              <SortDropdown 
                onSortChange={handleSortChange}
                currentSort={sortType}
              />
            </div>
          </div>

          <p className="descripcion">
            Descubre el futuro en tus manos con la <strong>"Colección Samsung Galaxy"</strong>.<br />
            Disfruta de innovación, potencia y estilo con dispositivos que te conectan con lo que realmente importa. Bienvenido al universo Samsung.
          </p>
        </div>
      </div>

      {/* Componente del menú de filtros */}
      <FilterMenu
        isOpen={isFilterMenuOpen}
        onClose={() => setIsFilterMenuOpen(false)}
        onFilterChange={handleFilterChange}
        activeFilters={activeFilters}
      />

      <div className="productos-wrapper">
        <div className="productos-container">
          {filteredProducts.map((prod) => (
            <Link to={`/producto/${prod.id}`} key={prod.id} className="producto-card-link">
              <div className="producto-card-wrapper">
                <div className="producto-card">
                  <img
                    src={prod.imagenPrincipal || prod.imagen || '/phone-samsung.png'}
                    alt={prod.nombre}
                    className="producto-imagen-ajustada"
                  />
                  <h3>{prod.nombre}</h3>
                  <p className="marca">{prod.marca}</p>
                  <p className="precio-original">${Number(prod.precioOriginal).toLocaleString()}</p>
                  <p className="precio-actual">${Number(prod.precioActual).toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductoSamsung;
