import { takeLatest, put, call } from 'redux-saga/effects';

import { getNewsSuccess, getNewsError } from '../actions/actionCreators';
import actionTypes from '../actions/actionTypes';
import api from '../../api';

function* getNewsWorker() {
  try {
    const { data } = yield call(api.get, '/news');

    yield put(getNewsSuccess(data.data));
  } catch (error) {
    yield put(getNewsError(error.message));
  }
}

export default function* getNewsWatcher() {
  yield takeLatest(actionTypes.GET_NEWS_REQUESTED, getNewsWorker);
}
