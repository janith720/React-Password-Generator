import React from 'react';
import clipboard from '../images/clipboard.png'


export default function GenPass(props) {

  let {pass,handleCopyPass} = props;

  return <div style={{
    padding: '18px',
    background: 'white',
    //margin: '10px',
    width: '350px',
    display: 'flex',
    borderRadius: '20px',
    border: '2px solid green',
    //boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset',
    marginLeft: 'auto',
    marginRight: 'auto'
  }}>
      <p 
      style={{
        marginLeft: '5px',
        fontWeight: '600',
        fontSize: '16px'
      }}
      >{pass}</p>
      <img src={clipboard} alt='clipboard' 
        width={24} 
        style={{cursor: 'pointer',marginLeft: 'auto'}} 
        onClick={handleCopyPass}
        />

      
  </div>;
}
