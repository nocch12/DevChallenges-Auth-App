import React from "react";
import { IAuthState } from "../../interfaces";
import { ActionType, AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "./actions";

export const initialState: IAuthState = {
  id: "",
  email: "",
  error: null,
  loading: false,
  authRedirectPath: "/"
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return {
        ...state,
        id: action.id,
        email: action.email,
        error: null,
        loading: false
      };
    case AUTH_FAIL:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};

export default reducer;
