import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Bienvenido, {user?.name}</h1>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;