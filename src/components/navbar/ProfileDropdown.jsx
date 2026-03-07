import React, { useState, useRef, useEffect } from 'react';
import { FiUser, FiLogOut, FiSettings } from 'react-icons/fi';
import './ProfileDropdown.css';
import { useUser } from '../../context/useUser.js';

const ProfileDropdown = () => {
  const { user, isLoggedIn, login, register, logout, validateEmail, validateLogin } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef(null);

  // Estado para formularios
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [registerForm, setRegisterForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // La validación de email ahora viene del contexto

  // Validación de formulario de login
  const validateLoginForm = () => {
    const newErrors = {};
    
    if (!loginForm.email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!validateEmail(loginForm.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
    }
    
    if (!loginForm.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (loginForm.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validación de formulario de registro
  const validateRegisterForm = () => {
    const newErrors = {};
    
    if (!registerForm.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!registerForm.apellido.trim()) {
      newErrors.apellido = 'El apellido es requerido';
    }
    
    if (!registerForm.email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!validateEmail(registerForm.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
    }
    
    if (!registerForm.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (registerForm.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    if (registerForm.password !== registerForm.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      setIsLoading(true);
      try {
        const result = await validateLogin(loginForm.email, loginForm.password);
        if (result.success) {
          login(result.user);
          setShowLoginModal(false);
          setLoginForm({ email: '', password: '' });
          setErrors({});
        } else {
          setErrors({ general: result.message || 'Error de autenticación' });
        }
      } catch {
        setErrors({ general: 'Error de conexión. Intente nuevamente.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Manejar registro
  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateRegisterForm()) {
      setIsLoading(true);
      try {
        const newUser = register({
          nombre: registerForm.nombre,
          apellido: registerForm.apellido,
          email: registerForm.email,
          password: registerForm.password
        });
        
        if (newUser) {
          setShowRegisterModal(false);
          setRegisterForm({
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
          setErrors({});
        }
      } catch {
        setErrors({ general: 'Error al registrar usuario. Intente nuevamente.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Manejar logout
  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  // Cambios en formularios
  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
    // Limpiar error específico
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value
    });
    // Limpiar error específico
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  // Cerrar modales
  const closeModals = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setErrors({});
  };

  return (
    <div className="profile-container" ref={dropdownRef}>
      <div 
        className="profile-icon" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiUser />
      </div>

      {isOpen && (
        <div className="profile-dropdown">
          {isLoggedIn ? (
            // Usuario logueado
            <div className="user-menu">
              <div className="user-info">
                <h4>{user?.nombre} {user?.apellido}</h4>
                <p>{user?.email}</p>
              </div>
              <hr />
              <button className="menu-item">
                <FiSettings />
                Configuración
              </button>
              <button className="menu-item logout" onClick={handleLogout}>
                <FiLogOut />
                Cerrar Sesión
              </button>
            </div>
          ) : (
            // Usuario no logueado
            <div className="auth-menu">
              <button 
                className="auth-button login-btn"
                onClick={() => {
                  setShowLoginModal(true);
                  setIsOpen(false);
                }}
              >
                Iniciar Sesión
              </button>
              <button 
                className="auth-button register-btn"
                onClick={() => {
                  setShowRegisterModal(true);
                  setIsOpen(false);
                }}
              >
                Registrarse
              </button>
            </div>
          )}
        </div>
      )}

      {/* Modal de Login */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Iniciar Sesión</h2>
              <button className="close-btn" onClick={closeModals}>×</button>
            </div>
            <form onSubmit={handleLogin}>
              {errors.general && (
                <div className="error-message-general">
                  {errors.general}
                </div>
              )}
              <div className="form-group">
                <label htmlFor="login-email">Correo Electrónico</label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  className={errors.email ? 'error' : ''}
                  disabled={isLoading}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Contraseña</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  className={errors.password ? 'error' : ''}
                  disabled={isLoading}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
              </button>
              <p className="switch-auth">
                ¿No tienes cuenta? 
                <button 
                  type="button" 
                  className="link-btn"
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowRegisterModal(true);
                  }}
                >
                  Regístrate aquí
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Registro */}
      {showRegisterModal && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Registrarse</h2>
              <button className="close-btn" onClick={closeModals}>×</button>
            </div>
            <form onSubmit={handleRegister}>
              {errors.general && (
                <div className="error-message-general">
                  {errors.general}
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="register-nombre">Nombre</label>
                  <input
                    type="text"
                    id="register-nombre"
                    name="nombre"
                    value={registerForm.nombre}
                    onChange={handleRegisterChange}
                    className={errors.nombre ? 'error' : ''}
                    disabled={isLoading}
                  />
                  {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="register-apellido">Apellido</label>
                  <input
                    type="text"
                    id="register-apellido"
                    name="apellido"
                    value={registerForm.apellido}
                    onChange={handleRegisterChange}
                    className={errors.apellido ? 'error' : ''}
                    disabled={isLoading}
                  />
                  {errors.apellido && <span className="error-message">{errors.apellido}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="register-email">Correo Electrónico</label>
                <input
                  type="email"
                  id="register-email"
                  name="email"
                  value={registerForm.email}
                  onChange={handleRegisterChange}
                  className={errors.email ? 'error' : ''}
                  disabled={isLoading}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Contraseña</label>
                <input
                  type="password"
                  id="register-password"
                  name="password"
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  className={errors.password ? 'error' : ''}
                  disabled={isLoading}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="register-confirm-password">Confirmar Contraseña</label>
                <input
                  type="password"
                  id="register-confirm-password"
                  name="confirmPassword"
                  value={registerForm.confirmPassword}
                  onChange={handleRegisterChange}
                  className={errors.confirmPassword ? 'error' : ''}
                  disabled={isLoading}
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Registrando...' : 'Registrarse'}
              </button>
              <p className="switch-auth">
                ¿Ya tienes cuenta? 
                <button 
                  type="button" 
                  className="link-btn"
                  onClick={() => {
                    setShowRegisterModal(false);
                    setShowLoginModal(true);
                  }}
                >
                  Inicia sesión aquí
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

