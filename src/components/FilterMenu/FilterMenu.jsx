import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FilterMenu.css';

const FilterMenu = ({ isOpen, onClose, onFilterChange, activeFilters = {} }) => {
  const navigate = useNavigate();
  
  const filterCategories = [
    {
      title: 'Categoría',
      key: 'categoria',
      options: [
        { value: 'apple', label: 'Apple', navigate: '/productos' },
        { value: 'samsung', label: 'Samsung', navigate: '/samsung' },
        { value: 'tablet', label: 'Tablets' },
        { value: 'accesorios', label: 'Accesorios', navigate: '/accesorios' },
        { value: 'audifonos', label: 'Audífonos' }
      ]
    },
    {
      title: 'Rango de Precio',
      key: 'precio',
      options: [
        { value: '0-500', label: 'Hasta $500.000' },
        { value: '500-1000', label: '$500.000 - $1.000.000' },
        { value: '1000-2000', label: '$1.000.000 - $2.000.000' },
        { value: '2000+', label: 'Más de $2.000.000' }
      ]
    },
    {
      title: 'Almacenamiento',
      key: 'almacenamiento',
      options: [
        { value: '64gb', label: '64GB' },
        { value: '128gb', label: '128GB' },
        { value: '256gb', label: '256GB' },
        { value: '512gb', label: '512GB' },
        { value: '1tb', label: '1TB' }
      ]
    }
  ];

  const handleFilterClick = (categoryKey, value, option) => {
    // Si la opción tiene navegación, navegar a esa página
    if (option && option.navigate) {
      onClose(); // Cerrar el menú
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 100);
      navigate(option.navigate);
    } else {
      onFilterChange(categoryKey, value);
    }
  };

  const handleClearFilters = () => {
    onFilterChange('clear', null);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay con blur */}
      <div className="filter-overlay" onClick={onClose}>
        <div className="filter-blur-background"></div>
      </div>

      {/* Menú de filtros */}
      <div className="filter-menu">
        <div className="filter-menu-header">
          <h2>Filtros</h2>
          <button className="filter-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="filter-menu-content">
          {filterCategories.map((category) => (
            <div key={category.key} className="filter-category">
              <h3 className="filter-category-title">{category.title}</h3>
              <div className="filter-options">
                {category.options.map((option) => (
                  <button
                    key={option.value}
                    className={`filter-option ${
                      activeFilters[category.key] === option.value ? 'active' : ''
                    } ${option.navigate ? 'filter-option-navigate' : ''}`}
                    onClick={() => handleFilterClick(category.key, option.value, option)}
                  >
                    {option.label}
                    {option.navigate && <span className="navigate-icon">→</span>}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="filter-actions">
            <button className="filter-clear-btn" onClick={handleClearFilters}>
              Limpiar Filtros
            </button>
            <button className="filter-apply-btn" onClick={onClose}>
              Aplicar Filtros
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
