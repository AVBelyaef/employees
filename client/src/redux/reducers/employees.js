import {
  EMPLOYEES_FAILURE, EMPLOYEES_REQUESTED, EMPLOYEES_SUCCESS, EMPLOYEE_REQUESTED,
  EMPLOYEE_BY_ID_SUCCESS, VISIBILITY_FILTER, VISIBILITY_FILTER_ROLE, VISIBILITY_FILTER_ARCHIVE,
} from '../types';

const initialState = {
  employees: [],
  employeeById: null,
  isLoading: false,
  filterRole: '',
  filterIsArchive: '',
  isError: '',
};

const employees = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_REQUESTED: {
      return {
        ...state,
        isLoading: true,
        isError: '',
      };
    }
    case EMPLOYEES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        employees: action.payload,
        isError: '',
      };
    }
    case EMPLOYEES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: action.error,
      };
    }
    case EMPLOYEE_REQUESTED: {
      return {
        ...state,
        isLoading: true,
        isError: '',
      };
    }
    case EMPLOYEE_BY_ID_SUCCESS: {
      return {
        ...state,
        employeeById: action.payload,
        isLoading: false,
      };
    }
    case VISIBILITY_FILTER_ROLE: {
      return {
        ...state,
        filterRole: action.payload,
      };
    }
    case VISIBILITY_FILTER_ARCHIVE: {
      return {
        ...state,
        filterIsArchive: action.payload,
      };
    }
    default:
      return state;
  }
};

export default employees;
