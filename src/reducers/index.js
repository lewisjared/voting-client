import {combineReducers} from 'redux'

import vote from './vote';
import client from './client';

export default combineReducers({
  vote,
  client
});