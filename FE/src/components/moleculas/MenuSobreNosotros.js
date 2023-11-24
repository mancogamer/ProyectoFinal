import React from 'react';
import Button from '@mui/material/Button';
import Logo from '../atomos/Logo';
import IconButton from '@mui/material/IconButton';
import img from '../../imagenes/imagen_colegio.jpg';

export default function MenuSobreNostros() {
  
    const contenedor = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'
    };

  return (
    <div style={contenedor}>
        <div>

            <IconButton style={{marginRight:'20px'}}>
                <Logo src={img} alt="Logo del colegio" style={{width:'70px'}} />
            </IconButton>
        </div>
    </div>
  );
}