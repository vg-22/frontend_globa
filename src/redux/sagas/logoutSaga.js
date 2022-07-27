import { takeLatest, put } from 'redux-saga/effects';
import { loginTypes } from '../actions/types';

import { deleteToken } from '../../helpers/localStorage';

function* logoutSaga() {
  yield put(deleteToken());
}
export default function* watchAuth() {
  yield takeLatest(loginTypes.LOGOUT_USER, logoutSaga);
}
