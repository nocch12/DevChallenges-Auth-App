import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const logout = () => {
    axios.get('/api/logout');
  }

  useEffect(() => {
    logout();
  }, [logout]);


  return <Redirect to="/login" />;
}

export default Logout;
