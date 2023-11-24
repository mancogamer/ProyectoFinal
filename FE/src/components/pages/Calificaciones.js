import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png'
import MenuPerfilDocente from '../moleculas/MenuPerfilDocente';
import InputCalificaciones from '../moleculas/InputCalificaciones';

function Calificaciones() {
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
        <InputCalificaciones />
      </div>
    </div>
  );
}

export default Calificaciones;