import React, { useReducer } from 'react';
import AppContext from '../contexts/AppContext.js';
import reducer from '../reducers';

const Provider = ({ children }) => {
  const initialState = {
    hoge: 'hoge'
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
};

export default Provider;
