import { combineReducers } from 'redux';

import authReducer from './auth';
import newsReducer from './news';
import userReducer from './user';

const rootReducer = combineReducers({
  newsReducer,
  authReducer,
  userReducer,
});

export default rootReducer;
