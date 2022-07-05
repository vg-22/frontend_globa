import actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  news: [],
};

const newsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_NEWS_REQUESTED:
      return ({
        ...state,
        isLoading: true,
      });
    case actionTypes.GET_NEWS_SUCCESS:
      return ({
        ...state,
        news: action.payload,
        isLoading: false,
      });
    case actionTypes.GET_NEWS_ERROR:
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
