import React from 'react';

import SocialButton from './SocialButton';


const SocialIcons: React.FC = () => {

  return (
    <div className="flex justify-between px-20">
      <SocialButton type="google" />
      <SocialButton type="facebook" />
      <SocialButton type="twitter" />
      <SocialButton type="github" />
    </div>
  );
}

export default SocialIcons;
