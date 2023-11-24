import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../atomos/Logo';
import img_primaria from '../../imagenes/primaria.png'
import img_secundaria from '../../imagenes/secundaria.png'

const PiePaginaSec = ({ }) => {
  const footerStyle = {
    color: 'white',
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  };

  const logoStyle = {
    width: '68px'
  };

  return (
    <div style={footerStyle}>
      <IconButton>
        <Logo src={img_primaria} alt="Logo primaria" style={logoStyle} />
      </IconButton>
      <Button style={{ textAlign:'center', backgroundColor:'#999', color:'white', marginLeft:'10px' }}>
        Primaria
      </Button>
      <IconButton>
        <Logo src={img_secundaria} alt="Logo primaria" style={logoStyle} />
      </IconButton>
      <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'white', marginLeft:'100px' }}>
        Secundaria
      </Button>
    </div>
  );
};

export default PiePaginaSec;