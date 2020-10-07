import React, {ComponentProps} from "react";

const Button: React.FC<any> = (props) => {
  return (
    <button
      className="block w-full bg-myblue-100 hover:bg-myblue-dark text-white py-2 px-4 rounded-lg"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
