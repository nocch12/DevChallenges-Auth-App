import React from 'react';

const Input: React.FC<any> = (props) => {
  return (
      <input
        className="appearance-none block w-full bg-white text-black placeholder-mygray-200 border border-mygray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none"
        {...props}
      />
  );
}

export default Input;
