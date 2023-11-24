import React from 'react';
import Button from '@mui/material/Button';
import { Square } from '@mui/icons-material';

export default function InputCalificacionesEstudiante() {
  
const contenedor = {
    display:'flex',
    justifyContent: 'space-around',
    paddingTop: '50px',
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
            <p style={{display:'flex', alignItems:'center'}}>Practicas <Square style={{marginLeft:'100px', color:'rgba(0,0,0,0)'}}></Square><span style={{paddingRight:'10px', backgroundColor:'#7599ff', padding:'10px'}}>12</span></p>
            <p style={{display:'flex', alignItems:'center'}}>Primera Evaluacion <Square style={{marginLeft: '28px', color:'rgba(0,0,0,0)'}}></Square><span style={{paddingRight:'10px', backgroundColor:'#7599ff', padding:'10px'}}>15</span></p>
            <p style={{display:'flex', alignItems:'center'}}>Practicas <Square style={{marginLeft:'100px', color:'rgba(0,0,0,0)'}}></Square><span style={{paddingRight:'10px', backgroundColor:'#7599ff', padding:'10px'}}>20</span></p>
            <p style={{display:'flex', alignItems:'center'}}>Segunda Evaluacion <Square style={{marginLeft:'21px', color:'rgba(0,0,0,0)'}}></Square><span style={{paddingRight:'10px', backgroundColor:'#7599ff', padding:'10px'}}>10</span></p>
            <p style={{display:'flex', alignItems:'center'}}>Practicas <Square style={{marginLeft:'100px', color:'rgba(0,0,0,0)'}}></Square><span style={{paddingRight:'10px', backgroundColor:'#7599ff', padding:'10px'}}>14</span></p>
            <p style={{display:'flex', alignItems:'center'}}>Proyecto Final <Square style={{marginLeft:'64px', color:'rgba(0,0,0,0)'}}></Square><span style={{paddingRight:'10px', backgroundColor:'#7599ff', padding:'10px'}}>15</span></p>
            <p style={{display:'flex', alignItems:'center'}}>Evaluacion Final <Square style={{marginLeft:'54px', color:'rgba(0,0,0,0)'}}></Square><span style={{paddingRight:'10px', backgroundColor:'#7599ff', padding:'10px'}}>20</span></p>
            
        </div>
    </div>
  );
}