import React from "react";
import ErrorText from "./ErrorText";

type PropType = {
  errorMessage: string | undefined;
  [key: string]: any;
};

const Input: React.FC<PropType> = ({errorMessage, ...rest}) => {
  let classes =
    "appearance-none block w-full bg-white text-black placeholder-mygray-200 border border-mygray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none";
  let error = null;
  if (errorMessage) {
    error = <ErrorText>{errorMessage}</ErrorText>;
    classes += " border-myred";
  }

  return (
    <React.Fragment>
      <input className={classes} {...rest} />
      {error}
    </React.Fragment>
  );
};

export default Input;
