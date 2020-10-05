/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');


import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Register from './containers/Register';
import {AuthProvider} from './store/contexts/auth-context';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}

