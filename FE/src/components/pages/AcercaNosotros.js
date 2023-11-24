import React from 'react';
import MenuSobreNostros from '../moleculas/MenuSobreNosotros';
import img from '../../imagenes/nosotros.png'

function AcercaNosotros() {
  const fondoStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    minHeight: '98vh',
  };


  return (
    <div style={fondoStyle}>
        <div>
            <MenuSobreNostros />
        </div>
    </div>
  );
}

export default AcercaNosotros;