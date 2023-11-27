import React from 'react';
import fondo from '../../imagenes/imagen_fondo_sec.png'

const ImagenFondoSec = ({ }) => {
  const pantallaCompletaStyle = {
    height: '700px', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
 
  };

  const imagenStyle = {
    width: '100%',
    marginTop: '10px',
    height: '100%',
  };

  return (
    <div style={pantallaCompletaStyle}>
      <img src={fondo} alt="Imagen de pantalla completa" style={imagenStyle} />
    </div>
  );
};

export default ImagenFondoSec;