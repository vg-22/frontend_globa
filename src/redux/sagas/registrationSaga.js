import { takeLatest, put, call } from 'redux-saga/effects';

import { registrationError, registrationSuccess } from '../actions/actionCreators/registration';
import { registrationTypes } from '../actions/types';
import api from '../../api';
import { saveToken } from '../../helpers/localStorage';

function* registrationWorker({ payload }) {
  try {
    const { data } = yield call(api.post, '/registration', payload);
    yield saveToken(data.token);
    yield put(registrationSuccess(data.data));
  } catch (error) {
    yield put(registrationError(error.message));
  }
}

export default function* registrationWatcher() {
  yield takeLatest(registrationTypes.REGISTRATION_REQUESTED, registrationWorker);
}
