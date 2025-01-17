import React from 'react';
import { useAuth } from '../../context/AuthContext'; // Ruta actualizada
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;