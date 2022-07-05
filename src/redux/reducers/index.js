import { combineReducers } from 'redux';
import newsReducer from './news';

const rootReducer = combineReducers({
  newsReducer,
});

export default rootReducer;
