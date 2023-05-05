import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const initialSate = {users};
const UsersContext = createContext({});

export const UsersProvider = props => {
  function reducer(state, action) {
    if (action.type === 'deleteUser') {
      const user = action.payload;
      return {
        ...state,
        users: state.users.filter(u => u.id !== user.id),
      };
    }
    return state;
  }

  const [state, dispatch] = useReducer(reducer, initialSate);

  return (
    <UsersContext.Provider value={{state, dispatch}}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
