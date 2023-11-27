import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png';
import MenuRecursosEducativos from '../moleculas/MenuRecursosEducativos';
import TituloRecursos from '../moleculas/TitulosRecursos';
import PrimerRecurso from '../moleculas/PrimerRecurso';
import SegundoRecurso from '../moleculas/SegundoRecurso';

function RecursosEducativos() {
  const fondoStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={fondoStyle}>
      <div style={{paddingTop: '10px'}}>
        <MenuRecursosEducativos />
      </div>
      <div>
        <TituloRecursos />
      </div>
      <div>
        <PrimerRecurso />
      </div>
      <div>
        <SegundoRecurso />
      </div>
    </div>
  );
}

export default RecursosEducativos;