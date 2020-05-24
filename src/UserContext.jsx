import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

export function UserProvider(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'login':
        return {
          name: action.name,
          isLoggedIn: true,
          isAdmin: action.isAdmin,
          isReadOnly: action.isReadOnly,
        };
      case 'logout':
        return {
          name: '',
          isLoggedIn: false,
          isAdmin: false,
          isReadOnly: false,
        };
      case 'enable-readonly':
        return {
          ...state,
          isReadOnly: true,
        };
      case 'disable-readonly':
        return {
          ...state,
          isReadOnly: false,
        };
      default:
        return state;
    }
  };

  const [user, dispatch] = useReducer(reducer, {
    name: '',
    isLoggedIn: false,
    isAdmin: false,
    isReadOnly: false,
  })

  return (
    <UserContext.Provider value={[user, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
}
