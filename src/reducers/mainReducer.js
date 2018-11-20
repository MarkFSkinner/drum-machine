import {
  TRIAL_ACTION
} from '../actions/types';

const initialState = {
  q: 'Q', //crash cymbal
  qClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/crashes/92[kb]909-bright-crash.aif.mp3',
  w: 'W', //open hi-hat
  wClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/hats/88[kb]bigopenhh.aif.mp3',
  e: 'E', //ride cymbal
  eClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/rides/87[kb]cleanride.aif.mp3',
  a: 'A', //snare
  aClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/56[kb]ambient_snare.aif.mp3',
  s: 'S', //high tom
  sClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/260[kb]ambient_tom_1.aif.mp3',
  d: 'D', //mid tom
  dClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/307[kb]ambient_tom_2.aif.mp3',
  z: 'Z', //closed hi-hat
  zClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/hats/10[kb]clear-hat.aif.mp3',
  x: 'X', //bass drum
  xClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/160[kb]ambient_kick.aif.mp3',
  //xClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/61[kb]bass-kickers-2.wav.mp3',
  c: 'C', //low tom
  cClip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/339[kb]ambient_tom_3.aif.mp3'
};

export default function(state = initialState, action) {
  switch(action.type) {
    case TRIAL_ACTION:
      return {
        ...state,
        newData: action.payload
      }
    default:
      return state;
  }
}