import { GET_QUERY_LIST, ADD_QUERY, REMOVE_QUERY } from '../actions';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_QUERY_LIST:
      return state;
    case ADD_QUERY:
      let keyName = action.payload;
      return {
        ...state,
        [keyName]: []
      };
    case REMOVE_QUERY:
      return removeByKey(state, action.payload);
    default:
      return state;
  }
}

// From Tyler McGinnes
const removeByKey = (myObj, deleteKey) => {
  return Object.keys(myObj)
    .filter(key => key !== deleteKey)
    .reduce((result, current) => {
      result[current] = myObj[current];
      return result;
  }, {});
}