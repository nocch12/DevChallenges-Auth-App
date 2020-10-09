import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const GlobalLoader:  React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader
        type="Bars"
        color="#2F80ED"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default GlobalLoader;
