import { userTypes } from '../types';

export const getUserRequested = (payload) => ({
  type: userTypes.USER_REQUESTED,
  payload,
});

export const getUserSuccess = (payload) => ({
  type: userTypes.USER_SUCCESS,
  payload,
});

export const getUserError = (error) => ({
  type: userTypes.USER_ERROR,
  error,
});
