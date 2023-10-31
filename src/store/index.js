import { combineReducers } from 'redux';
import loading from './loading';
import chara from './chara';

const rootReducer = combineReducers({
  loading,
  chara
});

export default rootReducer;