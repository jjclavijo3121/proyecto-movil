import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Múltiples métodos para asegurar que el scroll funcione
    const scrollToTop = () => {
      // Método 1: scrollTo inmediato
      window.scrollTo(0, 0);
      
      // Método 2: scrollTo con opciones
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Método 3: modificar scrollTop directamente
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Ejecutar inmediatamente
    scrollToTop();
    
    // Ejecutar después del renderizado con setTimeout
    setTimeout(scrollToTop, 0);
    
    // Ejecutar con un pequeño delay adicional para casos difíciles
    setTimeout(scrollToTop, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
