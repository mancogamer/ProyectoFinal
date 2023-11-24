import React from 'react';
import Logo from '../atomos/Logo';
import IconButton from '@mui/material/IconButton';
import tercer_recurso from '../../imagenes/tercer_recurso.png'

export default function PrimRecEdPrimaria() {
  
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
                <Logo src={tercer_recurso} alt="Logo del colegio" style={{width:'300px'}} />
            </IconButton>
        </div>
        <div style={{width: '30%', marginLeft: '250px', textAlign:'center', fontSize:'20px'}}>
            <IconButton>
            <h6 style={{padding:'12px'}}>https://slideplayer.es/slide/3445134/</h6>
            </IconButton>
        </div>
    </div>
  );
}