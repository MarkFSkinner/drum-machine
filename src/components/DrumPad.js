import React from 'react';

const DrumPad = props => (
  <div className='drum-pad'>
    <audio id={props.keyPress} className='clip' src={props.audioClip} preload="auto"></audio>
    <button id={`btn-${props.keyPress}`} type='button' className='btn btn-secondary btn-lg' onClick={props.handleClick}>{props.keyPress}</button>
  </div>
);


export default DrumPad;