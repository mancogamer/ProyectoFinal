import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png';
import Formulario from '../moleculas/Formulario';

function Registro() {
  const fondoStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={fondoStyle}>
      <div>
        <Formulario />
      </div>
    </div>
  );
}

export default Registro;