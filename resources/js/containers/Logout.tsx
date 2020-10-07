import React, {useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom';

import {Context} from '../store/auth/context';

const Logout = () => {
  const {logout} = useContext(Context);

  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/login" />;
}

export default Logout;
