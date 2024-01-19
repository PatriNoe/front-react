import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para gestionar enlaces

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación aquí
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>

      <div>
        <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
      </div>
      <div>
        <Link to="/register">Registrarse</Link>
      </div>
    </div>
  );
};

export default Login;