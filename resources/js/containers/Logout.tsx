import React, {useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom';

import {Context} from '../store/auth/context';

import Button from '../components/Button';

const Logout = () => {
  const {logout} = useContext(Context);

  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/login" />;
}

export default Logout;
