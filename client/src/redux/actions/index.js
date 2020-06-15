import {
  EMPLOYEES_FAILURE, EMPLOYEES_REQUESTED, EMPLOYEES_SUCCESS,
} from '../types';

export const employeesRequsted = () => ({ type: EMPLOYEES_REQUESTED });

export const employeesSuccess = (employees) => ({
  type: EMPLOYEES_SUCCESS,
  payload: employees,
});

export const employeesFailure = (error) => ({
  type: EMPLOYEES_FAILURE,
  error,
});
