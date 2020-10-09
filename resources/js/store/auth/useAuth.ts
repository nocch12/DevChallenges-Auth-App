import React, { useReducer, useCallback, useContext } from "react";
import { authStart, authSuccess, authFail, authLogout } from "./actions";
import reducer, { initialState } from "./reducer";
import { Context } from "./context";
import { GET_USER_URL, LOGOUT_URL, LOGIN_URL, REGISTER_URL } from '../../endpoints'
import axios from "axios";

export const useAuth = () => {
  const {state, dispatch} = useContext(Context);

  const authCheck = useCallback(() => {

    // // ログイン時にCSRFトークンを初期化
    // axios.get("/sanctum/csrf-cookie").then(response => {
      axios.get(GET_USER_URL).then(res => {
        dispatch(authSuccess(res.data.id, res.data.email));
      }).catch(err => {
        dispatch(authFail(err));
      })
    // });
  }, [dispatch, authStart, authSuccess, authFail]);

  const login = useCallback((email: string, password: string) => {
    dispatch(authStart());

    // ログイン時にCSRFトークンを初期化
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post(LOGIN_URL, {
        email,
        password,
      }).then(res => {
        dispatch(authSuccess(res.data.user.id, res.data.user.email));
      }).catch(err => {
        dispatch(authFail(err));
      })
    });
  }, [dispatch, authStart, authSuccess, authFail]);

  const logout = useCallback(() => {
    // ログイン時にCSRFトークンを初期化
    axios.get(LOGOUT_URL).finally(() => {dispatch(authLogout())});
  }, [dispatch, authLogout]);

  const register = useCallback((email: string, password: string, passwordConfirmation: string) => {
    dispatch(authStart());

    // ログイン時にCSRFトークンを初期化
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post(REGISTER_URL, {
        email,
        password,
        password_confirmation: passwordConfirmation,
      }).then(res => {
        dispatch(authSuccess(res.data.user.id, res.data.user.email));
      }).catch(err => {
        dispatch(authFail(err));
      })
    });
  }, [dispatch, authStart, authSuccess, authFail]);

  return {state, login, logout, register, authCheck}
};