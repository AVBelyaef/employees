import {
  EMPLOYEES_FAILURE, EMPLOYEES_REQUESTED, EMPLOYEES_SUCCESS, EMPLOYEE_REQUESTED,
  EMPLOYEE_BY_ID_SUCCESS, VISIBILITY_FILTER_ROLE, VISIBILITY_FILTER_ARCHIVE,
  SORT_NAME, SORT_BIRTHDAY,
} from '../types';


const initialState = {
  employees: [],
  employeeById: null,
  isLoading: false,
  filterRole: 'all',
  filterIsArchive: false,
  sortName: false,
  sortBirthday: false,
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
    case SORT_NAME: {
      return {
        ...state,
        sortName: !state.sortName,
      };
    }
    case SORT_BIRTHDAY: {
      return {
        ...state,
        sortBirthday: !state.sortBirthday,
      };
    }
    default:
      return state;
  }
};

export default employees;
