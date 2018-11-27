import React from 'react';

const Selector = props => (
  <button id='drum-selector' type='button' className='btn btn-secondary' onClick={props.toggleDrumType}>Change Kit</button>
);


export default Selector;