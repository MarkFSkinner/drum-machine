import React from 'react';
import Power from './Power';
import Display from './Display';
import Selector from './Selector';
import Volume from './Volume';

const Controls = props => (
  <div id='controls'>
    <Selector
      toggleDrumType={props.toggleDrumType}
    />
    <Display
      currentSound={props.currentSound}
    />
    <Volume
      handleChange={props.handleChange}
      icon={props.icon}
      toggleMute={props.toggleMute}
      value={props.value}
    />
    <Power
      powerOff={props.powerOff}
      powerOn={props.powerOn}
    />
  </div>
);


export default Controls;