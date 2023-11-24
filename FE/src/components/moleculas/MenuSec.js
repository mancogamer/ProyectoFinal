import React from 'react';
import Button from '@mui/material/Button';
import Logo from '../atomos/Logo';
import IconButton from '@mui/material/IconButton';
import img from '../../imagenes/imagen_colegio.jpg';

export default function MenuSec() {
  const contenedor = {
    paddingTop: '10px',
  };

  return (
    <div style={contenedor}>
      <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'black', marginLeft:'30px',  }}>
        Informacion Escolar
      </Button>
      <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'black', marginLeft:'750px' }}>
        Noticias y Eventos
      </Button>
      <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'black', marginLeft:'7px' }}>
        Recursos Educativos
      </Button>
      <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'black', marginLeft:'7px' }}>
        Perfil Docente
      </Button>
      <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'black', marginLeft:'7px' }}>
        Perfil Estudiante
      </Button>
      <IconButton>
          <Logo src={img} alt="Logo del colegio" style={{width:'70px'}} />
      </IconButton>

    </div>
  );
}