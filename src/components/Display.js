import React from 'react';
import DrumPad from './DrumPad';

const Display = props => (
  <div id='display'>
    <h1>Display</h1>
    <DrumPad
      playSound={props.playSound}
      keyPress={props.q}
      audioClip={props.qClip}
    />
    <DrumPad
      playSound={props.playSound}
      keyPress={props.w}
      audioClip={props.wClip}
    />
    <DrumPad
      playSound={props.playSound}
      keyPress={props.e}
      audioClip={props.eClip}
    />
    <DrumPad
      playSound={props.playSound}
      keyPress={props.a}
      audioClip={props.aClip}
    />
    <DrumPad
      playSound={props.playSound}
      keyPress={props.s}
      audioClip={props.sClip}
    />
    <DrumPad
      playSound={props.playSound}
      keyPress={props.d}
      audioClip={props.dClip}
    />
    <DrumPad
      playSound={props.playSound}
      keyPress={props.z}
      audioClip={props.zClip}
    />
    <DrumPad
      playSound={props.playSound}
      keyPress={props.x}
      audioClip={props.xClip}
    />
    <DrumPad
      playSound={props.playSound}
      keyPress={props.c}
      audioClip={props.cClip}
    />
  </div>
);


export default Display;