import {
  SET_CURRENT_SOUND,
  SET_STANDARD_SOUNDS,
  SET_ALT_SOUNDS,
  UPDATE_STANDARD,
  SET_POWER
} from './types';

export const setCurrentSound = (data) => {
  return {
    type: SET_CURRENT_SOUND,
    payload: data
  }
}

export const setStandardSounds = () => {
  return {
    type: SET_STANDARD_SOUNDS
  }
}

export const setAltSounds = () => {
  return {
    type: SET_ALT_SOUNDS
  }
}

export const updateStandard = () => {
  return {
    type: UPDATE_STANDARD
  }
}

export const setPower = (data) => {
  return {
    type: SET_POWER,
    payload: data
  }
}
