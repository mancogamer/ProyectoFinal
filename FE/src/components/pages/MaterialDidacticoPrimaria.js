import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png';
import MenuMaterialDidactico from '../moleculas/MenuMaterialDidactico';
import TituloRecursos from '../moleculas/TitulosRecursos';
import PrimMatDicSecun from '../organismos/PrimMatDicSecun';
import SegMatDicSecun from '../organismos/SegMatDicSecun';

function MaterialDidacticoPrimaria() {
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
        <MenuMaterialDidactico />
      </div>
      <div>
        <TituloRecursos />
      </div>
      <div>
        <PrimMatDicSecun />
      </div>
      <div>
        <SegMatDicSecun />
      </div>
    </div>
  );
}

export default MaterialDidacticoPrimaria;