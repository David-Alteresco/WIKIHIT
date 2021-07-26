import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { nodeProperties } from '../stores';
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
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import nodePosition from './getNodePositionById'; 
import { wiki } from '../stores';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
    },
}));


export default view(() => {
    const classes = useStyles();
    const checkBoxIsLabelBoldChange = (event) => {
        if (event.target.checked) {
        wiki.nodes[nodePosition()].style.fontWeight = 'bold';
        nodeProperties.fontWeight = 'bold';
        }else{
        wiki.nodes[nodePosition()].style.fontWeight = '';
        nodeProperties.fontWeight = '';
        }
    };

  const handleChangeBackgroundColor = (color) => {
    wiki.nodes[nodePosition()].style.background = color.hex;
    nodeProperties.nodeBackgroundColor = color.hex;
  };

  const handleChangeTextColor = (color, event) => {
      wiki.nodes[nodePosition()].style.color = color.hex;
      nodeProperties.nodeTextColor = color.hex;   
  };

  const handleChangeBorderColor = (color, event) => {
    const newBorderColor = wiki.nodes[nodePosition()].style.border.replace(/#.*/g, color.hex);
    wiki.nodes[nodePosition()].style.border = newBorderColor;
    nodeProperties.borderColor = color.hex;
  };

  const handleChangeBorderShape = (event) => {
    const BorderColor = wiki.nodes[nodePosition()].style.border.split(/#/g);
    const newBorderShape = wiki.nodes[nodePosition()].style.border.replace(/[a-z][a-z][a-z][a-z].*/g, event.target.value);
    wiki.nodes[nodePosition()].style.border = newBorderShape + '#' + BorderColor[1];
    nodeProperties.borderShape = event.target.value;
  };

  const handleChangeBorderLineWidth = (event, newValue) => {
    const BorderWithoutPX = wiki.nodes[nodePosition()].style.border.split(/.*px/g);
    const newBorderWithoutPX = `${newValue}px${BorderWithoutPX[1]}`;
    wiki.nodes[nodePosition()].style.border = newBorderWithoutPX;
    nodeProperties.borderLineWidth = newValue;
  };

  function valueLabelFormat(value) {
    return Number(value);
  }

  const onChangeNodeTitle = (event) => {
    wiki.nodes[nodePosition()].data.label = event.target.value;
    nodeProperties.nodeLabel = wiki.nodes[nodePosition()].data.label;
  };
  

  return (
    <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField variant="outlined" id="standard-required" label ='Title' onChange={onChangeNodeTitle} 
          value={nodeProperties.nodeLabel}/>
        </form>
        <FormControlLabel
        control={
          <Checkbox
            onChange={checkBoxIsLabelBoldChange}
            name="checkedTextBold"
            color="primary"
            checked={nodeProperties.fontWeight !== '' ? true : false}
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
          <Typography className={classes.heading}>Background Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CirclePicker 
        color = { wiki.currentId !== null ? nodeProperties.nodeBackgroundColor : '#fff'}
        onChange={ handleChangeBackgroundColor }
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
        color = { wiki.currentId !== null ? nodeProperties.nodeTextColor : '#000000'}
        onChange={ handleChangeTextColor }
        />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="border-content"
          id="v-header"
        >
          <Typography className={classes.heading}>Border Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CirclePicker 
        color = { wiki.currentId !== null ? nodeProperties.borderColor : '#000000'}
        onChange={ handleChangeBorderColor }
        />
        </AccordionDetails>
      </Accordion>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Border Shape</InputLabel>
        <Select
          native
          value={nodeProperties.borderShape}
          onChange={handleChangeBorderShape}
          label="Border shape"
          inputProps={{
            name: 'borderShape',
            id: 'outlined-border-shape-native-simple',
          }}
        >
          <option value={'dotted'}>dotted</option>
          <option value={'dashed'}>dashed</option>
          <option value={'solid'}>solid</option>
          <option value={'double'}>double</option>
          <option value={'groove'}>groove</option>
          <option value={'ridge'}>ridge</option>
          <option value={'inset'}>inset</option>
          <option value={'outset'}>outset</option>
          <option value={'none'}>none</option>
          <option value={'hidden'}>hidden</option>
        </Select>
      </FormControl>
      <Typography id="non-linear-slider" gutterBottom>
        Border Width
      </Typography>
      <Slider
        value={nodeProperties.borderLineWidth}
        min={1}
        step={1}
        max={10}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChangeBorderLineWidth}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </div>
  );
});