import { all } from 'redux-saga/effects';

import loginWatcher from './loginSaga';
import watchAuth from './logoutSaga';
import getNewsWatcher from './newsSaga';
import registrationWatcher from './registrationSaga';
import getUserNewsWatcher from './userNewsSaga';
import getUserWatcher from './userSaga';

function* rootSaga() {
  yield all([
    getNewsWatcher(),
    loginWatcher(),
    registrationWatcher(),
    getUserWatcher(),
    getUserNewsWatcher(),
    watchAuth(),
  ]);
}

export default rootSaga;
