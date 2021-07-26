/* import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { wiki } from '../stores';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 40,
  },
});

export default function SimpleCard(props) {
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

  const goToChart = () => {
    wiki.projectId = props.idNum;
  };
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          ProjectName: {props.title}
        </Typography>
    <div>
        <FormControl className={classes.formControl}>
            <Select
            labelId="demo-controlled-open-select-label"
            key={`CardNumber ${props.idNum}`}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={props.status}
            onChange={handleChange}
            >
            <MenuItem value={'draft'}>Draft</MenuItem>
            <MenuItem value={'done'}>Done</MenuItem>
            </Select>
        </FormControl>
    </div>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Link to='/Main' activeClassName="active">
          <Button type="submit" variant="contained" color="primary" onClick={goToChart}>
            GO
          </Button>
        </Link>
      </CardActions>
    </Card>W
  );
}; */


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { wiki } from '../stores';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import cardDefualtImage from '../images/cardDefualtImage.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    maxHeight:450,
    margin: theme.spacing(2),
  },
  media: {
    //height: 0,
    maxWidth: '400px',
    maxHeight: '100px',
    paddingTop: '40%', // 16:9
  },
  cardHeader:{
    fontSize: 'large',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  link:{
    textDecoration: 'none',
  },
  toChartBtn: {
    
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [status, setStatus] = React.useState(props.status);
  const [open, setOpen] = React.useState(false);

  const goToChart = () => {
    wiki.projectId = props.idNum;
  };

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
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            DA
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Typography variant="h5" color="textSecondary" component="h1">
        {props.title}
        </Typography>
        <CardMedia
        className={classes.media}
        image= {cardDefualtImage}
        title="cardImage"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <div>
        <FormControl className={classes.formControl}>
            <Select
            labelId="demo-controlled-open-select-label"
            key={`CardNumber ${props.idNum}`}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={props.status}
            onChange={handleChange}
            >
            <MenuItem value={'draft'}>Draft</MenuItem>
            <MenuItem value={'done'}>Done</MenuItem>
            </Select>
        </FormControl>
    </div>
      <CardActions >
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography className={classes.toChartBtn}>
          <Link to='/Main' activeClassName="active" className={classes.link} variant="body2">
            <Button type="submit" variant="contained" color="primary"  onClick={goToChart} >
             TO Chart
           </Button>
        </Link>
        </Typography>
      </CardActions>
    </Card>
  );
}