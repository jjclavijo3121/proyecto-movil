import React, { useState, useRef, useEffect } from 'react';
import './SortDropdown.css';

const SortDropdown = ({ onSortChange, currentSort = 'caracteristicas' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: 'caracteristicas', label: 'Características' },
    { value: 'mas-vendidos', label: 'Más vendidos' },
    { value: 'alfabetico-az', label: 'Alfabéticamente A-Z' },
    { value: 'alfabetico-za', label: 'Alfabéticamente Z-A' },
    { value: 'precio-menor-mayor', label: 'Precio menor a mayor' },
    { value: 'precio-mayor-menor', label: 'Precio mayor a menor' }
  ];

  const currentOption = sortOptions.find(option => option.value === currentSort);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sort-dropdown" ref={dropdownRef}>
      <button 
        className={`sort-dropdown-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
      >
        {currentOption?.label || 'Características'} 
        <span className={`sort-arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
      </button>

      {isOpen && (
        <div className="sort-dropdown-menu">
                          {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`sort-option ${currentSort === option.value ? 'selected' : ''}`}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    <span className="option-text">{option.label}</span>
                    {currentSort === option.value && <span className="check-icon">●</span>}
                  </button>
                ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
