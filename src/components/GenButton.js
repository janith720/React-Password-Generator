import React from 'react';
import { makeStyles,createTheme,ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      //margin: theme.spacing(1),
      width: 350,
      padding: 10,
      color: 'white',
      //marginLeft: 600,
      marginTop: 30
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function GenButton(props) {

  let {handleGenPass} = props;

  const classes = useStyles();

  return <div className={classes.root}>
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={handleGenPass}>
        Generate
      </Button>
    </ThemeProvider>
  </div>;
}
