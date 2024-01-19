// LoginPopup.js

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

const LoginPopup = ({ open, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación aquí
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
    // Cerrar el componente emergente después de la autenticación
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Iniciar Sesión</DialogTitle>
      <DialogContent>
        <TextField
          label="Usuario"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Iniciar Sesión
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPopup;