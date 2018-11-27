import React from 'react';

const Power = props => (
  <div className="btn-group btn-group-toggle" data-toggle="buttons">
    <label className="btn btn-secondary" onClick={props.powerOff}>
      <input type="radio" name="options" id="option1" autocomplete="off" checked /> Off
    </label>
    <label className="btn btn-secondary active" onClick={props.powerOn}>
      <input type="radio" name="options" id="option2" autocomplete="off" /> On
    </label>
  </div>
);

export default Power;