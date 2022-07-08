import { loginTypes, registrationTypes } from '../actions/types';

const initialState = {
  isAccess: false,
  isLoading: false,
  error: null,
  loginUser: null,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case loginTypes.LOGIN_REQUESTED:
    case registrationTypes.REGISTRATION_REQUESTED:
      return ({
        ...state,
        isAccess: false,
        loginUser: action.payload,
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
        isAccess: false,
        error: action.error,
        isLoading: false,
      });
    case loginTypes.LOGOUT_USER:
      return ({
        ...state,
        isAccess: false,
        error: null,
      });

    default:
      return state;
  }
};

export default authReducer;
