import React from 'react';

const DrumPad = props => (
  <div id={props.name.replace(" ", "-").toLowerCase()} className={`btn btn-custom btn-lg btn-drum drum-pad ${props.animation}`} onClick={props.handleClick}>
    <audio id={props.keyPress} className='clip' src={props.audioClip} preload="auto"></audio>
    {props.keyPress}
  </div>
);

export default DrumPad;