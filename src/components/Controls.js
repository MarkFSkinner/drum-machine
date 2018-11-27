import React from 'react';
import Power from './Power';
import Display from './Display';
import Selector from './Selector';
import Volume from './Volume';

const Controls = props => (
  <div id='controls'>
    <Power
      powerOff={props.powerOff}
      powerOn={props.powerOn}
    />
    <Display
      currentSound={props.currentSound}
    />
    <Selector
      toggleDrumType={props.toggleDrumType}
    />
    <Volume
      handleChange={props.handleChange}
    />
  </div>
);


export default Controls;