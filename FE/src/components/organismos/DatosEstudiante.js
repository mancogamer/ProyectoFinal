import React from 'react';
import IconButton from '@mui/material/IconButton';
import segundo_recurso from '../../imagenes/perfil_estudiante.png'

export default function DatosEstudiante() {
  
const contenedor = {
    display:'flex',
    paddingTop: '150px',
};

  return (
    <div style={contenedor}>
        <div style={{display:'flex', flexDirection:'column', width:'50%', alignItems:'center'}}>
            <img src={segundo_recurso} style={{width:'400px'}}></img>
            <IconButton>
                <h6 style={{padding:'12px', backgroundColor:'#aaa', color:'black'}}>Epril   Mendez Marca
          Estudiante</h6>
            </IconButton>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <div style={{display:'flex'}}>

                <h6 style={{padding:'12px', textAlign:'center', fontSize:'15px'}}>Direccion:
Av. kenedi entre canada 
y venezuela <br></br><br></br>
Email: epril.marca@gmail.com</h6>
 
                
                <h6 style={{padding:'12px', textAlign:'center', fontSize:'15px'}}>Telefono: +591 75476542 <br></br><br></br>Fecha de Nacimiento: 21/09/2003</h6>
            </div>

        </div>
    </div>
  );
}