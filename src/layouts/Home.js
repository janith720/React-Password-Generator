import React, { useState } from 'react';
import GenButton from '../components/GenButton';
import GenPass from '../components/GenPass';
import LengthPass from '../components/LengthPass';
import CharactorsTiles from '../layouts/CharactorsTiles'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {numbersChar,upperCaseLetters,lowerCaseLetters,specialCharacters} from '../characters'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Home() {

  const [password,setPassword] = useState('')
  const [passwordLength,setPasswordLength] = useState(16)

  const [uppercase,setUppercase] = useState(false)
  const [lowercase,setLowercase] = useState(false)
  const [numbers,setNumbers] = useState(false)
  const [symbols,setSymbols] = useState(false)

  const [open, setOpen] = useState({
    snackbr: false,
    snaName: 'Copied to Clipboard',
    severitymsg: 'success'
  });

  const handleGenPass = (e) => {

      if(!uppercase && !lowercase && !numbers && !symbols){
        setOpen({snackbr: true, snaName: 'Need to select atleast one option',severitymsg: 'error'})
      }
    

      let characterList = ''

      if(lowercase){
        characterList = characterList + lowerCaseLetters
      }
      if(uppercase){
        characterList = characterList + upperCaseLetters
      }
      if(numbers){
        characterList = characterList + numbersChar
      }
      if(symbols){
        characterList = characterList + specialCharacters
      }

      setPassword(createPassword(characterList))

  }

    const createPassword = (characterList) => {
      let password = ''
      const characterListLen = characterList.length

      for(let i = 0; i < passwordLength; i++){
          const characterIndex = Math.round(Math.random() * characterListLen)
          password = password + characterList.charAt(characterIndex)
      }
      return password
    }


    const copyToClipboard = () => {
      const newTextArea = document.createElement('textarea')
      newTextArea.innerText = password
      document.body.appendChild(newTextArea)
      newTextArea.select('copy')
      document.execCommand('copy')
      newTextArea.remove()
      setOpen({snackbr: true, snaName: 'Copied to Clipboard',severitymsg: 'success'});
    }

    const handleCopyPass = (e) => {
      
      if(password === ''){
          setOpen({snackbr: true, snaName: 'Empty',severitymsg: 'error'})
      }else {
          copyToClipboard()
          
      }
          
    }

    const handleClose = (e,reason) => {
      if (reason === 'clickaway') {
        return;
      }
      
      setOpen({snackbr: false,snaName: open.snaName,
      severitymsg: open.severitymsg})
      
    };

  return <div>
      <h1 style={{
        textAlign: 'center',
        padding: '10px',
        margin: '50px',
      }}>Password Generator</h1>

      <div style={{
        marginTop: '50px',
        background: 'white',
        width: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        padding: '30px',
        borderRadius: '10px',
        
      }}>
        <GenPass pass={password} handleCopyPass={handleCopyPass} />
        <LengthPass passLen={passwordLength} setPassLen={setPasswordLength}/>
        <CharactorsTiles 
            upCase={uppercase} 
            setUpCase={setUppercase}
            lowCase={lowercase}
            setLowCase={setLowercase}
            num={numbers}
            setNum={setNumbers}
            symbols={symbols}
            setSymbols={setSymbols}
            />
        <GenButton handleGenPass={handleGenPass}/>

        <Snackbar open={open.snackbr} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={open.severitymsg} style={{marginBottom: '570px'}}>
          {open.snaName}
        </Alert>
      </Snackbar>

      </div>
      
  </div>;
}

