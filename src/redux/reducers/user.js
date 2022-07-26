import { userTypes } from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  user: {},
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case userTypes.USER_REQUESTED:
      return ({
        ...state,
        isLoading: true,
        error: null,
      });
    case userTypes.USER_SUCCESS:
      return ({
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      });
    case userTypes.USER_ERROR:
      return ({
        ...state,
        error: action.error,
        isLoading: false,
      });
    default:
      return state;
  }
};

export default userReducer;
