import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Avatar } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    borderRadius: 25,
    backgroundColor: "#0066e8",
    height: '50px',
    fontWeight: 'bold',
    width:'420px',
    fontSize: 'xx-large',
  },
  avatar: {
    backgroundColor: red[500],
  },
  addCard:{
      width:'41px',
      height: '41px',
      marginLeft: theme.spacing(1),
      backgroundColor: red[500],
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addNewCard = () => {
    
  };

  return (
    <div className={classes.root}>
      <AppBar position="static"  elevation={0} className= {classes.background}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
            My projects
          </Typography>
          {auth && (
            <div>
              <IconButton
                className={classes.addCard}
                aria-label="add card"
                aria-controls="add-card-appbar"
                onClick={addNewCard}
              >
                <Icon>+</Icon>
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar className={classes.avatar}>DA</Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
