import React, { useState } from "react";
import Login from './Login';
import Register from './Register';
import Projects from './Projects';
import Search from './Search';
import Main from './MainNodeMine';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import {HashRouter, Switch, Route, Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


export default function Header() {
  
  const classes = useStyles();
  return (
    <HashRouter>
    <div className={classes.root}>
      <AppBar position="static"
      >
        <Toolbar>

          <Typography variant="h6" color="inherit">
            WIKHIT
          </Typography>
            <Link to="/Register"> Register </Link>
            <Link to="/Projects"> Projects </Link>
            <Link to="/Search">  Search </Link>
            <Link to="/Main" >  Main </Link>

        </Toolbar>
      </AppBar>
           
        
        <Switch>
          <Route exact path="/Login" component={Login}>
            <Login />
          </Route>
          <Route path="/Register" component={Register}>
            <Register />
          </Route>
          <Route path="/Projects" component={Projects}>
            <Projects />
          </Route>
          <Route path="/Search" component={Search}>
            <Search />
          </Route>
          <Route path="/Main" component={Main}>
            <Main />
          </Route>
        </Switch>
      </div>
    </HashRouter>

    
  );
}
