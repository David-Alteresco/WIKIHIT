import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 500,
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 40,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          New Project
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button variant="contained" size="large" color="primary" >+</Button>
      </CardActions>
    </Card>
  );
}