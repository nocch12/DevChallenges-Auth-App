/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth } from "./store/auth/useAuth"
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import Register from "./containers/Register";
import User from "./containers/User";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const { state, authCheck } = useAuth();

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

  // if (state.id) {
  //   routes = (
  //     <Switch>
  //       <Route path="/user" component={User} />
  //       <Route path="/logout" component={Logout} />
  //       <Route path="/" render={() => <Redirect to="/user" />} />
  //     </Switch>
  //   );
  // }
  return (
    <React.Fragment>
      {JSON.stringify(state)}
      {loader}
      {routes}
    </React.Fragment>
  );
};

export default App;
