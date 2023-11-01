import { combineReducers } from 'redux';
import loading from './loading';
import common from './common';
import chara from './chara';

const rootReducer = combineReducers({
  loading,
  common,
  chara
});

export default rootReducer;