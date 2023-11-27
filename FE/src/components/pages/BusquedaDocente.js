import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png'
import MenuBusquedaDocente from '../moleculas/MenuBusquedaDocente';
import DatosBusquedaDocente from '../organismos/DatosBusquedaDocente';

function BusquedaDocente() {
  const fondoStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    minHeight: '98vh',
  };


  return (
    <div style={fondoStyle}>
      <div>
        <MenuBusquedaDocente />
      </div>
      <div>
        <DatosBusquedaDocente />
      </div>
    </div>
  );
}

export default BusquedaDocente;