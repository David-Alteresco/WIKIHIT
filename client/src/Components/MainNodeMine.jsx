import React from 'react';
import MindNode from './nodeComponents';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { view } from 'react-easy-state';


export default view(() => {
  return (
    <div>
      <LeftPane/>
      <RightPane/>
      <MindNode/>
    </div>
  );
});
