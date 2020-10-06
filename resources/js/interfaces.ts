export interface IAuthProviderProps {
  children?: any;
}

export interface IAuthState {
  id: string;
  email: string;
  error: any;
  loading: boolean;
  authRedirectPath: string;
}

export interface Iprofile {
  image?: string;
  name?: string;
  age?: string;
}
