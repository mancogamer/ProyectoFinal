import React from 'react';
import fondo from '../../imagenes/fondo.png'

const ImagenFondo = ({ }) => {
  const pantallaCompletaStyle = {
    height: '570px', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
 
  };

  const imagenStyle = {
    width: '100%',
    margin: '0 10px',
    height: '100%',
  };

  return (
    <div style={pantallaCompletaStyle}>
      <img src={fondo} alt="Imagen de pantalla completa" style={imagenStyle} />
    </div>
  );
};

export default ImagenFondo;