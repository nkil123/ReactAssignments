import {LoadData, saveData} from '../../../utils/localStorage';
import {LOGIN_FAIL, LOGIN_SUCESS, LOGOUT} from './actionTypes';

const init = {
  isAuth: LoadData ('token') ? true : false,
  token: '',
};

export const reducer = (state = init, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCESS:
      saveData ('token', payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
      };
    case LOGOUT:
      saveData ('token', null);
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
