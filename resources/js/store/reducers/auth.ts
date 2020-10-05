import React from 'react';
import {IAuthAction} from '../../interfaces/interfaces';

const initialState = {
  id: '',
  email: '',
  profile: {},
  error: null,
  loading: false,
  authRedirectPath: '/'
}

const reducer = (state = initialState, action) => {
  switch (type) {

  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}

export default reducer;

