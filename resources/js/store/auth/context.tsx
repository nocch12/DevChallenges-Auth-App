import React, {useReducer} from "react";
import { ContextType } from "../../types";
import reducer, { initialState } from "./reducer";

export const Context = React.createContext({} as ContextType);

export const Provider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>;
};
