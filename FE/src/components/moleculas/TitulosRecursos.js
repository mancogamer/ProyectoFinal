import React from 'react';

export default function TituloRecursos() {
  
    const contenedor = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '100px'
    };

    const contenedor2 = {
        display: 'flex',
        width: '40%',
        justifyContent: 'center'
    };

  return (
    <div style={contenedor}>
        <div style={contenedor2}>
            <h6 style={{padding:'12px', backgroundColor:'#aaa', fontSize:'15px'}}>Presentaciones</h6>
        </div>
        <div style={{width: '10%', marginLeft: '380px', textAlign:'center', fontSize:'20px'}}>
            <h6 style={{padding:'12px', backgroundColor:'#aaa'}}>Enlaces</h6>
        </div>
    </div>
  );
}