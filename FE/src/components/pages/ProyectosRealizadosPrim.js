import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png'
import MenuProyectoRealizado from '../moleculas/MenuProyectoRealizado';
import DatosProyectosPrim from '../organismos/DatosProyectosPrim';
function ProyectosRealizadosPrim() {
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
        <DatosProyectosPrim />
      </div>
    </div>
  );
}

export default ProyectosRealizadosPrim;