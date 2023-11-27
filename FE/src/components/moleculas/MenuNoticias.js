import React from 'react';
import Button from '@mui/material/Button';
import Logo from '../atomos/Logo';
import IconButton from '@mui/material/IconButton';
import imagen_logo from '../../imagenes/imagen_colegio.jpg'

export default function MenuNoticias() {
  
    const contenedor = {
        display: 'flex',
        alignItems: 'center',
    };

    const contenedor2 = {
        display: 'flex',
        width: '700%',
        justifyContent: 'center'
    };

  return (
    <div style={contenedor}>
        <div style={contenedor2}>
            <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'black', marginLeft:'30px' }}>
                Noticias y Eventos
            </Button>
        </div>
        <div style={{width: '30%'}}>
            <IconButton>
                <Logo src={imagen_logo} alt="Logo del colegio" style={{width:'90px'}} />
            </IconButton>
        </div>
    </div>
  );
}