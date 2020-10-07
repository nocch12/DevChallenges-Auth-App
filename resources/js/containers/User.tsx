import React from 'react';
import {NavLink} from 'react-router-dom';

const User = () => {
  return (
    <div>
      user
        <NavLink to="/logout">logout</NavLink>
    </div>
  );
}

export default User;
