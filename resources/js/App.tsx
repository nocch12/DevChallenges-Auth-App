/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

import React from "react";
import { Switch, BrowserRouter, Redirect } from "react-router-dom";
import {useAuth} from './store/auth/useAuth'
import AuthRoute from './routes/AuthRoute';
import GuestRoute from './routes/GuestRoute';

import Layout from './containers/Layout'
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import Register from "./containers/Register";
import User from "./containers/User";
import Edit from "./containers/Edit";

const App: React.FC = () => {
  const {state} = useAuth();

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <GuestRoute path="/login" user={state.profile} component={Login} />
          <GuestRoute path="/register" user={state.profile} component={Register} />
          <AuthRoute path="/user" exact user={state.profile} component={User} />
          <AuthRoute path="/user/edit" user={state.profile} component={Edit} />
          <AuthRoute path="/logout" user={state.profile} component={Logout} />
          <Redirect to="/login" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
