// Utilidades para autenticación

// Validar formato de email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validar fortaleza de contraseña
export const validatePassword = (password) => {
  const errors = [];
  
  if (password.length < 6) {
    errors.push('La contraseña debe tener al menos 6 caracteres');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('La contraseña debe contener al menos una letra mayúscula');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('La contraseña debe contener al menos una letra minúscula');
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('La contraseña debe contener al menos un número');
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
};

// Generar nombre de usuario a partir del nombre y apellido
export const generateUsername = (nombre, apellido) => {
  const cleanNombre = nombre.toLowerCase().replace(/[^a-z]/g, '');
  const cleanApellido = apellido.toLowerCase().replace(/[^a-z]/g, '');
  const randomNum = Math.floor(Math.random() * 1000);
  
  return `${cleanNombre}${cleanApellido}${randomNum}`;
};

// Formatear nombre completo
export const formatFullName = (user) => {
  if (!user) return '';
  return `${user.nombre} ${user.apellido}`.trim();
};

// Obtener iniciales del usuario
export const getUserInitials = (user) => {
  if (!user) return '??';
  const nombreInitial = user.nombre ? user.nombre.charAt(0).toUpperCase() : '';
  const apellidoInitial = user.apellido ? user.apellido.charAt(0).toUpperCase() : '';
  return `${nombreInitial}${apellidoInitial}`;
};

// Verificar si el usuario ha completado su perfil
export const isProfileComplete = (user) => {
  if (!user) return false;
  
  const requiredFields = ['nombre', 'apellido', 'email'];
  return requiredFields.every(field => user[field] && user[field].trim() !== '');
};

// Configuración de roles de usuario (para futuras implementaciones)
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
};

// Verificar permisos del usuario
export const hasPermission = (user, permission) => {
  if (!user || !user.role) return false;
  
  const permissions = {
    [USER_ROLES.ADMIN]: ['read', 'write', 'delete', 'manage_users'],
    [USER_ROLES.MODERATOR]: ['read', 'write', 'moderate'],
    [USER_ROLES.USER]: ['read']
  };
  
  return permissions[user.role]?.includes(permission) || false;
};

// Constantes para localStorage
export const STORAGE_KEYS = {
  USER: 'user',
  TOKEN: 'authToken',
  PREFERENCES: 'userPreferences'
};

// Limpiar datos del usuario del localStorage
export const clearUserData = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};
