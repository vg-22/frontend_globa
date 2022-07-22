import { takeLatest, put, call } from 'redux-saga/effects';

import { getUserSuccess, getUserError } from '../actions/actionCreators/user';
import { userTypes } from '../actions/types';
import api from '../../api';

function* getUserWorker({ payload }) {
  try {
    const { data } = yield call(api.get, `/users/${payload}`);

    yield put(getUserSuccess(data.data));
  } catch (error) {
    yield put(getUserError(error.message));
  }
}

export default function* getUserWatcher() {
  yield takeLatest(userTypes.USER_REQUESTED, getUserWorker);
}
