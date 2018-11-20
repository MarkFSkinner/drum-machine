import React from 'react';

const DrumPad = props => (
  <div className='drum-pad'>
    <div className='pad-container'>
      <audio id={props.keyPress} className='clip' src={props.audioClip} preload="auto"></audio>
      <button id={`btn-${props.keyPress}`} type='button' className='btn btn-secondary btn-lg btn-drum' onClick={props.handleClick}>{props.keyPress}</button>
    </div>
  </div>
);


export default DrumPad;