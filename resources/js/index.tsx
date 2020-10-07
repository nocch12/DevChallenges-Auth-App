/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./store/auth/context";
import App from './App';

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

if (document.getElementById("app")) {
  ReactDOM.render(<Index />, document.getElementById("app"));
}
