import {
  TRIAL_ACTION
} from './types';

export const trialAction = (data) => {
  return {
    type: TRIAL_ACTION,
    payload: data
  }
}