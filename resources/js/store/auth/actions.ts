import { Iprofile } from "../../types";

export const AUTH_START = "AUTH_START" as const;
export const AUTH_SUCCESS = "AUTH_SUCCESS" as const;
export const AUTH_FAIL = "AUTH_FAIL" as const;
export const LOGOUT = "LOGOUT" as const;

export const SET_AUTH_REDIRECT_PATH = "SET_AUTH_REDIRECT_PATH" as const;

export type ActionType =
  | ReturnType<typeof authStart>
  | ReturnType<typeof authSuccess>
  | ReturnType<typeof authFail>
  | ReturnType<typeof authLogout>;

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = (profile: Iprofile) => {
  return {
    type: AUTH_SUCCESS,
    profile
  };
};

export const authFail = () => {
  return {
    type: AUTH_FAIL,
  };
};

export const authLogout = () => {
  return {
    type: LOGOUT
  };
};
