import React from 'react';
import Loader from "./Loader";

const GlobalLoader:  React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-25">
      <Loader />
    </div>
  );
}

export default GlobalLoader;
