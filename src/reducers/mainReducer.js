import {
  SET_CURRENT_SOUND,
  SET_STANDARD_SOUNDS,
  SET_ALT_SOUNDS,
  UPDATE_STANDARD,
  SET_POWER,
  UPDATE_ICON,
  UPDATE_CURRENT_VOLUME,
  SET_MUTED,
  UPDATE_VOLUME_VALUE,
  UPDATE_Q_ANIMATION,
  UPDATE_W_ANIMATION,
  UPDATE_E_ANIMATION,
  UPDATE_A_ANIMATION,
  UPDATE_S_ANIMATION,
  UPDATE_D_ANIMATION,
  UPDATE_Z_ANIMATION,
  UPDATE_X_ANIMATION,
  UPDATE_C_ANIMATION
} from '../actions/types';

const initialState = {
  q: 'Q',
  qName: 'Crash Cymbal',
  qClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/92[kb]909-bright-crash.aif.mp3',
  w: 'W',
  wName: 'Open Hi-hat',
  wClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/88[kb]bigopenhh.aif.mp3',
  e: 'E',
  eName: 'Ride Cymbal',
  eClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/87[kb]cleanride.aif.mp3',
  a: 'A',
  aName: 'Snare',
  aClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/56[kb]ambient_snare.aif.mp3',
  s: 'S',
  sName: 'High Tom',
  sClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/260[kb]ambient_tom_1.aif.mp3',
  d: 'D',
  dName: 'Mid Tom',
  dClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/307[kb]ambient_tom_2.aif.mp3',
  z: 'Z',
  zName: 'Closed Hi-hat',
  zClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/10[kb]clear-hat.aif.mp3',
  x: 'X',
  xName: 'Bass Drum',
  xClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/160[kb]ambient_kick.aif.mp3',
  c: 'C',
  cName: 'Low Tom',
  cClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/339[kb]ambient_tom_3.aif.mp3',
  currentSound: 'Standard Kit',
  standard: true,
  power: 'on',
  icon: 'fa-volume-down',
  muted: false,
  value: 50,
  qAnimation: '',
  wAnimation: '',
  eAnimation: '',
  aAnimation: '',
  sAnimation: '',
  dAnimation: '',
  zAnimation: '',
  xAnimation: '',
  cAnimation: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_SOUND:
      return {
        ...state,
        currentSound: action.payload
      }
    case SET_STANDARD_SOUNDS:
      return {
        ...state,
        qName: 'Crash Cymbal',
        qClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/92[kb]909-bright-crash.aif.mp3',
        wName: 'Open Hi-hat',
        wClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/88[kb]bigopenhh.aif.mp3',
        eName: 'Ride Cymbal',
        eClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/87[kb]cleanride.aif.mp3',
        aName: 'Snare',
        aClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/56[kb]ambient_snare.aif.mp3',
        sName: 'High Tom',
        sClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/260[kb]ambient_tom_1.aif.mp3',
        dName: 'Mid Tom',
        dClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/307[kb]ambient_tom_2.aif.mp3',
        zName: 'Closed Hi-hat',
        zClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/10[kb]clear-hat.aif.mp3',
        xName: 'Bass Drum',
        xClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/160[kb]ambient_kick.aif.mp3',
        cName: 'Low Tom',
        cClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/339[kb]ambient_tom_3.aif.mp3',
      }
    case SET_ALT_SOUNDS:
      return {
        ...state,
        qName: 'Space Crash Cymbal',
        qClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/281[kb]spacecrash.aif.mp3',
        wName: 'Clap',
        wClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/13[kb]Clap2.wav.mp3',
        eName: 'Electro Ride Cymbal',
        eClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/46[kb]electroride.aif.mp3',
        aName: 'Electro Snare',
        aClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/12[kb]elecsnare.aif.mp3',
        sName: 'High Electro Tom',
        sClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/86[kb]hietom.aif.mp3',
        dName: 'Mid Electro Tom',
        dClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/86[kb]medetom.aif.mp3',
        zName: 'Closed Electro Hi-hat',
        zClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/79[kb]ehat.aif.mp3',
        xName: 'Dance Kick',
        xClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/86[kb]deep_dance_kick_1.aif.mp3',
        cName: 'Low Electro Tom',
        cClip: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/86[kb]loetom.aif.mp3',
      }
    case UPDATE_STANDARD:
      return {
        ...state,
        standard: !state.standard
      }
    case SET_POWER:
      return {
        ...state,
        power: action.payload
      }
    case UPDATE_ICON:
      return {
        ...state,
        icon: action.payload
      }
    case UPDATE_CURRENT_VOLUME:
      return {
        ...state,
        currentVolume: action.payload
      }
    case SET_MUTED:
      return {
        ...state,
        muted: !state.muted
      }
    case UPDATE_VOLUME_VALUE:
      return {
        ...state,
        value: action.payload
      }
    case UPDATE_Q_ANIMATION:
      return {
        ...state,
        qAnimation: action.payload
      }
    case UPDATE_W_ANIMATION:
      return {
        ...state,
        wAnimation: action.payload
      }
    case UPDATE_E_ANIMATION:
      return {
        ...state,
        eAnimation: action.payload
      }
    case UPDATE_A_ANIMATION:
      return {
        ...state,
        aAnimation: action.payload
      }
    case UPDATE_S_ANIMATION:
      return {
        ...state,
        sAnimation: action.payload
      }
    case UPDATE_D_ANIMATION:
      return {
        ...state,
        dAnimation: action.payload
      }
    case UPDATE_Z_ANIMATION:
      return {
        ...state,
        zAnimation: action.payload
      }
    case UPDATE_X_ANIMATION:
      return {
        ...state,
        xAnimation: action.payload
      }
    case UPDATE_C_ANIMATION:
      return {
        ...state,
        cAnimation: action.payload
      }
    default:
      return state;
  }
}