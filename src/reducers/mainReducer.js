import {
  SET_CURRENT_SOUND,
  SET_STANDARD_SOUNDS,
  SET_ALT_SOUNDS,
  UPDATE_STANDARD,
  SET_POWER
} from '../actions/types';

const initialState = {
  q: 'Q',
  qName: 'Crash Cymbal',
  qClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/crashes/92[kb]909-bright-crash.aif.mp3',
  w: 'W',
  wName: 'Open Hi-hat',
  wClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/hats/88[kb]bigopenhh.aif.mp3',
  e: 'E',
  eName: 'Ride Cymbal',
  eClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/rides/87[kb]cleanride.aif.mp3',
  a: 'A',
  aName: 'Snare',
  aClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/56[kb]ambient_snare.aif.mp3',
  s: 'S',
  sName: 'High Tom',
  sClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/260[kb]ambient_tom_1.aif.mp3',
  d: 'D',
  dName: 'Mid Tom',
  dClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/307[kb]ambient_tom_2.aif.mp3',
  z: 'Z',
  zName: 'Closed Hi-hat',
  zClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/hats/10[kb]clear-hat.aif.mp3',
  x: 'X',
  xName: 'Bass Drum',
  xClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/160[kb]ambient_kick.aif.mp3',
  //xClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/61[kb]bass-kickers-2.wav.mp3',
  c: 'C',
  cName: 'Low Tom',
  cClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/339[kb]ambient_tom_3.aif.mp3',
  currentSound: 'Standard Kit',
  standard: true,
  power: 'on'
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
        qClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/crashes/92[kb]909-bright-crash.aif.mp3',
        wName: 'Open Hi-hat',
        wClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/hats/88[kb]bigopenhh.aif.mp3',
        eName: 'Ride Cymbal',
        eClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/rides/87[kb]cleanride.aif.mp3',
        aName: 'Snare',
        aClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/56[kb]ambient_snare.aif.mp3',
        sName: 'High Tom',
        sClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/260[kb]ambient_tom_1.aif.mp3',
        dName: 'Mid Tom',
        dClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/307[kb]ambient_tom_2.aif.mp3',
        zName: 'Closed Hi-hat',
        zClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/hats/10[kb]clear-hat.aif.mp3',
        xName: 'Bass Drum',
        xClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/160[kb]ambient_kick.aif.mp3',
        cName: 'Low Tom',
        cClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/339[kb]ambient_tom_3.aif.mp3',
      }
    case SET_ALT_SOUNDS:
      return {
        ...state,
        qName: 'Space Crash Cymbal',
        qClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/crashes/281[kb]spacecrash.aif.mp3',
        wName: 'Clap',
        wClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/claps/13[kb]Clap2.wav.mp3',
        eName: 'Electro Ride Cymbal',
        eClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/rides/46[kb]electroride.aif.mp3',
        aName: 'Electro Snare',
        aClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/12[kb]elecsnare.aif.mp3',
        sName: 'High Electro om',
        sClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/86[kb]hietom.aif.mp3',
        dName: 'Mid Electro Tom',
        dClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/86[kb]medetom.aif.mp3',
        zName: 'Closed Electro Hi-hat',
        zClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/hats/79[kb]ehat.aif.mp3',
        xName: 'Dance Kick',
        xClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/86[kb]deep_dance_kick_1.aif.mp3',
        cName: 'Low Electro Tom',
        cClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/86[kb]loetom.aif.mp3',
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
    default:
      return state;
  }
}