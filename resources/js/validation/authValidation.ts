const FIELD = {
  email: 'email',
  password: 'password',
  password_confirmation: 'password_confirmation'
}

const MESSAGE = {
  email: {
    required: 'email field is required'
  },
  password: {
    required: 'password field is required',
    min: 'password must be at least 8 characters.'
  },
}

const emailValidation = (value: string): string => {
  if(value == '' || !value)
    return MESSAGE.email.required;
  return '';
}
const passwordValidation = (value: string): string => {
  if(value == '' || !value)
    return MESSAGE.password.required;
  if(value.length < 8)
    return 'password must be at least 8 characters.'
  return '';
}

export const validate = (key: string, value: string): string => {
  switch (key) {
    case FIELD.email:
      return emailValidation(value);
    case FIELD.password:
      return passwordValidation(value);
    case FIELD.password_confirmation:
      return passwordValidation(value);
    default:
      return '';
  }
}
