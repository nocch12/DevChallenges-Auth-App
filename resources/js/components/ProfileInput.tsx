import React from "react";

type PropType = {
  label: string;
  name: string;
  value: string;
  type: string;
  placeholder?: string;
  [key: string]: any;
}

const ProfileInput: React.FC<PropType> = React.memo(({label, name, placeholder, value, type, changed}) => {
  return (
    <React.Fragment>
      <label className="text-sm" htmlFor={`${name}-input`}>
        {label}
      </label>
      <input
        id={`${name}-input`}
        className="w-full block border rounded-xl border-mygray-100 placeholder-mygray-200 text-sm p-4 outline-none bg-transparent"
        type={type}
        placeholder={placeholder || ''}
        value={value}
        onChange={changed}
      />
    </React.Fragment>
  );
});

export default ProfileInput;
