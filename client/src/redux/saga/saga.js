import {
  all, put, call, takeEvery,
} from 'redux-saga/effects';

import { EMPLOYEES_REQUESTED } from '../types';
import { employeesFailure, employeesSuccess } from '../actions';

function* employeesFetchAsync() {
  try {
    const data = yield call(() => fetch('http://localhost:5000/users'));
    const json = yield call(() => data.json());
    if (data.status === 200) {
      yield put(employeesSuccess(json));
    } else {
      yield put(employeesFailure(data.statusText));
    }
  } catch (e) {
    yield put(employeesFailure(e.message));
  }
}

function* watchFetches() {
  yield all([
    takeEvery(EMPLOYEES_REQUESTED, employeesFetchAsync),
    // takeEvery(FETCHED_ADD_EMPLOYEE, employeeAddFetchAsync),
    // takeEvery(FETCHED_REMOVE_EMPLOYEE, employeeRemoveFetchAsync),
    // takeEvery(FETCHED_UPDATE_EMPLOYEE, employeeUpdateFetchAsync),
  ]);
}

export default watchFetches;
