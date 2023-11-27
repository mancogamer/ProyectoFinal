import React from 'react';
import Logo from '../atomos/Logo';
import IconButton from '@mui/material/IconButton';
import primer_didactico from '../../imagenes/primer_didactico.png'

export default function PrimerMaterialDidactico() {
  
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
                <Logo src={primer_didactico} alt="Logo del colegio" style={{width:'300px'}} />
            </IconButton>
        </div>
        <div style={{width: '30%', marginLeft: '250px', textAlign:'center', fontSize:'20px'}}>
            <IconButton>
            <h6 style={{padding:'12px'}}>https://elestudiantedigital.com/libros-en-pdf-
para-ninos/</h6>
            </IconButton>
        </div>
    </div>
  );
}