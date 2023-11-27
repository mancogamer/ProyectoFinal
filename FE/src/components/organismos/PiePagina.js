import React from 'react';
import Button from '@mui/material/Button';

const PiePagina = ({ }) => {
  const footerStyle = {
    color: 'white',
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    width: '100%',
  };

  return (
    <div style={footerStyle}>
      <Button style={{ textAlign:'center', backgroundColor:'#75c0ee', color:'white', marginLeft:'10px' }}>
        Contactanos
      </Button>
      <Button style={{ textAlign:'center', backgroundColor:'tomato', color:'white', marginLeft:'100px' }}>
        +591 78912921 - 67513515
      </Button>
    </div>
  );
};

export default PiePagina;