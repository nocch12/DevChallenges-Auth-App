import React from 'react';
import {SocialName} from '../types';

import SocialButton from './SocialButton';

type PropType = {
  clicked: (type: SocialName) => void
}

const SocialIcons: React.FC<PropType> = ({clicked}) => {

  const onClick = (type: SocialName) => {
    clicked(type);
  }

  return (
    <div className="flex justify-between px-20">
      <SocialButton type="google" clicked={() =>onClick('google') } />
      <SocialButton type="facebook" clicked={() =>onClick('facebook') } />
      <SocialButton type="twitter" clicked={() =>onClick('twitter') } />
      <SocialButton type="github" clicked={() =>onClick('github') } />
    </div>
  );
}

export default SocialIcons;
