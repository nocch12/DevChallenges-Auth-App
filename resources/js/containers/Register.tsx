import React, { FormEvent, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth/useAuth";
import { REGISTER_URL } from "../endpoints";

import OAuthIcons from "./OAuthIcons";
import Button from "../components/Button";
import Input from "../components/Input";
import GlobalLoader from "../components/GlobalLoader";
import { validate } from "../validation/authValidation";

interface IErrors {
  email?: Array<string>;
  password?: Array<string>;
  password_confirmation?: Array<string>;
}

interface Form {
  [key: string]: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const Register: React.FC = () => {
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
    password_confirmation: ""
  });
  const [errors, setErrors] = useState({} as IErrors);
  const {
    state,
    authStartAction,
    authSuccessAction,
    authFailAction
  } = useAuth();

  const registerHandler = (e: FormEvent): void => {
    e.preventDefault();
    register(form.email, form.password, form.password_confirmation);
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

  const register = useCallback(
    (email: string, password: string, password_confirmation: string) => {
      authStartAction();

      // ログイン時にCSRFトークンを初期化
      axios.get("/sanctum/csrf-cookie").then(response => {
        axios
          .post(REGISTER_URL, {
            email,
            password,
            password_confirmation
          })
          .then(res => {
            if (res.data.result) {
              authSuccessAction(res.data.user);
            } else {
              authFailAction();
            }
          })
          .catch(err => {
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
              <form onSubmit={registerHandler}>
                <div className="mb-4">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    errorMessage={errors.email}
                    onChange={(e: any) => inputHandler("email", e.target.value)}
                  />
                </div>
                <div className="mb-4">
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
                <div className="mb-6">
                  <Input
                    type="password"
                    placeholder="Password confirmation"
                    value={form.password_confirmation}
                    errorMessage={errors.password_confirmation}
                    onChange={(e: any) =>
                      inputHandler("password_confirmation", e.target.value)
                    }
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
