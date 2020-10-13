import React from 'react';

export interface IAuthProviderProps {
  children?: any;
}

export type IValidateErrors = {
  [key: string]: string;
}

export interface IAuthState {
  profile: Iprofile;
  errors: IValidateErrors;
  loading: boolean;
  authRedirectPath: string;
  initChecking: boolean;
}

export interface Iprofile {
  id: string;
  email: string;
  image: string;
  name: string;
  age: string;
  biography: string;
  phone: string;
}

export type ContextType = {
  state: IAuthState;
  dispatch: React.Dispatch<any>;
}

export type SocialName = 'google' | 'github' | 'twitter' | 'facebook';
