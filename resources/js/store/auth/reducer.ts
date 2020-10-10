import React from "react";
import { IAuthState } from "../../types";
import { ActionType } from "./actions";
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT } from "./actions";

export const initialState: IAuthState = {
  id: "",
  email: "",
  image: "",
  biography: "",
  phone: "",
  errors: {},
  loading: false,
  authRedirectPath: "/",
  initChecking: true
};

const reducer = (state: IAuthState, action: ActionType): IAuthState => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return {
        ...state,
        id: action.id,
        email: action.email,
        errors: {},
        loading: false,
        initChecking: false
      };
    case AUTH_FAIL:
      return {
        ...state,
        errors: action.errors || {},
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
