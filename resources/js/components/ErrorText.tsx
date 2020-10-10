import React from 'react';

type PropType = {
  children: string;
}

const ErrorText: React.FC<PropType> = ({children}) => {
  return (
    <p className="text-myred">
      {children}
    </p>
  );
}

export default ErrorText;
