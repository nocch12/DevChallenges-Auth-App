import React from 'react';
import {SocialName} from '../types';

const ICONS = {
  google: require('../../icons/google-icon.svg') as string,
  facebook: require('../../icons/facebook-icon.svg') as string,
  github: require('../../icons/github-icon.svg') as string,
  twitter: require('../../icons/twitter-icon.svg') as string,
}

type PropType = {
  type: SocialName;
}

const SocialIcon: React.FC<PropType> = ({type}) => {
  const Logo = ICONS[type];
  const href = `/oauth/${type}`;

  return (
    <a href={href} className="w-10 h-10 bg-transparent mouse rounded-full border border-mygray-100 hover:bg-mygray-200 flex justify-center items-center">
      <img src={Logo} alt={type} />
    </a>
  );
}

export default SocialIcon;
