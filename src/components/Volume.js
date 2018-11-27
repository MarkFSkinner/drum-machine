import React from 'react';

const Volume = props => (
  <div id='volume-control' className="slidecontainer">
    <i className="fas fa-volume-down"></i>
    <input type="range" min="1" max="100" defaultValue="50" className="slider" id="my-range" onChange={props.handleChange} />
    <i className="fas fa-volume-up"></i>
  </div>
);


export default Volume;