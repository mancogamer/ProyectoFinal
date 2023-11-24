import React from 'react';
import Button from '@mui/material/Button';
import Logo from '../atomos/Logo';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import imagen_logo from '../../imagenes/imagen_colegio.jpg';

const Formulario = () => {

  const containerStyle = {
    display: 'flex',
    backgroundColor: 'white',
    padding: '5px 20px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
  };

  const buttonStyle = {
    backgroundColor: '#ddd',
    borderStyle: 'none',
    color: 'black',
    padding: '10px',
    marginTop: '10px',
    width: '300px',
  };

  const buttonStyle1 = {
    backgroundColor: 'tomato',
    borderStyle: 'none',
    color: 'black',
    padding: '10px',
    marginTop: '10px',
    width: '300px',
  };

  const buttonStyle2 = {
    backgroundColor: '#75c0ee',
    borderStyle: 'none',
    color: 'black',
    padding: '10px',
    marginTop: '10px',
    width: '300px',
  };

  const checkboxContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Cambiado a columna
    alignItems: 'center', // Alineados al centro
    marginTop: '10px',
  };

  const checkboxContainerStyle1 = {
    display: 'flex',
    flexDirection: 'row', // Cambiado a columna
    alignItems: 'center', // Alineados al centro
    marginTop: '10px',
  };

  const logoStyle = {
    width: '80px',
    cursor: 'pointer', // Agrega un estilo para indicar que es clickeable
  };


  return (
    <form style={containerStyle}>
      <IconButton>
        <Logo src={imagen_logo} alt="Logo del colegio" style={logoStyle} />
      </IconButton>
  
      <p>
        Bienvenidos
      </p>
      <input type="email" placeholder="Email" style={buttonStyle} />
      <br />
      <input type="password" placeholder="Password" style={buttonStyle} />
      <div style={checkboxContainerStyle}>
        <div style={checkboxContainerStyle1}>
          <p>Profesor</p>
          <Checkbox name="opciones" />
          <p>Alumno</p>
          <Checkbox name="opciones" />
        </div>
        <div style={checkboxContainerStyle1}>
          <p>Administrador</p>
          <Checkbox name="opciones" />
        </div>
      </div>
      <br />
      <Button style={buttonStyle1}>
        Continue
      </Button>
      <Button style={buttonStyle2}>
        Continue with Google
      </Button>
    </form>
  );
};

export default Formulario;