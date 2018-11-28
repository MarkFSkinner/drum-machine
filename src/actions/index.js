import {
  SET_CURRENT_SOUND,
  SET_STANDARD_SOUNDS,
  SET_ALT_SOUNDS,
  UPDATE_STANDARD,
  SET_POWER,
  UPDATE_ICON,
  UPDATE_CURRENT_VOLUME,
  SET_MUTED,
  UPDATE_VOLUME_VALUE
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

export const updateIcon = (data) => {
  return {
    type: UPDATE_ICON,
    payload: data
  }
}

export const updateCurrentVolume = (data) => {
  return {
    type: UPDATE_CURRENT_VOLUME,
    payload: data
  }
}

export const setMuted = () => {
  return {
    type: SET_MUTED
  }
}

export const updateVolumeValue = (data) => {
  return {
    type: UPDATE_VOLUME_VALUE,
    payload: data
  }
}