import { all } from 'redux-saga/effects';

import getNewsWatcher from './newsSaga';

function* rootSaga() {
  yield all([
    getNewsWatcher(),
  ]);
}

export default rootSaga;
