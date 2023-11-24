import React from 'react';
import img from '../../imagenes/imagen_fondo_registro.png';
import MenuMaterialDidactico from '../moleculas/MenuMaterialDidactico';
import TituloRecursos from '../moleculas/TitulosRecursos';
import PrimerMaterialDidactico from '../organismos/PrimerMateriaDidactico';
import SegundoMaterialDidactico from '../organismos/SegundoMaterialDidactico';

function MaterialDidactico() {
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
        <PrimerMaterialDidactico />
      </div>
      <div>
        <SegundoMaterialDidactico />
      </div>
    </div>
  );
}

export default MaterialDidactico;