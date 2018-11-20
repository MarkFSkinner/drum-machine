import React, { Component } from 'react';
import Drums from './components/Drums';
import Controls from './components/Controls';

import './App.css';

import { connect } from 'react-redux';

import {
  trialAction
} from './actions';

class App extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  playSound = (soundId) => {
    const audio = document.getElementById(soundId);
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
  }

  handleClick = (e) => {
    this.playSound(e.target.id.slice(4));
  }

  handleKeydown = (e) => {
    switch(e.keyCode) {
      case 81:
        this.playSound('Q');
        break;
      case 87:
        this.playSound('W');
        break;
      case 69:
        this.playSound('E');
        break;
      case 65:
        this.playSound('A');
        break;
      case 83:
        this.playSound('S');
        break;
      case 68:
        this.playSound('D');
        break;
      case 90:
        this.playSound('Z');
        break;
      case 88:
        this.playSound('X');
        break;
      case 67:
        this.playSound('C');
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div id='drum-machine'>
        <Drums
          handleClick={this.handleClick}
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