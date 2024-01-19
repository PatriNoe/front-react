import React, { useState } from 'react';
import { Typography, Paper, InputBase, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import LoginPopup from './pages/landingPages/LoginPopup';
import backgroundImage from './assets/background-blue-with-drawings.png';

const AppContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`, // Asegúrate de tener la ruta correcta
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const HeaderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column', // Apila elementos verticalmente
  alignItems: 'center',
  marginBottom: theme.spacing(2), // Ajusta el margen inferior según tus necesidades
}));

const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper, // Fondo blanco
  padding: theme.spacing(2), // Espaciado interno
  borderRadius: theme.shape.borderRadius, // Bordes redondeados
  boxShadow: theme.shadows[3], // Sombra (opcional)
}));

const SearchInput = styled(InputBase)({
  width: '300px', // Ajusta el ancho según tus necesidades
  marginRight: '16px', // Ajusta el margen derecho según tus necesidades
});

function App() {
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearchClick = () => {
    // Agrega aquí el comportamiento que deseas realizar al hacer clic en SearchIcon
    alert('SearchIcon clickeado!');
    setSearchClicked(true);
  };
  const [loginOpen, setLoginOpen] = useState(false);

  const handleOpenLogin = () => {
    setLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);
  };
  return (
    <AppContainer>
      <HeaderContainer>
        <Typography variant="h4" component="div">
          LearnSphere
        </Typography>
      </HeaderContainer>
      <SearchContainer>
        <SearchInput placeholder="Search..." />
        <IconButton color="primary" onClick={handleSearchClick}>
          <SearchIcon onClick={handleSearchClick} />
        </IconButton>
      </SearchContainer>
      <Button color="inherit" sx={{ ml: 2 }} onClick={handleOpenLogin}>
        Login
      </Button>
      <LoginPopup open={loginOpen} onClose={handleCloseLogin} />
    </AppContainer>
  );
}

export default App;
