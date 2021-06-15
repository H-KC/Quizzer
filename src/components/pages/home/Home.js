import React from "react";
import TestStats from "./TestStats";
import StudentStats from "./StudentStats";
import ClassContext from "../../../context/class/classContext";
import { useContext } from "react";
import QuizContext from "../../../context/quiz/quizContext";

const Home = () => {
  // init class context
  const classContext = useContext(ClassContext);
  const { classes } = classContext;
  //init quiz context
  const quizContext = useContext(QuizContext);
  const { quizes } = quizContext;
  return (
    <div className='container'>
      <div className='row mt-2'>
        <div className='col'>
          <button
            type='button'
            className='btn  '
            style={{
              backgroundColor: "#5161CE",
              color: "white",
              width: "100%",
              padding: "10px",
            }}
          >
            Classes <span className='badge bg-danger'>{classes.length}</span>
          </button>
        </div>
        <div className='col'>
          <button
            type='button'
            className='btn  '
            style={{
              backgroundColor: "#5161CE",
              color: "white",
              width: "100%",
              padding: "10px",
            }}
          >
            Tests <span className='badge bg-danger'>4</span>
          </button>
        </div>
        <div className='col'>
          <button
            type='button'
            className='btn  '
            style={{
              backgroundColor: "#5161CE",
              color: "white",
              width: "100%",
              padding: "10px",
            }}
          >
            Questions{" "}
            <span className='badge bg-danger'>{extractNumbers(quizes)}</span>
          </button>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col'>
          <TestStats />
        </div>
        <div className='col'>
          <StudentStats />
        </div>
      </div>
    </div>
  );
};

export default Home;

const extractNumbers = (data) => {
  let nbrQuestion = 0;
  data.map(({ nbrQuestions }) => {
    nbrQuestion = Number(nbrQuestion) + Number(nbrQuestions);
  });
  return nbrQuestion;
};
