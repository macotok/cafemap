import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from '../reducers';

const makeStore = (initialState: any) => (
  createStore(
    reducer,
    initialState,
    devToolsEnhancer({})
  )
);

export default makeStore;
