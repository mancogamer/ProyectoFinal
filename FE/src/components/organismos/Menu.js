import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../atomos/Logo';
import imagen_logo from '../../imagenes/imagen_colegio.jpg';

export default function Menu() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  const logoStyle = {
    width: '100px',
    height: 'auto',
  
  };

  const iconStyle = {
    fontSize: '2.5em',
    color: '#75c0ee'
  };

  const iconButttonStyle = {
    marginLeft: '30px',
  };

  const bienvenidosStyle = {
    width: '70%', 
    fontSize: '5em',
    textAlign: 'center',
    margin: 0,
    fontFamily: 'Verdana',
    color: '#666'
  };

  return (
    <div style={containerStyle}>
      <IconButton>
        <Logo src={imagen_logo} alt="Logo del colegio" style={logoStyle} />
      </IconButton>
      <IconButton style={iconButttonStyle}>
        <InstagramIcon style={iconStyle} />
      </IconButton>
      <IconButton style={iconButttonStyle}>
        <YouTubeIcon style={iconStyle} />
      </IconButton>
      <p style={bienvenidosStyle}>BIENVENIDOS</p>
      <IconButton>
        <FacebookIcon style={iconStyle} />
      </IconButton>
      <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'black', marginRight:'10px', marginLeft:'30px'}}>
        Iniciar Sesion
      </Button>
    </div>
  );
}