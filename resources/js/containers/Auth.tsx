import React, { FormEvent, useContext, useState } from "react";
import { authContext } from "../store/contexts/auth-context";
import axios from 'axios';

const Auth: React.FC = () => {
  const { isAuth, setIsAuth } = useContext(authContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmaition, setPasswordConfirmaition] = useState('');

  const register = (e: FormEvent): void => {
    e.preventDefault();
    // ログイン時にCSRFトークンを初期化
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post('/api/register', {
        email,
        password,
        password_confirmation: passwordConfirmaition
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
                  <span className="sm:block">
                    around the world
                  </span>
                </h3>
              </div>
              <div>
                <p className="text-base">
                  <span className="sm:block">Master web development by making real-life</span>
                  <span className="sm:block">projects. There are multiple paths for you to</span>
                  <span className="sm:block">choose</span>
                </p>
              </div>
            </section>
            {/* form */}
            <section className="mb-8">
              <form onSubmit={register}>
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
                <div className="mb-6">
                  <input
                    className="appearance-none block w-full bg-white text-black placeholder-mygray-200 border border-mygray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Password Repeat"
                    value={passwordConfirmaition}
                    onChange={(e) => setPasswordConfirmaition(e.target.value)}
                  />
                </div>
                <div>
                  <button type="submit" className="block w-full bg-myblue-100 hover:bg-myblue-dark text-white py-2 px-4 rounded-lg">
                    Button
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
                    Adready a member?
                  </span>
                  <a href="" className="text-myblue-200"> Login</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
