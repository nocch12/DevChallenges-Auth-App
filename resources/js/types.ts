import React from 'react';

export interface IAuthProviderProps {
  children?: any;
}

export type IValidateErrors = {
  [key: string]: string;
}

export interface IAuthState {
  id: string;
  email: string;
  image: string;
  biography: string;
  phone: string;
  errors: IValidateErrors;
  loading: boolean;
  authRedirectPath: string;
  initChecking: boolean;
}

export interface Iprofile {
  image?: string;
  name?: string;
  age?: string;
}

export type ContextType = {
  state: IAuthState;
  dispatch: React.Dispatch<any>;
}

export type SocialName = 'google' | 'github' | 'twitter' | 'facebook';
