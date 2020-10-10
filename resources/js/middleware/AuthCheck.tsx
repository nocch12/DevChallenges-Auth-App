import React, {useEffect} from "react";
import GlobalLoader from '../components/GlobalLoader'
import { useAuth } from "../store/auth/useAuth";

const AuthCheck: React.FC<any> = ({ children }) => {
  const { state, authCheck } = useAuth();
  useEffect(() => {
    authCheck();
  }, [authCheck]);

  let el = <GlobalLoader />;
  if (!state.initChecking) {
    el = <div>{children}</div>;
  }

  return el;
};

export default AuthCheck;
