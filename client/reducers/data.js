import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE } from '../actions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_DATA_REQUEST:
      return state;
    case GET_DATA_SUCCESS:
      return action.payload;
    case GET_DATA_FAILURE:
      return action.payload;
    default:
      return state;
  }
}