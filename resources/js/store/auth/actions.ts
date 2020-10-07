export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const LOGOUT = 'LOGOUT';

export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';

export type ActionType = (
  | ReturnType<typeof authStart>
  | ReturnType<typeof authSuccess>
  | ReturnType<typeof authFail>
  | ReturnType<typeof authLogout>
)

export const authStart = () => {
  return {
    type: AUTH_START,
  }
}

export const authSuccess = (id: string, email: string) => {
  return {
    type: AUTH_SUCCESS,
    id,
    email,
  }
}

export const authFail = (error: any) => {
  return {
    type: AUTH_FAIL,
    error,
  }
}

export const authLogout = () => {
  return {
    type: LOGOUT,
  }
}
