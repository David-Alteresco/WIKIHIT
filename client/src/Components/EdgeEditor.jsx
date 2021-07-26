import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { wiki } from '../stores';
import { edgeProperties } from '../stores';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CirclePicker } from 'react-color';
import { view } from 'react-easy-state';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import nodePosition from './getNodePositionById'; 


const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
  },
}));

export default view(() => {
  const classes = useStyles();

  const checkBoxIsLabelBoldChange = (event) => {
    if (event.target.checked) {
      wiki.nodes[nodePosition()].labelStyle.fontWeight = 'bold';
      edgeProperties.labelStyle.fontWeight = 'bold';
    }else{
      wiki.nodes[nodePosition()].labelStyle.fontWeight = '';
      edgeProperties.labelStyle.fontWeight = '';
    }
  };

  const handleChangeStrokeColor = (color) => {
    wiki.nodes[nodePosition()].style.stroke = color.hex;
    edgeProperties.stroke = color.hex;
  };

  const handleChangeTextColor = (color, event) => {
    wiki.nodes[nodePosition()].labelStyle.fill = color.hex;
    console.log(color.hex);
    edgeProperties.labelStyle.fill = color.hex;
  };

  const handleChangeEdgeType = (event) => {
    wiki.nodes[nodePosition()].type = event.target.value;
    edgeProperties.type = event.target.value;
  };
  
  const onChangeEdgeTitle = (event) => {
    console.log(event);
    wiki.nodes[nodePosition()].label = event.target.value;
    console.log(wiki.nodes[nodePosition()].label);
    edgeProperties.label = wiki.nodes[nodePosition()].label;
    console.log(edgeProperties.label);
  };
  

  return (
    <div className={classes.root}>
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField variant="outlined" id="standard-required" label ='Title' onChange={onChangeEdgeTitle} 
        value={edgeProperties.label}/>
      </form>
    </div>
        
        <FormControlLabel
        control={
          <Checkbox
            onChange={checkBoxIsLabelBoldChange}
            name="checkedTextBold"
            color="primary"
            checked={edgeProperties.labelStyle.fontWeight !== '' ? true : false}
          />
        }
        label="Text bold"
      />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="backgroundColor-content"
          id="backgroundColor-header"
        >
          <Typography className={classes.heading}>Stroke Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CirclePicker 
        color = { wiki.currentId !== null ? edgeProperties.stroke : '#000000'}
        onChange={ handleChangeStrokeColor }
        />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="text-content"
          id="text-header"
        >
          <Typography className={classes.heading}>Text Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CirclePicker 
        color = { wiki.currentId !== null ? edgeProperties.labelStyle.fill : '#000000'}
        onChange={ handleChangeTextColor }
        />
        </AccordionDetails>
      </Accordion>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Edge Type</InputLabel>
        <Select
          native
          value={edgeProperties.type}
          onChange={handleChangeEdgeType}
          label="Edge Type"
          inputProps={{
            name: 'edgeType',
            id: 'outlined-edge-type',
          }}
        >
          <option value={'step'}>step</option>
          <option value={'smoothstep'}>smoothstep</option>
          <option value={''}>solid</option>
        </Select>
      </FormControl>
    </div>
  );
});