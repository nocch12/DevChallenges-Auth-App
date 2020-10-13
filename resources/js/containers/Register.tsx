import React, { FormEvent, useState, useCallback, useMemo } from "react";
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth/useAuth";
import {REGISTER_URL} from '../endpoints'

import OAuthIcons from "./OAuthIcons";
import Button from "../components/Button";
import GlobalLoader from "../components/GlobalLoader";
import ErrorText from "../components/ErrorText";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { state, authStartAction, authSuccessAction, authFailAction} = useAuth();

  const registerHandler = (e: FormEvent): void => {
    e.preventDefault();
    register(email, password, passwordConfirmation);
  };

  const register = useCallback((email: string, password: string, passwordConfirmation: string) => {
    authStartAction();

    // ログイン時にCSRFトークンを初期化
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios
        .post(REGISTER_URL, {
          email,
          password,
          password_confirmation: passwordConfirmation,
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
                <h3 className="text-lg font-semibold">
                  <span className="sm:block">
                    Join thousands of learners from
                  </span>
                  <span className="sm:block">around the world</span>
                </h3>
              </div>
              <div>
                <p className="text-base">
                  <span className="sm:block">
                    Master web development by making real-life
                  </span>
                  <span className="sm:block">
                    projects. There are multiple paths for you to
                  </span>
                  <span className="sm:block">choose</span>
                </p>
              </div>
            </section>
            {/* form */}
            <section className="mb-8">
              {errors}
              <form onSubmit={registerHandler}>
                <div className="mb-4">
                  <input
                    className="appearance-none block w-full bg-white text-black placeholder-mygray-200 border border-mygray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="appearance-none block w-full bg-white text-black placeholder-mygray-200 border border-mygray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="appearance-none block w-full bg-white text-black placeholder-mygray-200 border border-mygray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Password Repeat"
                    value={passwordConfirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                  />
                </div>
                <div>
                  <Button type="submit">Start coding now</Button>
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
                  <span>Adready a member?</span>
                  <NavLink to="/login" className="text-myblue-200">
                    {" "}
                    Login
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

export default Register;
