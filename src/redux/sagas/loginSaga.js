import { takeLatest, put, call } from 'redux-saga/effects';

import { loginError, loginSuccess } from '../actions/actionCreators/login';
import { loginTypes } from '../actions/types';
import api from '../../api';
import { saveToken, getToken } from '../../helpers/localStorage';

function* loginWorker({ payload }) {
  try {
    const { data } = yield call(api.post, '/authorization', payload);
    saveToken(data.token);
    Boolean(getToken());
    yield put(loginSuccess(data.data));
  } catch (error) {
    yield put(loginError(error.message));
  }
}

export default function* loginWatcher() {
  yield takeLatest(loginTypes.LOGIN_REQUESTED, loginWorker);
}
