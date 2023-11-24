import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png'
import MenuSec from '../moleculas/MenuSec';
import ImagenFondoSec from '../moleculas/ImagenFondoSec';
import PiePaginaSec from '../organismos/PiePaginaSec';

function PaginaSec() {
  const fondoStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    minHeight: '98vh',
  };

  const contenedor = {
    marginTop:'30px',
    marginLeft:'30px',
    marginRight:'30px',
  };

  return (
    <div style={fondoStyle}>
      <div>
        <MenuSec />
      </div>
      <div style={contenedor}>
        <ImagenFondoSec />
      </div>
      <div>
        <PiePaginaSec />
      </div>
    </div>
  );
}

export default PaginaSec;