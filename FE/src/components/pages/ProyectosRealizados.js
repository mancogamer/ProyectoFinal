import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png'
import MenuProyectoRealizado from '../moleculas/MenuProyectoRealizado';
import DatosProyectos from '../organismos/DatosProyectos';
function ProyectosRealizados() {
  const fondoStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    minHeight: '98vh',
  };


  return (
    <div style={fondoStyle}>
      <div>
        <MenuProyectoRealizado />
      </div>
      <div>
        <DatosProyectos />
      </div>
    </div>
  );
}

export default ProyectosRealizados;