import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Data from './data';

export default combineReducers({
  data: Data,
  routing: routerReducer
});