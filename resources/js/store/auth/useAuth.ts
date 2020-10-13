import React, { useCallback, useContext } from "react";
import { authStart, authSuccess, authFail, authLogout } from "./actions";
import { Context } from "./context";
import { Iprofile, SocialName } from "../../types";
import {
  GET_USER_URL,
  LOGOUT_URL,
} from "../../endpoints";
import axios from "axios";

export const useAuth = () => {
  const { state, dispatch } = useContext(Context);

  const authStartAction = useCallback(() => {
    dispatch(authStart());
  }, [dispatch, authStart]);

  const authSuccessAction = useCallback((profile: Iprofile) => {
    dispatch(authSuccess(profile));
  }, [dispatch, authSuccess]);

  const authFailAction = useCallback(() => {
    dispatch(authFail());
  }, [dispatch, authFail]);

  const authCheck = useCallback(() => {
    // // ログイン時にCSRFトークンを初期化
    axios
      .get(GET_USER_URL)
      .then(res => {
        if(res.data.success) {
          dispatch(authSuccess(res.data));
        } else {
          dispatch(authFail());
        }
      })
      .catch(err => {
        dispatch(authFail());
      });
  }, [dispatch, authStart, authSuccess, authFail]);

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

  return { state, authStartAction, authSuccessAction, authFailAction, logout, oauth, authCheck };
};
