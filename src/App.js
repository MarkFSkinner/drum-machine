import React, { Component } from 'react';
import Display from './components/Display';
import Controls from './components/Controls';

import './App.css';

import { connect } from 'react-redux';

import {
  trialAction
} from './actions';

class App extends Component {

  playSound = (e) => {
    const audio = document.getElementById(e.target.id.slice(4));
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
  }

  render() {
    return (
      <div id='drum-machine'>
        <Display
          playSound={this.playSound}
          q={this.props.myData.q}
          qClip={this.props.myData.qClip}
          w={this.props.myData.w}
          wClip={this.props.myData.wClip}
          e={this.props.myData.e}
          eClip={this.props.myData.eClip}
          a={this.props.myData.a}
          aClip={this.props.myData.aClip}
          s={this.props.myData.s}
          sClip={this.props.myData.sClip}
          d={this.props.myData.d}
          dClip={this.props.myData.dClip}
          z={this.props.myData.z}
          zClip={this.props.myData.zClip}
          x={this.props.myData.x}
          xClip={this.props.myData.xClip}
          c={this.props.myData.c}
          cClip={this.props.myData.cClip}
        />
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