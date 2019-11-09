import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import hoge from './hoge';

export default combineReducers({
  form,
  hoge
});
