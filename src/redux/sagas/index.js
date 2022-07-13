import { all } from 'redux-saga/effects';

import loginWatcher from './loginSaga';
import getNewsWatcher from './newsSaga';
import registrationWatcher from './registrationSaga';

function* rootSaga() {
  yield all([
    getNewsWatcher(),
    loginWatcher(),
    registrationWatcher(),
  ]);
}

export default rootSaga;
