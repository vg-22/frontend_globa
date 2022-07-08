import { takeLatest, put, call } from 'redux-saga/effects';

import { getNewsSuccess, getNewsError } from '../actions/actionCreators/news';
import { newsTypes } from '../actions/types';
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
  yield takeLatest(newsTypes.GET_NEWS_REQUESTED, getNewsWorker);
}
