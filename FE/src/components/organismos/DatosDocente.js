import React from 'react';
import IconButton from '@mui/material/IconButton';
import segundo_recurso from '../../imagenes/perfil_docente.png'

export default function DatosDocente() {
  
const contenedor = {
    display:'flex',
    paddingTop: '150px',
};

  return (
    <div style={contenedor}>
        <div style={{display:'flex', flexDirection:'column', width:'50%', alignItems:'center'}}>
            <img src={segundo_recurso} style={{width:'400px'}}></img>
            <IconButton>
                <h6 style={{padding:'12px', backgroundColor:'#aaa', color:'black'}}>Rosio Magne Canaviri
           Profesora</h6>
            </IconButton>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <div style={{display:'flex'}}>

                <h6 style={{padding:'12px', textAlign:'center', fontSize:'14px'}}>Direccion: 
Av.Blanco Galindo, entre  
calle Peru y Orbigny <br></br><br></br>
Email:rosio.magne@gmail.com</h6>
 
                
                <h6 style={{padding:'12px', textAlign:'center', fontSize:'14px'}}>Telefono: +591 75984404 <br></br><br></br>Fecha de Nacimiento: 14/03/198</h6>
            </div>
            <div>
                <h6 style={{padding:'12px', textAlign:'center', fontSize:'14px'}}>Maestra de Educacin Infantil  en la Escuela  La Semillita<br></br><br></br>Maestra de Educacin Infantil  en la Escuela  El Globo Rojo</h6>
            </div>
        </div>
    </div>
  );
}