import { newsTypes, userNewsTypes } from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  news: [],
  userNews: [],
};

const newsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case newsTypes.GET_NEWS_REQUESTED:
      return ({
        ...state,
        isLoading: true,
        error: null,
      });
    case newsTypes.GET_NEWS_SUCCESS:
    case userNewsTypes.USER_NEWS_SUCCESS:
      return ({
        ...state,
        news: action.payload,
        userNews: action.payload,
        isLoading: false,
        error: null,
      });
    case newsTypes.GET_NEWS_ERROR:
      return ({
        ...state,
        error: action.error,
        isLoading: false,
      });
    default:
      return state;
  }
};

export default newsReducer;
