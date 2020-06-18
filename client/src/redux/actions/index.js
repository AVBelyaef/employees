import {
  EMPLOYEES_FAILURE, EMPLOYEES_REQUESTED, EMPLOYEES_SUCCESS,
  FETCHED_ADD_EMPLOYEE, FETCHED_UPDATE_EMPLOYEE, EMPLOYEE_REQUESTED,
  FETCHED_EMPLOYEE_BY_ID, EMPLOYEE_BY_ID_SUCCESS, VISIBILITY_FILTER_ROLE,
  VISIBILITY_FILTER_ARCHIVE,
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

export const employeeRequsted = () => ({ type: EMPLOYEE_REQUESTED });

export const fetchAddEmployee = (employee) => ({
  type: FETCHED_ADD_EMPLOYEE,
  payload: employee,
});

export const fetchUpdateEmployee = (employee) => ({
  type: FETCHED_UPDATE_EMPLOYEE,
  payload: employee,
});

export const fetchEmployeeById = (id) => ({
  type: FETCHED_EMPLOYEE_BY_ID,
  payload: id,
});

export const employeeByIdSuccess = (employee) => ({
  type: EMPLOYEE_BY_ID_SUCCESS,
  payload: employee,
});

export const filterRole = (value) => ({
  type: VISIBILITY_FILTER_ROLE,
  payload: value,
});

export const filterIsArchive = (value) => ({
  type: VISIBILITY_FILTER_ARCHIVE,
  payload: value,
});
