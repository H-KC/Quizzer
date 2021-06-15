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
    questions: [
      {
        questionsHolder: [
          {
            question: "is it ook ?",
            answer: "option1",
            option1: "yes",
            option2: "no",
            option3: "mb",
            option4: "mb nit",
          },
          {
            question: "do you do it ?",
            answer: "option4",
            option1: "yes",
            option2: "no",
            option3: "oftenly",
            option4: "never",
          },
        ],
        quizID: "ba000944-030b-48ee-88ae-8c2c30b1c4a8",
        id: "f1f10f28-521a-49d4-a0ea-18bf5be726aa",
      },
      {
        questionsHolder: [
          {
            question: "est-ce que tout est bon ?",
            answer: "option3",
            option1: "no",
            option2: "oui",
            option3: "peut être",
            option4: "ok",
          },
          {
            question: "as-tu déjà voyagé ?",
            answer: "option1",
            option1: "oui",
            option2: "no",
            option3: "peut être",
            option4: "pas",
          },
        ],
        quizID: "6dc96a9a-892e-48fd-997a-d5cea742cddf",
        id: "d03fe2e0-cbd3-4989-bf6b-a056beda1a0d",
      },
    ],
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
