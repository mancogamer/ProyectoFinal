import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png'
import MenuPerfilDocente from '../moleculas/MenuPerfilDocente';
import DatosDocente from '../organismos/DatosDocente';
function PerfilDocente() {
  const fondoStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    minHeight: '98vh',
  };


  return (
    <div style={fondoStyle}>
      <div>
        <MenuPerfilDocente />
      </div>
      <div>
        <DatosDocente />
      </div>
    </div>
  );
}

export default PerfilDocente;