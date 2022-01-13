import {LOGIN_FAIL, LOGIN_SUCESS, LOGOUT} from './actionTypes';

export const loginSucess = data => {
  return {
    type: LOGIN_SUCESS,
    payload: data,
  };
};

export const loginFail = data => {
  return {
    type: LOGIN_FAIL,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};
