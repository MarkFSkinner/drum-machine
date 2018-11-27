import React from 'react';

const Controls = props => (
  <div id='controls'>
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-secondary" onClick={props.powerOff}>
        <input type="radio" name="options" id="option1" autocomplete="off" checked /> Off
      </label>
      <label className="btn btn-secondary active" onClick={props.powerOn}>
        <input type="radio" name="options" id="option2" autocomplete="off" /> On
      </label>
    </div>
    <div id='display'>{props.currentSound}</div>
    <button id='drum-selector' type='button' className='btn btn-secondary' onClick={props.toggleDrumType}>Change Kit</button>
    <div id='volume-control' className="slidecontainer">
      <i className="fas fa-volume-down"></i>
      <input type="range" min="1" max="100" defaultValue="50" className="slider" id="my-range" onChange={props.handleChange} />
      <i className="fas fa-volume-up"></i>
    </div>
  </div>
);


export default Controls;