import {
  SET_CURRENT_SOUND
} from './types';

export const setCurrentSound = (data) => {
  return {
    type: SET_CURRENT_SOUND,
    payload: data
  }
}