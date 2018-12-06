import React from 'react';

const DrumPad = props => (
  <div type='button' id={props.name.replace(" ", "-").toLowerCase()} className={`btn btn-secondary btn-lg btn-drum drum-pad ${props.animation}`} onClick={props.handleClick}>
    <audio id={props.keyPress} className='clip' src={props.audioClip} preload="auto"></audio>
    {props.keyPress}
  </div>
);

export default DrumPad;