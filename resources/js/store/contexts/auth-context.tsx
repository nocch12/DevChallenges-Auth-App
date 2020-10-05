import React, {createContext, useState, useReducer} from 'react';
import {IAuthProviderProps} from '../../interfaces/interfaces';

type AuthContext = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const authContext = createContext({} as AuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <authContext.Provider value={{isAuth, setIsAuth}}>
      {children}
    </authContext.Provider>
  );
}
