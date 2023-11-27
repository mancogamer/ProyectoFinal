import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png';
import MenuRecursosEducativos from '../moleculas/MenuRecursosEducativos';
import TituloRecursos from '../moleculas/TitulosRecursos';
import PrimRecEdPrimaria from '../organismos/PrimRecEdPrimaria';
import SegRecEdPrimaria from '../organismos/SegRecEdPrimaria';

function RecursosEducativosPrimaria() {
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
        <PrimRecEdPrimaria />
      </div>
      <div>
        <SegRecEdPrimaria />
      </div>
    </div>
  );
}

export default RecursosEducativosPrimaria;