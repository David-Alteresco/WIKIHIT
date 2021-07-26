import React from 'react';
import MindNode from './nodeComponents';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { view } from 'react-easy-state';
import { Grid } from '@material-ui/core';


export default view(() => {
  return (
    <div>
     <Grid container spacing={0}>
      <Grid item xs={6}>
        <LeftPane />
      </Grid>
      <Grid item xs={6}>
        <RightPane />
      </Grid>
    </Grid>
      <MindNode/>
    </div>
  );
});
