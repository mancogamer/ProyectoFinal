import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png';
import Actividades from '../organismos/Actividades';
import MenuNoticias from '../moleculas/MenuNoticias';

function NoticiasEventos() {
  const fondoStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={fondoStyle}>
      <div>
        <MenuNoticias />
      </div>
      <div>
        <Actividades />
      </div>
    </div>
  );
}

export default NoticiasEventos;