import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const userData = { name: names, email: emails, password: passwords };
    console.log( "name: " + name);
    console.log("email: " + email);
    console.log("password: " + password)
    try {
      const response = await axios.post(
        'https://9fq9odgpke.execute-api.sa-east-1.amazonaws.com/preProd/register',
        {body: {name, email, password}},
        {headers: {
          'Content-Type': 'application/json',
        }}
      );
      console.log('Usuario registrado con ID:', response.data.userId);
      navigate('/login');
    } catch (error) {
      console.error('Error al registrarse:', error.response?.data?.error || error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>.
      </p>
    </div>
  );
};

export default Register;