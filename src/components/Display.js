import React from 'react';
import DrumPad from './DrumPad';

const Display = props => (
  <div id='display'>
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.q}
      audioClip={props.qClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.w}
      audioClip={props.wClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.e}
      audioClip={props.eClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.a}
      audioClip={props.aClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.s}
      audioClip={props.sClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.d}
      audioClip={props.dClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.z}
      audioClip={props.zClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.x}
      audioClip={props.xClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.c}
      audioClip={props.cClip}
    />
  </div>
);


export default Display;