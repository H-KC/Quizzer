import { ADD_QUIZ, DELETE_QUIZ, UPDATE_QUIZ, SET_CURRENT } from "../types";
import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import QuizContext from "./quizContext";
import QuizReducer from "./quizReducer";

const QuizState = (props) => {
  const initialState = {
    quizes: [
      {
        classID: "092238294309384",
        id: "99ddaabf-b1e3-4843-8acd-81fef1c87c6c",
        name: "HKC",
        nbrPts: "50",
        nbrQuestions: "50",
        state: "new",
      },
      {
        classID: "394989850358",
        id: "1c7cbb47-cad7-458c-a081-3efe2ffc9819",
        name: "sad",
        nbrPts: "30",
        nbrQuestions: "30",
        state: "new",
      },
      {
        classID: "984378934475874957",
        id: "6dc96a9a-892e-48fd-997a-d5cea742cddf",
        name: "BMW",
        nbrPts: "10",
        nbrQuestions: "10",
        state: "new",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(QuizReducer, initialState);

  //add quiz
  const addQuiz = (quiz) => {
    quiz.id = uuidv4();
    dispatch({ type: ADD_QUIZ, payload: quiz });
  };
  // update quiz
  const updateQuiz = (quiz) => {
    dispatch({ type: UPDATE_QUIZ, payload: quiz });
  };
  //   delete quiz
  const deleteQuiz = (id) => {
    dispatch({ type: DELETE_QUIZ, payload: id });
  };

  // set current contact
  const setCurrent = (quiz) => {
    dispatch({ type: SET_CURRENT, payload: quiz });
  };
  return (
    <QuizContext.Provider
      value={{
        quizes: state.quizes,
        current: state.current,
        addQuiz,
        deleteQuiz,
        updateQuiz,
        setCurrent,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};
export default QuizState;
