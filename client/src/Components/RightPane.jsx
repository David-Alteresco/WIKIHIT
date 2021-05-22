import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { view } from 'react-easy-state';
import { wiki } from '../stores';
import InnerHTML from 'dangerously-set-html-content';
import getWikiHtml from './getWikiHtml';


const drawerWidth = 650;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 2,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 10,
  },
}));

export default view(() => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  const reRender = () => {
    const currentId = wiki.currentId;
    const newTitle = document.getElementById("changeUrlWIKIProject").innerHTML;
    getWikiHtml(newTitle);
    wiki.nodes.push({id:((wiki.nodes.length)+1).toString(), type: 'input', data: {label: newTitle, title:newTitle}, position: {x: 150, y: 150}});
    wiki.nodes.push({id:((wiki.nodes.length)+1).toString(), source: currentId, target: (wiki.nodes.length).toString(), animated: false});
    wiki.currentId = ((wiki.nodes.length)-1).toString();
    /* console.log(wiki.nodes[wiki.nodes.length-2]);
    console.log(wiki.nodes[wiki.nodes.length-1]); */
    console.log(wiki.nodes);
    
  };

  return (
    <div className={classes.root}> 
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton> 
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <div>
        {/* {wiki.wikiHtml === null ? <div>NO RESULTS YET</div> : <div dangerouslySetInnerHTML={{__html:wiki.wikiHtml}}></div>} */}
        {wiki.wikiHtml === null ? <div>NO RESULTS YET</div> : <InnerHTML html={wiki.wikiHtml} />}
        </div>
        <div>

        {/* {wiki.wikiHtml === null ? '' : <input type="text" id='changeUrlWIKIProject' onChange={handleChange} value={titleLink}/>} */}
        <div id='changeUrlWIKIProject' onClick={reRender}></div>
        </div>
      </Drawer>
    </div>
  );
});