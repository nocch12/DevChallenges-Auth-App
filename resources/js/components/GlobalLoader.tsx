import React from 'react';
import Loader from "./Loader";

const GlobalLoader:  React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-white bg-opacity-75">
      <Loader />
    </div>
  );
}

export default GlobalLoader;
