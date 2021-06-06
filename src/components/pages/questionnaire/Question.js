import QuestionsForm from "./QuestionsForm";
import QuestionTable from "./QuestionTable";

const Question = () => {
  return (
    <div className='row col-lg-12'>
      {/* Form */}
      <div className='col-lg-12'>
        <QuestionsForm />
      </div>
      {/* stats */}
      <div className='col-lg-12 mt-3'>
        <QuestionTable />
      </div>
      <div className='col-lg-12'></div>
    </div>
  );
};

export default Question;
