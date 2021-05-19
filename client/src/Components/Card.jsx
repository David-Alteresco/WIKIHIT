import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  const [status, setStatus] = React.useState('Draft');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          ProjectName:
        </Typography>
    <div>
        <FormControl className={classes.formControl}>
            <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={status}
            onChange={handleChange}
            >
            <MenuItem value={'Draft'}>Draft</MenuItem>
            <MenuItem value={'Done'}>Done</MenuItem>
            </Select>
        </FormControl>
    </div>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Link to={`/Search`} activeClassName="active">Open</Link>
      </CardActions>
    </Card>
  );
}