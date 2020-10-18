import React from "react";

type PropType = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  [key: string]: any;
}

const ProfileTextarea: React.FC<PropType> = React.memo(({label, name, placeholder, value, changed, ...rest}) => {
  return (
    <React.Fragment>
      <label className="text-sm" htmlFor={`${name}-textarea`}>
        {label}
      </label>
      <textarea
        id={`${name}-textarea`}
        className="w-full block border rounded-xl border-mygray-100 placeholder-mygray-200 text-sm p-4 outline-none bg-transparent"
        placeholder={placeholder || ''}
        value={value}
        onChange={changed}
        {...rest}
      ></textarea>
    </React.Fragment>
  );
});

export default ProfileTextarea;
