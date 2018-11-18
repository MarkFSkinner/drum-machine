import React, { Component } from 'react';
import Display from './components/Display';
import Controls from './components/Controls';

import './App.css';

import { connect } from 'react-redux';

import {
  trialAction
} from './actions';

class App extends Component {
  render() {
    return (
      <div id='drum-machine'>
        <Display />
        <Controls />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myData: state.myData
  }
}

export default connect(mapStateToProps, {
  trialAction
})(App);