import { all } from 'redux-saga/effects';

import loginWatcher from './loginSaga';
import getNewsWatcher from './newsSaga';
import registrationWatcher from './registrationSaga';
import getUserWatcher from './userSaga';

function* rootSaga() {
  yield all([
    getNewsWatcher(),
    loginWatcher(),
    registrationWatcher(),
    getUserWatcher(),
  ]);
}

export default rootSaga;
