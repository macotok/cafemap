const hoge = (state = {foo: 'foo'}, action) => {
  switch (action.type) {
    case 'FOO':
      return {...state, foo: action.payload};
    default:
      return state;
  }
};

export default hoge;
