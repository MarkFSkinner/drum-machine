import {
  SET_CURRENT_SOUND
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
  currentSound: 'Drum Sound'
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_SOUND:
      return {
        ...state,
        currentSound: action.payload
      }
    default:
      return state;
  }
}