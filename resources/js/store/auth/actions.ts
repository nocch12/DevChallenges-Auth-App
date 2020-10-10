export const AUTH_START = 'AUTH_START' as const;
export const AUTH_SUCCESS = 'AUTH_SUCCESS' as const;
export const AUTH_FAIL = 'AUTH_FAIL' as const;
export const LOGOUT = 'LOGOUT' as const;

export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH' as const;

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

export const authFail = (errors: {}) => {
  return {
    type: AUTH_FAIL,
    errors,
  }
}

export const authLogout = () => {
  return {
    type: LOGOUT,
  }
}
