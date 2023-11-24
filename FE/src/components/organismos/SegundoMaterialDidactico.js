import React from 'react';
import Logo from '../atomos/Logo';
import IconButton from '@mui/material/IconButton';
import segundo_didactico from '../../imagenes/segundo_didactico.png'

export default function SegundoMaterialDidactico() {
  
    const contenedor = {
        display: 'flex',
        alignItems: 'center',
    };

    const contenedor2 = {
        display: 'flex',
        width: '40%',
        justifyContent: 'center'
    };

  return (
    <div style={contenedor}>
        <div style={contenedor2}>
            <IconButton>
                <Logo src={segundo_didactico} alt="Logo del colegio" style={{width:'300px'}} />
            </IconButton>
        </div>
        <div style={{width: '30%', marginLeft: '250px', textAlign:'center', fontSize:'20px'}}>
            <IconButton>
            <h6 style={{padding:'12px'}}>https://weeblebooks.com/es/cuentos-y-libros-infantiles
-de-6-a-9-anos/</h6>
            </IconButton>
        </div>
    </div>
  );
}