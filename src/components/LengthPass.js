import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function LengthPass(props) {

  let {passLen,setPassLen} = props;

  return <div style={{marginTop: '50px',marginLeft: '220px',display: 'flex'}}>
      <label style={{
        margin: '10px 65px 0 40px'
      }}>Length of Password</label>
     
     <div>
        <TextField
              defaultValue={passLen}
              onChange={(e) => setPassLen(e.target.value)}
              id="password-length"
              name='password-length'
              label="Length"
              type="number"
              InputProps={{ inputProps: { min: 10, max: 20 } }}
              variant="outlined"

              style={{
                width: '10ch'
              }}
            />
     </div>
      
  </div>;
}

