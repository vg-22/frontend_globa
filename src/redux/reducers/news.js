import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: {},
  news: [],
}

const newsReduser = (action, state = initialState) => {
  switch (action.type) {
    case actionTypes.GET_NEWS_REQUEST:
      return ({
        ...state,
        isLoading: true,
      })
  
  case actionTypes.GET_NEWS_SUCCESS:
    return({
      ...state,
      news: action.payload,
    } )
    case actionTypes.GET_NEWS_ERROR:
      return({
        ...state,
        error: action.error,
      } )
    default:
      state
  }
}

export default newsReduser;