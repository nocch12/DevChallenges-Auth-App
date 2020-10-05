import React, { FormEvent, useContext, useState } from "react";
import {NavLink} from 'react-router-dom';
import { authContext } from "../store/contexts/auth-context";
import axios from 'axios';

const Login: React.FC = () => {
  const { isAuth, setIsAuth } = useContext(authContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e: FormEvent): void => {
    e.preventDefault();
    // ログイン時にCSRFトークンを初期化
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post('/api/login', {
        email,
        password,
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err.response);
      })
    });
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <NavLink to="/logout">logout</NavLink>
        <div className="max-w-lg w-full mb-6">
          <div className="border border-mygray-200 bg-white rounded-card pt-12 pb-10 px-14">
            {/* introduction */}
            <section className="mb-8">
              <div className="mb-6">
                <h2>devChallenges</h2>
              </div>
              <div className="mb-3">
                <h3 className="text-lg font-semibold">
                  Login
                </h3>
              </div>
            </section>
            {/* form */}
            <section className="mb-8">
              <form onSubmit={login}>
                <div className="mb-4">
                  <input
                    className="appearance-none block w-full bg-white text-black placeholder-mygray-200 border border-mygray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="appearance-none block w-full bg-white text-black placeholder-mygray-200 border border-mygray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button type="submit" className="block w-full bg-myblue-100 hover:bg-myblue-dark text-white py-2 px-4 rounded-lg">
                    Login
                  </button>
                </div>
              </form>
            </section>
            {/* social */}
            <section>
              <div className="mb-6 text-center text-mygray-200">
                <p>
                or continue with these social profile
                </p>
              </div>
              <div className="mb-6">

              </div>
              <div className="mb-6">
                <p className="text-center text-mygray-200">
                  <span>
                    Don’t have an account yet?
                  </span>
                  <NavLink to="/register" className="text-myblue-200"> Register</NavLink>
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
