import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { useAuth } from "../store/auth/useAuth";

import {Context} from '../store/auth/context';

import Button from '../components/Button';

const Logout = () => {
  const {logout} = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/login" />;
}

export default Logout;
