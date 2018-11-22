import React from 'react';
import DrumPad from './DrumPad';

const Drums = props => (
  <div id='drums'>
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.q}
      name={props.qName}
      audioClip={props.qClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.w}
      name={props.wName}
      audioClip={props.wClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.e}
      name={props.eName}
      audioClip={props.eClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.a}
      name={props.aName}
      audioClip={props.aClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.s}
      name={props.sName}
      audioClip={props.sClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.d}
      name={props.dName}
      audioClip={props.dClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.z}
      name={props.zName}
      audioClip={props.zClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.x}
      name={props.xName}
      audioClip={props.xClip}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.c}
      name={props.cName}
      audioClip={props.cClip}
    />
  </div>
);


export default Drums;