import { takeLatest, put, call } from 'redux-saga/effects';

import { getUserNewsSuccess, getUserNewsError } from '../actions/actionCreators/userNews';
import { userNewsTypes } from '../actions/types';
import api from '../../api';

function* getUserNewsWorker({ payload }) {
  try {
    const { data } = yield call(api.get, `/users/${payload}/news`);

    yield put(getUserNewsSuccess(data.data));
  } catch (error) {
    yield put(getUserNewsError(error.message));
  }
}

export default function* getUserNewsWatcher() {
  yield takeLatest(userNewsTypes.USER_NEWS_REQUESTED, getUserNewsWorker);
}
