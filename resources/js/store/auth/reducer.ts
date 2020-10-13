import React from "react";
import { IAuthState, Iprofile } from "../../types";
import { ActionType } from "./actions";
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT } from "./actions";

export const initialProfile: Iprofile = {
  id: '',
  email: '',
  phone: '',
  image: '',
  biography: '',
  age: '',
  name: ''
}

export const initialState: IAuthState = {
  profile: {...initialProfile},
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
        profile: action.profile,
        loading: false,
        initChecking: false
      };
    case AUTH_FAIL:
      return {
        ...state,
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
