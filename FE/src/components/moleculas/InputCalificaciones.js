import React from 'react';
import Button from '@mui/material/Button';
import { Square } from '@mui/icons-material';

export default function InputCalificaciones() {
  
const contenedor = {
    display:'flex',
    justifyContent: 'space-around',
    paddingTop: '150px',

};

const contSpan = {
    width: '100px',
    backgroundColor: 'red'
}

  return (
    <div style={contenedor}>
        <div style={{display:'flex', alignItems:'center'}}>
            <form style={{display:'flex', flexDirection:'column'}}>
                <input type='text' placeholder='User' style={{padding:'15px', marginBottom:'10px', width:'300px', backgroundColor:'#7599ff', borderStyle:'none'}}></input>
                <input type='password' placeholder='Password' style={{padding:'15px', marginBottom:'10px', backgroundColor:'#7599ff', borderStyle:'none'}}></input>
                <Button style={{padding:'15px', backgroundColor:'#75c0ee', color:'black'}}>continuar</Button>
            </form>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
            <Button style={{backgroundColor: '#75c0ee', marginBottom:'20px', color:'black'}}>Base de Datos </Button>
            <p style={{display:'flex', alignItems:'center'}}>Practicas <Square style={{marginLeft:'120px', color:'#7599ff'}}></Square> </p>
            <p style={{display:'flex', alignItems:'center'}}>Primera Evaluacion <Square style={{marginLeft: '48px', color:'#7599ff'}}></Square></p>
            <p style={{display:'flex', alignItems:'center'}}>Practicas <Square style={{marginLeft:'120px', color:'#7599ff'}}></Square></p>
            <p style={{display:'flex', alignItems:'center'}}>Segunda Evaluacion <Square style={{marginLeft:'41px', color:'#7599ff'}}></Square></p>
            <p style={{display:'flex', alignItems:'center'}}>Practicas <Square style={{marginLeft:'120px', color:'#7599ff'}}></Square></p>
            <p style={{display:'flex', alignItems:'center'}}>Proyecto Final <Square style={{marginLeft:'84px', color:'#7599ff'}}></Square></p>
            <p style={{display:'flex', alignItems:'center'}}>Evaluacion Final <Square style={{marginLeft:'74px', color:'#7599ff'}}></Square></p>
            
        </div>
    </div>
  );
}