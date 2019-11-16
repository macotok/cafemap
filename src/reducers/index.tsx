import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import hoge from '@/reducers/hoge';

export default combineReducers({
  form,
  hoge
});
