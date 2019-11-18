import React, { useReducer } from 'react';
import AppContext from '@/contexts/AppContext.js';
import reducer from '@/reducers';
import cafe from '@/store/state/cafe'

const Provider = ({ children }) => {
  const initialState = {
    cafe,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
};

export default Provider;
