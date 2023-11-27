import Logo from '../atomos/Logo';
import IconButton from '@mui/material/IconButton';
import imagen_1 from '../../imagenes/actividad1.png'
import imagen_2 from '../../imagenes/actividad2.png'
import imagen_3 from '../../imagenes/actividad3.png'
import imagen_4 from '../../imagenes/actividad4.png'
import React from 'react';

const Actividades = ({ }) => {
  
  const imgStyles = {
    width: '300px'
  };

  const contenedor = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '100px'
  };

  return (
    <div>
        <div style={contenedor}>
            <IconButton>
                <Logo src={imagen_1} alt="Logo del colegio" style={imgStyles}/>
            </IconButton>
            <IconButton>
                <Logo src={imagen_2} alt="Logo del colegio" style={imgStyles}/>
            </IconButton>
            <IconButton>
                <Logo src={imagen_3} alt="Logo del colegio" style={imgStyles}/>
            </IconButton>
        </div>
        <div style={contenedor}>
            <IconButton>
                <Logo src={imagen_4} alt="Logo del colegio" style={imgStyles}/>
            </IconButton>

        </div>
    </div>
  );
};

export default Actividades;