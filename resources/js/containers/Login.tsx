import React, { FormEvent, useState, useCallback, useMemo } from "react";
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth/useAuth";
import {LOGIN_URL} from '../endpoints'

import OAuthIcons from "./OAuthIcons";
import Button from "../components/Button";
import Input from "../components/Input";
import GlobalLoader from "../components/GlobalLoader";
import ErrorText from "../components/ErrorText";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, authStartAction, authSuccessAction, authFailAction} = useAuth();

  const loginHandler = (e: FormEvent): void => {
    e.preventDefault();
    login(email, password);
  };

  const login = useCallback((email: string, password: string) => {
    authStartAction();

    // ログイン時にCSRFトークンを初期化
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios
        .post(LOGIN_URL, {
          email,
          password
        })
        .then(res => {
          if(res.data.result) {
            authSuccessAction(res.data.user);
          } else {
            authFailAction();
          }
        })
        .catch(err => {
          authFailAction();
        });
    });
  }, [authStartAction, authSuccessAction, authFailAction]);

  const loader = useMemo(() => {
    return state.loading ? <GlobalLoader /> : null;
  }, [state]);

  const errors = useMemo(() => {
    const keys = Object.keys(state.errors);
    if (!keys.length) return null;

    return keys.map(key => {
      const text = state.errors[key];
      return text ? <ErrorText key={key}>{text}</ErrorText> : null;
    });
  }, [state]);

  return (
    <div>
      {loader}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-lg w-full mb-6">
          <div className="border border-mygray-200 bg-white rounded-card pt-12 pb-10 px-14">
            {/* introduction */}
            <section className="mb-8">
              <div className="mb-6">
                <h2>devChallenges</h2>
              </div>
              <div className="mb-3">
                <h3 className="text-lg font-semibold">Login</h3>
              </div>
            </section>
            {/* form */}
            <section className="mb-8">
              {errors}
              <form onSubmit={loginHandler}>
                <div className="mb-4">
                  <input
                    className="appearance-none block w-full bg-white text-black placeholder-mygray-200 border border-mygray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <Button type="submit">Login</Button>
                </div>
              </form>
            </section>
            {/* social */}
            <section>
              <div className="mb-6 text-center text-mygray-200">
                <p>or continue with these social profile</p>
              </div>
              <div className="mb-6">
                <OAuthIcons />
              </div>
              <div className="mb-6">
                <p className="text-center text-mygray-200">
                  <span>Don’t have an account yet?</span>
                  <NavLink to="/register" className="text-myblue-200">
                    {" "}
                    Register
                  </NavLink>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
