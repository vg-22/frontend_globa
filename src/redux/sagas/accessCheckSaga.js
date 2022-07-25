import { call, put, takeLatest } from 'redux-saga/effects';

import accessTypes from '../actions/types';
import { loginSuccess, loginError } from '../actions/actionCreators/login';
import api from '../../api';

export function* accessCheck() {
  try {
    const { data } = yield call(api.get, '/users');
    const {
      name, email, id,
    } = data;
    yield put(loginSuccess({ name, email, id }));
  } catch (error) {
    yield put(loginError(error.message));
  }
}

export function* accessCheckWatcher() {
  yield takeLatest(accessTypes.ACCESS_REQUESTED, accessCheck);
}
