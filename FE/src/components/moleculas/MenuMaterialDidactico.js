import React from 'react';
import Button from '@mui/material/Button';
import Logo from '../atomos/Logo';
import IconButton from '@mui/material/IconButton';
import img from '../../imagenes/imagen_colegio.jpg';

export default function MenuMaterialDidactico() {
  
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
                Material Didactico
            </Button>
        </div>
        <div style={{width: '40%', marginLeft: '90px'}}>
            <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'black', marginLeft:'30px' }}>
                Primaria
            </Button>

            <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'black', marginLeft:'30px' }}>
                Secundaria
            </Button>

            <IconButton style={{marginLeft:'80px'}}>
                <Logo src={img} alt="Logo del colegio" style={{width:'70px'}} />
            </IconButton>
        </div>
    </div>
  );
}