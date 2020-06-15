import { EMPLOYEES_FAILURE, EMPLOYEES_REQUESTED, EMPLOYEES_SUCCESS } from '../types';

const initialState = {
  employees: [],
  isLoading: false,
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
    default:
      return state;
  }
};

export default employees;
