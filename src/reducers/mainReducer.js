import {
  TRIAL_ACTION
} from '../actions/types';

const initialState = {};

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