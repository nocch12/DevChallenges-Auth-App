import React from "react";
import { IAuthState } from "../../types";
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT } from "./actions";

export const initialState: IAuthState = {
  id: "",
  email: "",
  image: "",
  biography: "",
  phone: "",
  error: null,
  loading: false,
  authRedirectPath: "/",
  initChecking: true
};

const reducer = (state: IAuthState, action: any): IAuthState => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return {
        ...state,
        id: action.id,
        email: action.email,
        error: null,
        loading: false,
        initChecking: false
      };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        initChecking: false
      };
    case LOGOUT:
      return {
        ...initialState,
        initChecking: false
      };

    default:
      return state;
  }
};

export default reducer;
