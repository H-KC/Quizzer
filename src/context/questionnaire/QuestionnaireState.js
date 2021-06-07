import {
  ADD_QUESTIONNAIRE,
  DELETE_QUESTIONNAIRE,
  UPDATE_QUESTIONNAIRE,
  SET_CURRENT,
} from "../types";
import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import QuestionnaireContext from "./questionnaireContext";
import QuestionnaireReducer from "./questionnaireReducer";

const QuestionnaireState = (props) => {
  const initialState = {
    questions: [],
    current: null,
  };

  const [state, dispatch] = useReducer(QuestionnaireReducer, initialState);

  //add class
  const addQuestions = (question) => {
    question.id = uuidv4();
    dispatch({ type: ADD_QUESTIONNAIRE, payload: question });
  };
  // update class
  const updateQuestions = (question) => {
    dispatch({ type: UPDATE_QUESTIONNAIRE, payload: question });
  };
  //   delete class
  const deleteQuestions = (id) => {
    dispatch({ type: DELETE_QUESTIONNAIRE, payload: id });
  };

  // set current contact
  const setCurrent = (question) => {
    dispatch({ type: SET_CURRENT, payload: question });
  };
  return (
    <QuestionnaireContext.Provider
      value={{
        questions: state.questions,
        current: state.current,
        addQuestions,
        deleteQuestions,
        updateQuestions,
        setCurrent,
      }}
    >
      {props.children}
    </QuestionnaireContext.Provider>
  );
};
export default QuestionnaireState;
