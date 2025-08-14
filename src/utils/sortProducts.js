// Función utilitaria para ordenar productos según diferentes criterios
export const sortProducts = (products, sortType) => {
  const sortedProducts = [...products];

  switch (sortType) {
    case 'caracteristicas':
      // Mantener orden original (sin ordenamiento específico)
      return sortedProducts;

    case 'mas-vendidos':
      // Ordenar por ID (asumiendo que los IDs más bajos son más vendidos)
      // Puedes cambiar esta lógica según tu sistema de ventas
      return sortedProducts.sort((a, b) => a.id - b.id);

    case 'alfabetico-az':
      return sortedProducts.sort((a, b) => 
        a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
      );

    case 'alfabetico-za':
      return sortedProducts.sort((a, b) => 
        b.nombre.toLowerCase().localeCompare(a.nombre.toLowerCase())
      );

    case 'precio-menor-mayor':
      return sortedProducts.sort((a, b) => 
        (a.precioActual || 0) - (b.precioActual || 0)
      );

    case 'precio-mayor-menor':
      return sortedProducts.sort((a, b) => 
        (b.precioActual || 0) - (a.precioActual || 0)
      );

    default:
      return sortedProducts;
  }
};
