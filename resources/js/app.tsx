/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

import React, { useEffect, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import Register from "./containers/Register";
import User from "./containers/User";
import Loader from "./components/Loader";
import { Context } from "./store/auth/context";

const App: React.FC = () => {
  const { state, authCheck } = useContext(Context);

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  let loader = null;
  if (state.initChecking) loader = <Loader />;

  let routes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" render={() => <Redirect to="/register" />} />
    </Switch>
  );

  if (state.id) {
    routes = (
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/logout" component={Logout} />
        <Route path="/" render={() => <Redirect to="/user" />} />
      </Switch>
    );
  }
  return (
    <React.Fragment>
      {loader}
      {routes}
    </React.Fragment>
  );
};

export default App;
