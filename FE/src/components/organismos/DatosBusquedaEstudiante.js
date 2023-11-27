import React from 'react';
import { Button } from '@mui/material';

export default function DatosBusquedaEstudiante() {

  const StyleButton = {
    width:'300px',
    backgroundColor: '#75c0ee',
    padding:'10px',
    marginTop:' 10px',
    color:'black'
  };

  return (
    <div style={{width:'100%', display:'flex', height:'80vh', alignItems:'center', justifyContent:'space-evenly'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
            <Button style={StyleButton}>Nivel Educativo</Button>
            <Button style={StyleButton}>Categoria/Area del proyecto</Button>
            <Button style={StyleButton}>Premio/Reconocimiento</Button>
            <Button style={StyleButton}>Año</Button>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Button style={StyleButton}>Estado</Button>
            <Button style={StyleButton}>Palabras Claves</Button>
            <Button style={{width:'100px',
    backgroundColor: '#75c0ee',
    padding:'10px',
    marginTop:' 40px',
    color:'white'}}>Buscar</Button>

        </div>
    </div>
  );
}