import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Verificar si hay un usuario guardado en localStorage al cargar
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error al cargar usuario guardado:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    // Guardar en localStorage
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Función para registrar usuario
  const register = (userData) => {
    // En una aplicación real, aquí se haría la llamada al API
    const newUser = {
      id: Date.now(), // ID temporal
      nombre: userData.nombre,
      apellido: userData.apellido,
      email: userData.email,
      fechaRegistro: new Date().toISOString()
    };
    
    setUser(newUser);
    setIsLoggedIn(true);
    // Guardar en localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
    
    return newUser;
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    // Eliminar de localStorage
    localStorage.removeItem('user');
  };

  // Función para actualizar datos del usuario
  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  // Función para validar email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar credenciales de login (simulada)
  const validateLogin = async (email, password) => {
    // Simulación de validación (en una app real sería una llamada al API)
    return new Promise((resolve) => {
      setTimeout(() => {
        // Aquí podrías hacer validaciones más complejas
        if (email && password.length >= 6) {
          resolve({
            success: true,
            user: {
              id: Date.now(),
              nombre: 'Usuario',
              apellido: 'Demo',
              email: email,
              fechaRegistro: new Date().toISOString()
            }
          });
        } else {
          resolve({
            success: false,
            message: 'Credenciales inválidas'
          });
        }
      }, 1000); // Simular delay de red
    });
  };

  const value = {
    // Estado
    user,
    isLoggedIn,
    loading,
    
    // Funciones
    login,
    register,
    logout,
    updateUser,
    validateEmail,
    validateLogin
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
