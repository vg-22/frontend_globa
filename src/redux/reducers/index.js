import { combineReducers } from 'redux';

import authReducer from './auth';
import newsReducer from './news';

const rootReducer = combineReducers({
  newsReducer,
  authReducer,
});

export default rootReducer;
