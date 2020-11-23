import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField, Button} from '@material-ui/core';
import BarChart from './barChart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    '& > *': {
      // margin: theme.spacing(1),
      // // width: theme.spacing(20),
      // height: theme.spacing(6),
      // backgroundColor: 'blue'
    },
  },

  paper: {
    width: 600,
    height: 350,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  },

  heading: {
    paddingTop: 25
  },

  input: {
    width: '98%',
    paddingBottom: 15
  },

  loginform: {
    display: 'inline'
  },

  barchart: {
    width: 600,
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  },

  footer: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 10
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <section className={classes.loginform}>               
        <Paper elevation={3} className={classes.paper}>

        <NavBar />

          <h1 className={classes.heading}>Login Form</h1>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField label="Enter Your Email" variant="outlined" className={classes.input}/>

            <TextField label="Enter Your Password" variant="outlined" className={classes.input}/>

            <Button variant="contained" color="primary" className={classes.input}>
              Login
            </Button>
          </form>
        </Paper>
      </section>

      <hr />

      <section className={classes.barchart}>
        <BarChart />
      </section>

      <hr />

      <section>
        <footer className={classes.footer}>Designed and Developed by <a href="https://upshotfirm.com" target="_blank" rel="noreferrer" className={classes.footer}>Wasif Ahmed</a>.</footer>
      </section>
    </div>
  );
}

export default App;
