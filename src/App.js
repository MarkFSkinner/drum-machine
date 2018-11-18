import React, { Component } from 'react';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import './App.css';

import { connect } from 'react-redux';

import {
  trialAction
} from './actions';

class App extends Component {
  render() {
    return (
      <div>
        <ComponentOne />
        <ComponentTwo />
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