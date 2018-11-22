import React, { Component } from 'react';
import Drums from './components/Drums';
import Controls from './components/Controls';

import './App.css';

import { connect } from 'react-redux';

import {
  setCurrentSound
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
    this.props.setCurrentSound(this.showCurrentSound(e.target.id.slice(4)));
  }

  handleKeydown = (e) => {
    switch(e.keyCode) {
      case 81:
        document.getElementById('btn-Q').click();
        //this.playSound('Q');
        break;
      case 87:
        document.getElementById('btn-W').click();
        //this.playSound('W');
        break;
      case 69:
        document.getElementById('btn-E').click();
        //this.playSound('E');
        break;
      case 65:
        document.getElementById('btn-A').click();
        //this.playSound('A');
        break;
      case 83:
        document.getElementById('btn-S').click();
        //this.playSound('S');
        break;
      case 68:
        document.getElementById('btn-D').click();
        //this.playSound('D');
        break;
      case 90:
        document.getElementById('btn-Z').click();
        //this.playSound('Z');
        break;
      case 88:
        document.getElementById('btn-X').click();
        //this.playSound('X');
        break;
      case 67:
        document.getElementById('btn-C').click();
        //this.playSound('C');
        break;
      default:
        break;
    }
  }

  showCurrentSound = (sound) => {
    switch(sound) {
      case 'Q':
        return this.props.myData.qName;
      case 'W':
        return this.props.myData.wName;
      case 'E':
        return this.props.myData.eName;
      case 'A':
        return this.props.myData.aName;
      case 'S':
        return this.props.myData.sName;
      case 'D':
        return this.props.myData.dName;
      case 'Z':
        return this.props.myData.zName;
      case 'X':
        return this.props.myData.xName;
      case 'C':
        return this.props.myData.cName;
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
          qName={this.props.myData.qName}
          qClip={this.props.myData.qClip}
          w={this.props.myData.w}
          wName={this.props.myData.wName}
          wClip={this.props.myData.wClip}
          e={this.props.myData.e}
          eName={this.props.myData.eName}
          eClip={this.props.myData.eClip}
          a={this.props.myData.a}
          aName={this.props.myData.aName}
          aClip={this.props.myData.aClip}
          s={this.props.myData.s}
          sName={this.props.myData.sName}
          sClip={this.props.myData.sClip}
          d={this.props.myData.d}
          dName={this.props.myData.dName}
          dClip={this.props.myData.dClip}
          z={this.props.myData.z}
          zName={this.props.myData.zName}
          zClip={this.props.myData.zClip}
          x={this.props.myData.x}
          xName={this.props.myData.xName}
          xClip={this.props.myData.xClip}
          c={this.props.myData.c}
          cName={this.props.myData.cName}
          cClip={this.props.myData.cClip}
        />
        <Controls currentSound={this.props.myData.currentSound}/>
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
  setCurrentSound
})(App);