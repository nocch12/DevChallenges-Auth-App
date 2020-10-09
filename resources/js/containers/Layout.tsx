import React from 'react';
import {useAuth} from '../store/auth/useAuth'

import Header from "../components/Header";


const Layout: React.FC<any> = ({children}) => {
  const {state} = useAuth();

  let header = null;
  if(state.id) header = <Header />;

  return (
    <React.Fragment>
      {header}
      {children}
    </React.Fragment>
  );
}

export default Layout;
