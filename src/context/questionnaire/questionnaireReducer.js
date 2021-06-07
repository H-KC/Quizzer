import {
  ADD_QUESTIONNAIRE,
  DELETE_QUESTIONNAIRE,
  UPDATE_QUESTIONNAIRE,
  SET_CURRENT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_QUESTIONNAIRE:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    case DELETE_QUESTIONNAIRE:
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.payload
        ),
        current: null,
      };
    case UPDATE_QUESTIONNAIRE:
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.id === action.payload.id ? action.payload : question
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
