import actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  news: [],
};

// eslint-disable-next-line default-param-last
const newsReduser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEWS_REQUEST:
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

export default newsReduser;
