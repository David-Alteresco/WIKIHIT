/* import React, { useState } from "react";
import env from "react-dotenv";
import Axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        Axios.post(`${env.API_URL}api/Register`,{
            username: username, 
            password: password
        }).then( () => {
            alert('Success! Register');
        });
    };

    return (
    <div>
        <h1>Register</h1>
        <div className="form">
            <label>Email</label>
            <TextField type="email" name="email" onChange={(e) => setUsername(e.target.value)}>  
            </TextField>
            <label>password</label>
            <TextField type="password" name="password" onChange={(e) => setPassword(e.target.value)}>
            </TextField>
            <Button type="submit" variant="contained" color="primary" onClick={submit}>
            Login
            </Button>
        </div>    
    </div>
)}; */

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import env from "react-dotenv";
import Axios from "axios";
import { signUp } from '../stores';
import { view } from 'react-easy-state';
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default view(() => {
  const classes = useStyles();

  const submit = () => {
        Axios.post(`${process.env.REACT_APP_API_KEY}api/Register`,{
          username: signUp.userName, 
          password: signUp.password
      }).then( () => {
          alert('Success! Register');
      });
    };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => signUp.userName = e.target.value}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => signUp.password = e.target.value}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => signUp.confirmPassword = e.target.value}
              />
            </Grid>
          </Grid>
          {signUp.confirmPassword !== signUp.password ? <Alert variant="outlined" severity="error" visibility= "none">Password is not the same</Alert>: null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={'/Login'} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={45}>
        <Copyright />
      </Box>
    </Container>
  );
});