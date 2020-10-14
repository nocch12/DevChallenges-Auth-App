type ErrorMessage = string | string[];

type ResponseErrors = {
  [key: string]: ErrorMessage;
}

type FormatErrors = {
  [key: string]: string;
}

export const makeErrorMessage = (errors: ErrorMessage): string => {
  if(!errors.length) return '';
  if(Array.isArray(errors)) {
    return errors[0];
  }
  return errors;
}

export const makeErrors = (responseErrors: ResponseErrors): FormatErrors => {
  let data = {};
  for (const key in responseErrors) {
    if (Object.prototype.hasOwnProperty.call(responseErrors, key)) {
      const error = responseErrors[key];
      data = {
        ...data,
        [key]: error
      }
    }
  }
  return data;
}
