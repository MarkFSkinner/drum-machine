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
    this.setVolume();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  playSound = (soundId) => {
    const audio = document.getElementById(soundId);
    if (audio.paused) {
      audio.play();
    } else{
      audio.currentTime = 0
    }
  }

  handleClick = (e) => {
    let sound;
    //console.log(this.props.myData.qName);
    switch(e.target.id) {
      case this.props.myData.qName.replace(" ", "-").toLowerCase():
        //console.log("QQQQQQQQ");
        sound = 'Q';
        break;
      case this.props.myData.wName.replace(" ", "-").toLowerCase():
       sound = 'W';
        break;
      case this.props.myData.eName.replace(" ", "-").toLowerCase():
        sound = 'E';
        break;
      case this.props.myData.aName.replace(" ", "-").toLowerCase():
        sound = 'A';
        break;
      case this.props.myData.sName.replace(" ", "-").toLowerCase():
        sound = 'S';
        break;
      case this.props.myData.dName.replace(" ", "-").toLowerCase():
        sound = 'D';
        break;
      case this.props.myData.zName.replace(" ", "-").toLowerCase():
        sound = 'Z';
        break;
      case this.props.myData.xName.replace(" ", "-").toLowerCase():
        sound = 'X';
        break;
      case this.props.myData.cName.replace(" ", "-").toLowerCase():
        sound = 'C';
        break;
      default:
        break;
    }
    if (this.props.myData.power === 'on') {
      this.playSound(sound);
      this.props.setCurrentSound(this.showCurrentSound(sound));
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
        document.getElementById(this.props.myData.qName.replace(" ", "-").toLowerCase()).click();
        break;
      case 87:
        document.getElementById(this.props.myData.wName.replace(" ", "-").toLowerCase()).click();
        break;
      case 69:
        document.getElementById(this.props.myData.eName.replace(" ", "-").toLowerCase()).click();
        break;
      case 65:
        document.getElementById(this.props.myData.aName.replace(" ", "-").toLowerCase()).click();
        break;
      case 83:
        document.getElementById(this.props.myData.sName.replace(" ", "-").toLowerCase()).click();
        break;
      case 68:
        document.getElementById(this.props.myData.dName.replace(" ", "-").toLowerCase()).click();
        break;
      case 90:
        document.getElementById(this.props.myData.zName.replace(" ", "-").toLowerCase()).click();
        break;
      case 88:
        document.getElementById(this.props.myData.xName.replace(" ", "-").toLowerCase()).click();
        break;
      case 67:
        document.getElementById(this.props.myData.cName.replace(" ", "-").toLowerCase()).click();
        break;
      default:
        break;
    }
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
      const audio = document.getElementsByClassName('clip');
      for (let i = 0; i < audio.length; i++) {
        audio[i].volume = result;
      }
      this.props.updateVolumeValue(e.target.value);
      if (this.props.myData.muted) {
        this.props.setMuted();
        this.props.updateIcon('fa-volume-down');
      }
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

  setMaxVolume = () => {
    const audio = document.getElementsByClassName('clip');
    for (let i = 0; i < audio.length; i++) {
      audio[i].volume = 1;
    }
    this.props.updateVolumeValue(100);
    if (this.props.myData.muted) {
      this.props.setMuted();
      this.props.updateIcon('fa-volume-down');
    }
  }

  unmute = () => {
    this.props.setMuted();
    this.props.updateIcon('fa-volume-down');
    const audio = document.getElementsByClassName('clip');
    for (let i = 0; i < audio.length; i++) {
      audio[i].volume = this.props.myData.currentVolume;
    }
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
          setMaxVolume={this.setMaxVolume}
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