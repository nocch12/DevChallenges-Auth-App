import React, { FormEvent, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth/useAuth";
import { LOGIN_URL } from "../endpoints";
import { validate } from "../validation/authValidation";
import { makeErrors } from "../validation/responseValidation";

import OAuthIcons from "./OAuthIcons";
import Button from "../components/Button";
import Input from "../components/Input";
import GlobalLoader from "../components/GlobalLoader";
import DeveloperInfo from "../components/DeveloperInfo";

interface IErrors {
  email?: string;
  password?: string;
}

interface Form {
  [key: string]: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [form, setForm] = useState<Form>({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({} as IErrors);
  const {
    state,
    authStartAction,
    authSuccessAction,
    authFailAction
  } = useAuth();

  const loginHandler = (e: FormEvent): void => {
    e.preventDefault();
    login(form.email, form.password);
  };

  const inputHandler = (key: string, value: string) => {
    const newForm = {
      ...form,
      [key]: value
    };
    setForm(newForm);
    setErrorsHandler(key, value);
  };

  const setErrorsHandler = (key: string, value: string) => {
    const errorMsg = validate(key, value);
    const newErrors = {
      [key]: errorMsg
    };
    setErrors({ ...errors, ...newErrors });
  };

  const login = useCallback(
    (email: string, password: string) => {
      authStartAction();

      // ログイン時にCSRFトークンを初期化
      axios.get("/sanctum/csrf-cookie").then(response => {
        setErrors({});
        axios
          .post(LOGIN_URL, {
            email,
            password
          })
          .then(res => {
            if (res.data.result) {
              authSuccessAction(res.data.user);
            } else {
              authFailAction();
            }
          })
          .catch(err => {
            const newErrors = makeErrors(err.response.data.errors);
            setErrors({ ...errors, ...newErrors });
            authFailAction();
          });
      });
    },
    [authStartAction, authSuccessAction, authFailAction]
  );

  const loader = useMemo(() => {
    return state.loading ? <GlobalLoader /> : null;
  }, [state]);

  return (
    <React.Fragment>
      {loader}
      <div className="max-w-lg w-full mb-6 px-5 md:px-0">
        <div className="md:border border-mygray-200 bg-white rounded-card pt-12 md:pb-10 md:px-14">
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
            <form onSubmit={loginHandler}>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  errorMessage={errors.email}
                  onChange={(e: any) => inputHandler("email", e.target.value)}
                />
              </div>
              <div className="mb-6">
                <Input
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  errorMessage={errors.password}
                  onChange={(e: any) =>
                    inputHandler("password", e.target.value)
                  }
                />
              </div>
              <div>
                <Button type="submit">Login</Button>
              </div>
            </form>
          </section>
          {/* social */}
          <section className="sm:px-16">
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
        <DeveloperInfo />
      </div>
    </React.Fragment>
  );
};

export default Login;
