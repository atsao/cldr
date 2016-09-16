import { GET_QUERY_LIST, ADD_QUERY, REMOVE_QUERY } from '../actions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_QUERY_LIST:
      return state;
    case ADD_QUERY:
      return [ ...state, action.payload];
    case REMOVE_QUERY:
      let query = action.payload;
      return state.filter(item => item !== query);
    default:
      return state;
  }
}