import React from 'react';
import {useAuth} from '../store/auth/useAuth'

import Header from "../components/Header";


const Layout: React.FC<any> = ({children}) => {
  const {state} = useAuth();

  console.log(state);

  let header = null;
  let mainClasses = [
    'min-h-screen flex items-center justify-center pt-6 px-6'
  ];

  if(state.profile.id) {
    header = <Header />;
    mainClasses.push('bg-mygray-300');
  }


  return (
    <React.Fragment>
      {header}
      <main className={mainClasses.join(' ')}>
        {children}
      </main>
    </React.Fragment>
  );
}

export default Layout;
