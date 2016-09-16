import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Data from './data';
import Query from './query';

export default combineReducers({
  data: Data,
  query: Query,
  routing: routerReducer
});