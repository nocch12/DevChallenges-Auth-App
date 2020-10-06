import React, { useReducer, useCallback } from "react";
import { authStart, authSuccess, authFail } from "../store/auth/actions";
import reducer, { initialState } from "../store/auth/reducer";
import axios from "axios";

export const useAuth = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = useCallback((email: string, password: string) => {
    dispatch(authStart());

    // ログイン時にCSRFトークンを初期化
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post('/api/login', {
        email,
        password,
      }).then(res => {
        console.log(res);
        dispatch(authSuccess(res.data.user.id, res.data.user.email));
      }).catch(err => {
        dispatch(authFail(err));
        console.log(err.response);
      })
    });
  }, [dispatch, authStart, authSuccess, authFail]);

  return {state, login}
};
