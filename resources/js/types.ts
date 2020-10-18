import React from 'react';

export interface IAuthProviderProps {
  children?: any;
}

export interface IAuthState {
  profile: Iprofile;
  loading: boolean;
  authRedirectPath: string;
  initChecking: boolean;
}

export interface Iprofile {
  id: string;
  email: string;
  image: string;
  name: string;
  biography: string;
  phone: string;
  photo: string;
}

export type ContextType = {
  state: IAuthState;
  dispatch: React.Dispatch<any>;
}

export type SocialName = 'google' | 'github' | 'twitter' | 'facebook';
