import actionTypes from './actionTypes';

export const getNewsRequested = () => ({
  type: actionTypes.GET_NEWS_REQUESTED,
});

export const getNewsSuccess = (payload) => ({
  type: actionTypes.GET_NEWS_SUCCESS,
  payload,
});

export const getNewsError = (error) => ({
  type: actionTypes.GET_NEWS_ERROR,
  error,
});
