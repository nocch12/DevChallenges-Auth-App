import React from "react";

type PropType = {
  label: string;
  borderNone?: boolean;
  children: any;
};

const ProfileItem: React.FC<PropType> = ({ label, borderNone, children }) => {
  let mainClasses = ['p-5'];
  if(!borderNone) {
    mainClasses.push('border-b border-mygray-400');
  }
  return (
    <div className={mainClasses.join(' ')}>
      <div className="flex flex-no-wrap items-center justify-between">
        <div className="text-mygray-200 w-56">
          <p>{label}</p>
        </div>
        <div className="text-myblack-100 flex-grow text-right overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
