import React from 'react';

const Selector = props => (
  <div id='selector'>
    <button id='drum-selector' type='button' className='btn btn-custom' onClick={props.toggleDrumType}>Change Kit</button>
  </div>
);

export default Selector;