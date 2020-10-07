import React, {useReducer, useMemo} from "react";
import { IAuthState, ContextType } from "../../types";
import {useAuth} from './useAuth';

export const Context = React.createContext({} as ContextType);

export const Provider: React.FC<{}> = ({ children }) => {
  const {state, login, logout, register, authCheck} = useAuth();

  const ContextValue = useMemo(() => {
    return {state, login, logout, register, authCheck}
  }, [state, login, logout, register, authCheck]);


  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};
