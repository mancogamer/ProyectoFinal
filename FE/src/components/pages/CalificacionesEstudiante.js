import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png'
import MenuPerfilEstudiante from '../moleculas/MenuPerfilEstudiante';
import InputCalificacionesEstudiante from '../moleculas/InputCalificacionesEstudiante';
function CalificacionesEstudiante() {
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
        <InputCalificacionesEstudiante />
      </div>
    </div>
  );
}

export default CalificacionesEstudiante;