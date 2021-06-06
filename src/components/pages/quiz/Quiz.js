import React from "react";
import QuizForm from "./QuizForm";
import QuizTable from "./QuizTable";

const Quiz = () => {
  return (
    <div className='row col-lg-12'>
      {/* Form */}
      <div className='col-lg-6'>
        <QuizForm />
      </div>
      {/* stats */}
      <div className='col-lg-12 mt-3'>
        <QuizTable />
      </div>
    </div>
  );
};

export default Quiz;
