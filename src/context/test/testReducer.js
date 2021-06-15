import { ADD_TEST, DELETE_TEST, UPDATE_TEST, SET_CURRENT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TEST:
      return {
        ...state,
        tests: [...state.tests, action.payload],
      };
    case DELETE_TEST:
      return {
        ...state,
        tests: state.tests.filter((test) => test.id !== action.payload),
        current: null,
      };
    case UPDATE_TEST:
      return {
        ...state,
        tests: state.tests.map((test) =>
          test.id === action.payload.id ? action.payload : test
        ),
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
