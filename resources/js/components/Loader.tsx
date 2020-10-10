import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderSpinner from "react-loader-spinner";

const Loader = () => {
  return (
    <LoaderSpinner
      type="Bars"
      color="#2F80ED"
      height={100}
      width={100}
      timeout={0}
    />
  );
}

export default Loader;
