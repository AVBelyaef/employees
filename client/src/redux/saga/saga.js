import {
  all, put, call, takeEvery,
} from 'redux-saga/effects';

import {
  EMPLOYEES_REQUESTED, FETCHED_ADD_EMPLOYEE,
  FETCHED_EMPLOYEE_BY_ID, FETCHED_UPDATE_EMPLOYEE,
} from '../types';

import {
  employeesFailure, employeesRequsted, employeesSuccess, employeeRequsted,
  employeeByIdSuccess,
} from '../actions';

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

export function* employeeAddFetchAsync(action) {
  yield put(employeeRequsted());
  const {
    name, phone, birthday, role, isArchive,
  } = action.payload;
  try {
    const data = yield call(() => fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, phone, birthday, role, isArchive,
      }),
    }));
    if (data.status === 201) {
      yield put(employeesRequsted());
    } else {
      yield put(employeesFailure(data.statusText));
    }
  } catch (error) {
    yield put(employeesFailure(error.message));
  }
}

export function* employeeUpdateFetchAsync(action) {
  yield put(employeeRequsted());
  try {
    const {
      name, phone, birthday, role, isArchive, id,
    } = action.payload;
    const result = yield call(() => fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, isArchive, role, phone, birthday,
      }),
    }));
    if (result.status === 200) {
      yield put(employeesRequsted());
    } else {
      yield put(employeesFailure(result.statusText));
    }
  } catch (e) {
    yield put(employeesFailure(e.message));
  }
}

export function* employeeByIdFetchAsync(action) {
  yield put(employeeRequsted());
  try {
    const id = action.payload;
    const result = yield call(() => fetch(`http://localhost:5000/users/${id}`));
    const json = yield call(() => result.json());
    yield put(employeeByIdSuccess(json));
  } catch (e) {
    yield put(employeesFailure(e.message));
  }
}

function* watchFetches() {
  yield all([
    takeEvery(EMPLOYEES_REQUESTED, employeesFetchAsync),
    takeEvery(FETCHED_ADD_EMPLOYEE, employeeAddFetchAsync),
    takeEvery(FETCHED_UPDATE_EMPLOYEE, employeeUpdateFetchAsync),
    takeEvery(FETCHED_EMPLOYEE_BY_ID, employeeByIdFetchAsync),
    // takeEvery(FETCHED_REMOVE_EMPLOYEE, employeeRemoveFetchAsync),
  ]);
}

export default watchFetches;
