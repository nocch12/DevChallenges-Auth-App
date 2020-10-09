import React, { FormEvent, useState } from "react";
import {NavLink} from 'react-router-dom';
import { useAuth } from "../store/auth/useAuth";

import Button from '../components/Button';
import Input from '../components/Input';
import SocialIcons from '../components/SocialIcons';

const logo = require('../../icons/google-icon.svg') as string;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {state, login} = useAuth();

  const loginHandler = (e: FormEvent): void => {
    e.preventDefault();
    login(email, password);
  }

  const socialLoginHandler = async (type: string) => {
    const w: any = window.open('/oauth/google', 'login', 'width=500px,height=600px');

    let closed = false;
    const windowWatcher = () => {
      setTimeout(() => {
        try {
          console.log(w);

          if(w && w.opener && w.closed) {
            console.log('closed');
          } else {
            console.log("else");

            windowWatcher();
          }
        } catch (error) {
          console.log(error);
          windowWatcher();
        }
      }, 1000);
    }
    windowWatcher();
    // setInterval(() => {
    //   if(w && w.opener && w.closed) {
    //     console.log(w);
    //     // console.log(w.opener);
    //     // console.log(w.closed);
    //     // console.log(w);
    //   }
    // }, 1000)
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
                <a href="/oauth/google">aaa</a>
                <h3 className="text-lg font-semibold">
                  Login
                </h3>
              </div>
            </section>
            {/* form */}
            <section className="mb-8">
              <form onSubmit={loginHandler}>
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
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <Button type="submit">
                    Login
                  </Button>
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
                <SocialIcons clicked={socialLoginHandler} />
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
