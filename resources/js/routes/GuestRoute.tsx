import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AuthRoute: React.FC<any> = ({user, component: Comp, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !user.id ? (
          <Comp {...props} />
        ) : (
          <Redirect to='/user' />
        )
      }
    />
  );
}

export default AuthRoute;
