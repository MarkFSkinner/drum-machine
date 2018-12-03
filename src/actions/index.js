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

/*export const updateAnimation = (data) => {
  return {
    type: UPDATE__ANIMATION,
    payload: data
  }
}*/

export const updateAnimationQ = (data) => {
  return {
    type: UPDATE_Q_ANIMATION,
    payload: data
  }
}

export const updateAnimationW = (data) => {
  return {
    type: UPDATE_W_ANIMATION,
    payload: data
  }
}

export const updateAnimationE = (data) => {
  return {
    type: UPDATE_E_ANIMATION,
    payload: data
  }
}

export const updateAnimationA = (data) => {
  return {
    type: UPDATE_A_ANIMATION,
    payload: data
  }
}

export const updateAnimationS = (data) => {
  return {
    type: UPDATE_S_ANIMATION,
    payload: data
  }
}

export const updateAnimationD = (data) => {
  return {
    type: UPDATE_D_ANIMATION,
    payload: data
  }
}

export const updateAnimationZ = (data) => {
  return {
    type: UPDATE_Z_ANIMATION,
    payload: data
  }
}

export const updateAnimationX = (data) => {
  return {
    type: UPDATE_X_ANIMATION,
    payload: data
  }
}

export const updateAnimationC = (data) => {
  return {
    type: UPDATE_C_ANIMATION,
    payload: data
  }
}