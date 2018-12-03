import React from 'react';
import DrumPad from './DrumPad';

const Drums = props => (
  <div id='drums'>
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.q}
      name={props.qName}
      audioClip={props.qClip}
      animation={props.qAnimation}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.w}
      name={props.wName}
      audioClip={props.wClip}
      animation={props.wAnimation}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.e}
      name={props.eName}
      audioClip={props.eClip}
      animation={props.eAnimation}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.a}
      name={props.aName}
      audioClip={props.aClip}
      animation={props.aAnimation}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.s}
      name={props.sName}
      audioClip={props.sClip}
      animation={props.sAnimation}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.d}
      name={props.dName}
      audioClip={props.dClip}
      animation={props.dAnimation}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.z}
      name={props.zName}
      audioClip={props.zClip}
      animation={props.zAnimation}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.x}
      name={props.xName}
      audioClip={props.xClip}
      animation={props.xAnimation}
    />
    <DrumPad
      handleClick={props.handleClick}
      keyPress={props.c}
      name={props.cName}
      audioClip={props.cClip}
      animation={props.cAnimation}
    />
  </div>
);

export default Drums;