import React from 'react';
import IconButton from '@mui/material/IconButton';
import imagen1 from '../../imagenes/img_proyecto1.png'
import imagen2 from '../../imagenes/img_proyecto2.png'
import imagen3 from '../../imagenes/img_proyecto3.png'

export default function DatosProyectos() {
  
const contenedor = {
    display:'flex',
    paddingTop: '150px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
};

  return (
    <div style={contenedor}>
        <div>
            <IconButton>
                <img src={imagen1} style={{width:'400px', padding:'20px'}}></img>
            </IconButton>

            <IconButton>
                <img src={imagen2} style={{width:'400px', padding:'20px'}}></img>
            </IconButton>

            <IconButton>
                <img src={imagen3} style={{width:'400px', padding:'20px'}}></img>
            </IconButton>
        </div>
        <div>
            <IconButton>
                <h6 style={{padding:'12px', backgroundColor:'#75c0ee', color:'black'}}>Añadir Proyecto</h6>
            </IconButton>
        </div>
    </div>
  );
}