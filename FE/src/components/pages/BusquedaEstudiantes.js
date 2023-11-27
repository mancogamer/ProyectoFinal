import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png'
import MenuBusquedaEstudiante from '../moleculas/MenuBusquedaEstudiante';
import DatosBusquedaEstudiante from '../organismos/DatosBusquedaEstudiante';

function BusquedaEstudiante() {
  const fondoStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    minHeight: '98vh',
  };


  return (
    <div style={fondoStyle}>
      <div>
        <MenuBusquedaEstudiante />
      </div>
      <div>
        <DatosBusquedaEstudiante />
      </div>
    </div>
  );
}

export default BusquedaEstudiante;