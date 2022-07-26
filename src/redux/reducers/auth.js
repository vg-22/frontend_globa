import { accessTypes, loginTypes, registrationTypes } from '../actions/types';

import { getToken } from '../../helpers/localStorage';

const initialState = {
  isAccess: Boolean(getToken()),
  isLoading: false,
  error: null,
  loginUser: {},
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case loginTypes.LOGIN_REQUESTED:
    case registrationTypes.REGISTRATION_REQUESTED:
    case accessTypes.ACCESS_REQUESTED:
      return ({
        ...state,
        isLoading: true,
        error: null,
      });
    case loginTypes.LOGIN_SUCCESS:
    case registrationTypes.REGISTRATION_SUCCESS:
      return ({
        ...state,
        isAccess: true,
        loginUser: action.payload,
        isLoading: false,
      });
    case loginTypes.LOGIN_ERROR:
    case registrationTypes.REGISTRATION_ERROR:
      return ({
        ...state,
        error: action.error,
        isLoading: false,
      });
    case loginTypes.LOGOUT_USER:
      return ({
        ...state,
        isAccess: false,
        loginUser: null,
        error: null,
      });

    default:
      return state;
  }
};

export default authReducer;
