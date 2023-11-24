import React from 'react';
import Button from '@mui/material/Button';
import Logo from '../atomos/Logo';
import IconButton from '@mui/material/IconButton';
import img from '../../imagenes/imagen_colegio.jpg';

export default function MenuProyectoRealizado() {
  
    const contenedor = {
        display: 'flex',
        alignItems: 'center',
    };

    const contenedor2 = {
        display: 'flex',
        width: '40%',
        marginRight:'300px',
        justifyContent: 'center'
    };

  return (
    <div style={contenedor}>
        <div style={contenedor2}>
            <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'black', marginLeft:'30px' }}>
                Proyecto Realizado
            </Button>
        </div>
        <div style={{width: '40%', marginLeft: '90px'}}>

            <IconButton style={{marginLeft:'400px'}}>
                <Logo src={img} alt="Logo del colegio" style={{width:'70px'}} />
            </IconButton>
        </div>
    </div>
  );
}