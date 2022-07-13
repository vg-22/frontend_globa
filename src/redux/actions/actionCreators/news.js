import { newsTypes } from '../types';

export const getNewsRequested = () => ({
  type: newsTypes.GET_NEWS_REQUESTED,
});

export const getNewsSuccess = (payload) => ({
  type: newsTypes.GET_NEWS_SUCCESS,
  payload,
});

export const getNewsError = (error) => ({
  type: newsTypes.GET_NEWS_ERROR,
  error,
});
