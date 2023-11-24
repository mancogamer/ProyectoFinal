import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png'
import MenuPerfilEstudiante from '../moleculas/MenuPerfilEstudiante';
import DatosEstudiante from '../organismos/DatosEstudiante';
function PerfilEstudiante() {
  const fondoStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    minHeight: '98vh',
  };


  return (
    <div style={fondoStyle}>
      <div>
        <MenuPerfilEstudiante />
      </div>
      <div>
        <DatosEstudiante />
      </div>
    </div>
  );
}

export default PerfilEstudiante;