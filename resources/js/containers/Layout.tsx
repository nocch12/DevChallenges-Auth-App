import React from "react";
import { useAuth } from "../store/auth/useAuth";

import Header from "../components/Header";

const Layout: React.FC<any> = ({ children }) => {
  const { state } = useAuth();

  console.log(state);

  let header = null;
  let mainClasses = ["min-h-screen"];

  if (state.profile.id) {
    header = <Header />;
    mainClasses.push("bg-mygray-300 pt-12 md:pt-16");
  } else {
    mainClasses.push("flex justify-center items-center");
  }

  return (
    <React.Fragment>
      {header}
      <main className={mainClasses.join(" ")}>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
