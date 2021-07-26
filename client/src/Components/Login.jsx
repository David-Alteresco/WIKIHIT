

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { view } from 'react-easy-state';
import axios from "axios";
import { login } from '../stores';
import Alert from '@material-ui/lab/Alert';
import { Redirect, Link } from "react-router-dom";


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
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/1600x900/?study,graph)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(5, 20),
    paddingTop: theme.spacing(15),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signUpLink:{
    paddingLeft: theme.spacing(18),
  },
  copyright: {
    paddingTop: theme.spacing(35),
  },
}));

export default view(() => {
  const classes = useStyles();


  const submit = async() => {
    try{
        const getUserData = await axios.post(`${process.env.REACT_APP_API_KEY}api/Login`,{ username: login.userName, password: login.password});
        login.userId = getUserData.data[0]._id;
        login.userValidtionMessage = false;
        login.isLogined = true;
    }catch(error){
        login.userValidtionMessage = true;
    }
};


  if (login.isLogined) {
    sessionStorage.setItem("userId", login.userId);
    return <Redirect to='/projects'/>
  };
 



  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email Address"
              name="Email"
              autoComplete="Email"
              autoFocus
              onChange={(e) => login.userName = e.target.value}>
            </TextField>
              
            <TextField variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = {(e) => login.password = e.target.value}>
            </TextField>
            {login.userValidtionMessage ? <Alert variant="outlined" severity="error" visibility= "none">Username or password incorrect</Alert>: null}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={3}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={9} className={classes.signUpLink}>
                <Link to="/Register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5} className={classes.copyright}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
});