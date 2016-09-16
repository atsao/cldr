import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  PROCESS_DATA_REQUEST,
  PROCESS_DATA_SUCCESS } from '../actions';

const INITIAL_STATE = false;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_DATA_REQUEST:
      return true;
    case GET_DATA_SUCCESS:
      return false;
    case PROCESS_DATA_REQUEST:
      return true;
    case PROCESS_DATA_SUCCESS:
      return false;
    default:
      return state;
  }
}