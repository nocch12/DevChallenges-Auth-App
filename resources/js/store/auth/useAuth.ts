import React, { useCallback, useContext } from "react";
import { authStart, authSuccess, authFail, authLogout } from "./actions";
import { Context } from "./context";
import { SocialName } from "../../types";
import {
  GET_USER_URL,
  LOGOUT_URL,
  LOGIN_URL,
  REGISTER_URL
} from "../../endpoints";
import axios from "axios";

export const useAuth = () => {
  const { state, dispatch } = useContext(Context);

  const authCheck = useCallback(() => {
    // // ログイン時にCSRFトークンを初期化
    axios
      .get(GET_USER_URL)
      .then(res => {
        if(res.data.success) {
          dispatch(authSuccess(res.data));
        } else {
          dispatch(authFail({message: 'Sorry, somthing went wrong'}));
        }
      })
      .catch(err => {
        dispatch(authFail({}));
      });
  }, [dispatch, authStart, authSuccess, authFail]);

  const login = useCallback(
    (email: string, password: string) => {
      dispatch(authStart());

      // ログイン時にCSRFトークンを初期化
      axios.get("/sanctum/csrf-cookie").then(response => {
        axios
          .post(LOGIN_URL, {
            email,
            password
          })
          .then(res => {
            if(res.data.success) {
              dispatch(authSuccess(res.data.user));
            } else {
              dispatch(authFail({message: 'Sorry, somthing went wrong'}));
            }
          })
          .catch(err => {
            dispatch(authFail(err.response.data.errors));
          });
      });
    },
    [dispatch, authStart, authSuccess, authFail]
  );

  const oauth = (type: SocialName) => {
    dispatch(authStart());
    const w: any = window.open(
      `/oauth/${type}`,
      "login",
      "width=500px,height=600px"
    );

    const windowWatcher = () => {
      setTimeout(() => {
        try {
          if (w.closed) {
            authCheck();
          } else {
            windowWatcher();
          }
        } catch (error) {
          windowWatcher();
        }
      }, 500);
    };
    windowWatcher();
  };

  const logout = useCallback(() => {
    dispatch(authLogout());
    axios.get(LOGOUT_URL);
  }, [dispatch, authLogout]);

  const register = useCallback(
    (email: string, password: string, passwordConfirmation: string) => {
      dispatch(authStart());

      // ログイン時にCSRFトークンを初期化
      axios.get("/sanctum/csrf-cookie").then(response => {
        axios
          .post(REGISTER_URL, {
            email,
            password,
            password_confirmation: passwordConfirmation
          })
          .then(res => {
            if(res.data.success) {
              dispatch(authSuccess(res.data.user));
            } else {
              dispatch(authFail({message: 'Sorry, somthing went wrong'}));
            }
          })
          .catch(err => {
            dispatch(authFail(err.response.data.errors));
          });
      });
    },
    [dispatch, authStart, authSuccess, authFail]
  );

  return { state, login, logout, register, oauth, authCheck };
};
