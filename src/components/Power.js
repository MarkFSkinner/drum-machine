import React from 'react';

const Power = props => (
  <div id='power'>
    <div id='power-btns' className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-secondary" onClick={props.powerOff}>
        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Off
      </label>
      <label className="btn btn-secondary active" onClick={props.powerOn}>
        <input type="radio" name="options" id="option2" autoComplete="off" /> On
      </label>
    </div>
  </div>
);

export default Power;