//import { Grid } from '@material-ui/core';
import React from 'react';
import TilesAndSwitch from '../components/TilesAndSwitch';


/* const tileInfo = [
  {
    title: 'Uppercase Letters',
    switchName: 'uppercase-letter',
    useStateName: 'uppercase',
    setUseStateName: 'setUppercase'
  },
  {
    title: 'Lowercase Letters',
    switchName: 'lowercase-letter',
    useStateName: 'lowercase',
    setUseStateName: 'setLowercase'
  },
  {
    title: 'Numbers',
    switchName: 'numbers',
    useStateName: 'numbers',
    setUseStateName: 'setNumbers'
  },
  {
    title: 'Symbols',
    switchName: 'Symbols',
    useStateName: 'symbols',
    setUseStateName: 'setSymbols'
  },
] */
//const index = tileInfo.findIndex();
//console.log(index);
export default function CharactorsTiles(props) {

  let {upCase,setUpCase,lowCase,setLowCase,num,setNum,symbols,setSymbols} = props;

  return <div style={{marginLeft: '100px',marginTop: '30px'}}>
      <TilesAndSwitch 
      upCase={upCase} 
      setUpCase={setUpCase}
      lowCase={lowCase}
      setLowCase={setLowCase}
      num={num}
      setNum={setNum}
      symbols={symbols}
      setSymbols={setSymbols}
      />
  </div>;
}


