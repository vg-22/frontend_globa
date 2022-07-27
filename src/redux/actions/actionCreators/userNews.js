import { userNewsTypes } from '../types';

export const getUserNewsRequested = (payload) => ({
  type: userNewsTypes.USER_NEWS_REQUESTED,
  payload,
});

export const getUserNewsSuccess = (payload) => ({
  type: userNewsTypes.USER_NEWS_SUCCESS,
  payload,
});

export const getUserNewsError = (error) => ({
  type: userNewsTypes.USER_NEWS_ERROR,
  error,
});
