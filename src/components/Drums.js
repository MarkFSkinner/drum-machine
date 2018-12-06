import React from 'react';
import DrumPad from './DrumPad';

const Drums = props => (
  <div id='drums'>
    <div className='pad-container'>
      <DrumPad
        handleClick={props.handleClick}
        keyPress={props.q}
        name={props.qName}
        audioClip={props.qClip}
        animation={props.qAnimation}
      />
    </div>
    <div className='pad-container'>
      <DrumPad
        handleClick={props.handleClick}
        keyPress={props.w}
        name={props.wName}
        audioClip={props.wClip}
        animation={props.wAnimation}
      />
    </div>
    <div className='pad-container'>
      <DrumPad
        handleClick={props.handleClick}
        keyPress={props.e}
        name={props.eName}
        audioClip={props.eClip}
        animation={props.eAnimation}
      />
    </div>
    <div className='pad-container'>
      <DrumPad
        handleClick={props.handleClick}
        keyPress={props.a}
        name={props.aName}
        audioClip={props.aClip}
        animation={props.aAnimation}
      />
    </div>
    <div className='pad-container'>
      <DrumPad
        handleClick={props.handleClick}
        keyPress={props.s}
        name={props.sName}
        audioClip={props.sClip}
        animation={props.sAnimation}
      />
    </div>
    <div className='pad-container'>
      <DrumPad
        handleClick={props.handleClick}
        keyPress={props.d}
        name={props.dName}
        audioClip={props.dClip}
        animation={props.dAnimation}
      />
    </div>
    <div className='pad-container'>
      <DrumPad
        handleClick={props.handleClick}
        keyPress={props.z}
        name={props.zName}
        audioClip={props.zClip}
        animation={props.zAnimation}
      />
    </div>
    <div className='pad-container'>
      <DrumPad
        handleClick={props.handleClick}
        keyPress={props.x}
        name={props.xName}
        audioClip={props.xClip}
        animation={props.xAnimation}
      />
    </div>
    <div className='pad-container'>
      <DrumPad
        handleClick={props.handleClick}
        keyPress={props.c}
        name={props.cName}
        audioClip={props.cClip}
        animation={props.cAnimation}
      />
    </div>
  </div>
);

export default Drums;