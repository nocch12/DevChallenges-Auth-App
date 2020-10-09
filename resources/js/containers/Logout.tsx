import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { useAuth } from "../store/auth/useAuth";

const Logout = () => {
  const {logout} = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/login" />;
}

export default Logout;
