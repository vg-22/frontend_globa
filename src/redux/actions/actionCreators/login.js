import { loginTypes } from '../types';

export const loginRequested = (payload) => ({
  type: loginTypes.LOGIN_REQUESTED,
  payload,
});

export const loginSuccess = (payload) => ({
  type: loginTypes.LOGIN_SUCCESS,
  payload,
});

export const loginError = (error) => ({
  type: loginTypes.LOGIN_ERROR,
  error,
});

export const logoutUser = () => ({
  type: loginTypes.LOGOUT_USER,

});
