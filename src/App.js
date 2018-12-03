import React, { Component } from 'react';
import Drums from './components/Drums';
import Controls from './components/Controls';

import './App.css';

import { connect } from 'react-redux';

import {
  setCurrentSound,
  setStandardSounds,
  setAltSounds,
  updateStandard,
  setPower,
  updateIcon,
  updateCurrentVolume,
  setMuted,
  //updateAnimation,
  updateVolumeValue,
  updateAnimationQ,
  updateAnimationW,
  updateAnimationE,
  updateAnimationA,
  updateAnimationS,
  updateAnimationD,
  updateAnimationZ,
  updateAnimationX,
  updateAnimationC
} from './actions';

class App extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('keyup', this.handleKeyup);
    this.setVolume();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('keyup', this.handleKeyup);
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
    if (this.props.myData.power === 'on') {
      this.playSound(e.target.id.slice(4));
      this.props.setCurrentSound(this.showCurrentSound(e.target.id.slice(4)));
      /*this.props.updateAnimation(e.target.id.slice(4), e.target.id.slice(4) + '-pulse');
      setTimeout(() => {
        console.log("RUUUNNNNNNNNNNNN");
        this.props.updateAnimation('');
      }, 200);*/
    }
  }

  toggleDrumType = () => {
    if (this.props.myData.power === 'on') {
      if (this.props.myData.standard) {
        this.props.setAltSounds();
        this.props.updateStandard();
        this.props.setCurrentSound('Electro Kit');
      } else {
        this.props.setStandardSounds();
        this.props.updateStandard();
        this.props.setCurrentSound('Standard Kit');
      }
    }
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

  handleKeyup = (e) => {
    //this.props.updateAnimation('');
  }

  showCurrentSound = (sound) => {
    switch(sound) {
      case 'Q':
        this.props.updateAnimationQ('Q-pulse');
        setTimeout(() => {
          this.props.updateAnimationQ('');
        }, 200);
        return this.props.myData.qName;
      case 'W':
        this.props.updateAnimationW('W-pulse');
        setTimeout(() => {
          this.props.updateAnimationW('');
        }, 200);
        return this.props.myData.wName;
      case 'E':
        this.props.updateAnimationE('E-pulse');
        setTimeout(() => {
          this.props.updateAnimationE('');
        }, 200);
        return this.props.myData.eName;
      case 'A':
        this.props.updateAnimationA('A-pulse');
        setTimeout(() => {
          this.props.updateAnimationA('');
        }, 200);
        return this.props.myData.aName;
      case 'S':
        this.props.updateAnimationS('S-pulse');
        setTimeout(() => {
          this.props.updateAnimationS('');
        }, 200);
        return this.props.myData.sName;
      case 'D':
        this.props.updateAnimationD('D-pulse');
        setTimeout(() => {
          this.props.updateAnimationD('');
        }, 200);
        return this.props.myData.dName;
      case 'Z':
        this.props.updateAnimationZ('Z-pulse');
        setTimeout(() => {
          this.props.updateAnimationZ('');
        }, 200);
        return this.props.myData.zName;
      case 'X':
        this.props.updateAnimationX('X-pulse');
        setTimeout(() => {
          this.props.updateAnimationX('');
        }, 200);
        return this.props.myData.xName;
      case 'C':
        this.props.updateAnimationC('C-pulse');
        setTimeout(() => {
          this.props.updateAnimationC('');
        }, 200);
        return this.props.myData.cName;
      default:
        break;
    }
  }

  setVolume = () => {
    const result = document.getElementById('my-range').value / 100;
    const audio = document.getElementsByClassName('clip');
    for (let i = 0; i < audio.length; i++) {
      audio[i].volume = result;
    }
  }

  handleChange = (e) => {
    if (this.props.myData.power === 'on') {
      const result = e.target.value / 100;
      //console.log('result', result);
      const audio = document.getElementsByClassName('clip');
      //console.log(audio);
      //console.log('volume level', audio.volume);
      for (let i = 0; i < audio.length; i++) {
        audio[i].volume = result;
      }
      //audio.volume = result;
      this.props.updateVolumeValue(e.target.value);
    }
  }

  powerOn = () => {
    if (this.props.myData.power === 'off') {
      this.props.setPower('on');
    }
  }

  powerOff = () => {
    if (this.props.myData.power === 'on') {
      this.props.setPower('off');
    }
  }

  mute = () => {
    //console.log('RUN MUTE');
    this.props.setMuted();
    const volume = document.getElementById('my-range').value / 100;
    this.props.updateCurrentVolume(volume);
    this.props.updateIcon('fa-volume-mute');
    const audio = document.getElementsByClassName('clip');
    for (let i = 0; i < audio.length; i++) {
      audio[i].volume = 0;
    }
    this.props.updateVolumeValue(0);
  }

  unmute = () => {
    //console.log('RUN UNMUTE');
    this.props.setMuted();
    this.props.updateIcon('fa-volume-down');
    const audio = document.getElementsByClassName('clip');
    for (let i = 0; i < audio.length; i++) {
      audio[i].volume = this.props.myData.currentVolume;
    }
    console.log('currentVolume', this.props.myData.currentVolume);
    this.props.updateVolumeValue(this.props.myData.currentVolume * 100);
  }

  toggleMute = () => {
    if (this.props.myData.power === 'on') {
      if (this.props.myData.muted === false) {
        this.mute();
      } else {
        this.unmute();
      }
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
          qAnimation={this.props.myData.qAnimation}
          wAnimation={this.props.myData.wAnimation}
          eAnimation={this.props.myData.eAnimation}
          aAnimation={this.props.myData.aAnimation}
          sAnimation={this.props.myData.sAnimation}
          dAnimation={this.props.myData.dAnimation}
          zAnimation={this.props.myData.zAnimation}
          xAnimation={this.props.myData.xAnimation}
          cAnimation={this.props.myData.cAnimation}
        />
        <Controls
          currentSound={this.props.myData.currentSound}
          toggleDrumType={this.toggleDrumType}
          handleChange={this.handleChange}
          powerOn={this.powerOn}
          powerOff={this.powerOff}
          icon={this.props.myData.icon}
          toggleMute={this.toggleMute}
          value={this.props.myData.value}
        />
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
  setCurrentSound,
  setStandardSounds,
  setAltSounds,
  updateStandard,
  setPower,
  updateIcon,
  updateCurrentVolume,
  setMuted,
  updateVolumeValue,
  //updateAnimation,
  updateAnimationQ,
  updateAnimationW,
  updateAnimationE,
  updateAnimationA,
  updateAnimationS,
  updateAnimationD,
  updateAnimationZ,
  updateAnimationX,
  updateAnimationC
})(App);