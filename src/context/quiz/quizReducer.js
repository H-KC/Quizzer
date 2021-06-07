import { ADD_QUIZ, DELETE_QUIZ, UPDATE_QUIZ, SET_CURRENT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_QUIZ:
      return {
        ...state,
        quizes: [...state.quizes, action.payload],
      };
    case DELETE_QUIZ:
      return {
        ...state,
        quizes: state.quizes.filter((quiz) => quiz.id !== action.payload),
        current: null,
      };
    case UPDATE_QUIZ:
      return {
        ...state,
        quizes: state.quizes.map((quiz) =>
          quiz.id === action.payload.id ? action.payload : quiz
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
