import { PROCESS_DATA_REQUEST, PROCESS_DATA_SUCCESS } from '../actions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case PROCESS_DATA_REQUEST:
      return state;
    case PROCESS_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}