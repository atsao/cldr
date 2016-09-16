import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Data from './data';
import Query from './query';
import Current from './current';
import Loading from './loading';

export default combineReducers({
  data: Data,
  query: Query,
  current: Current,
  isLoading: Loading,
  routing: routerReducer
});