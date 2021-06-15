import { Card } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import QuizContext from "../../../context/quiz/quizContext";
import QuestionnaireContext from "../../../context/questionnaire/questionnaireContext";
import { useContext, useState } from "react";

const QuestionTable = () => {
  //ini questionnaire context
  const questionnaireContext = useContext(QuestionnaireContext);
  const { questions } = questionnaireContext;
  //init quiz context
  const quizContext = useContext(QuizContext);
  const { quizes } = quizContext;
  const [data, setData] = useState({
    selectID: "",
    selectQuestionnaire: [],
  });
  const { selectQuestionnaire } = data;
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "question", headerName: "Question", width: 230 },
    { field: "option1", headerName: "Option 1", width: 180 },
    { field: "option2", headerName: "Option 2", width: 180 },
    { field: "option3", headerName: "Option 3", width: 180 },
    { field: "option4", headerName: "Option 4", width: 180 },
    { field: "answer", headerName: "Answer", width: 180 },
  ];

  const handlechange = (e) => {
    let holder = questions
      .filter((item) => item.quizID === e.target.value)
      .map((item) => item.questionsHolder)[0];
    console.log(holder);
    setData({
      ...data,
      selectQuestionnaire: holder,
    });
  };
  const rows = selectQuestionnaire
    ? selectQuestionnaire.map((q, i) => {
        return {
          id: i + 1,
          question: q.question,
          option1: q.option1,
          option2: q.option2,
          option3: q.option3,
          option4: q.option4,
          answer: q.answer,
        };
      })
    : [];

  return (
    <Card
      style={{
        height: 420,
        width: "100%",
        marginBottom: "15px",
        padding: "2px 5px",
      }}
    >
      <div className='row'>
        <div className='input-group my-3 col-lg-11'>
          <select
            className='form-select p-2'
            name='selectID'
            onChange={handlechange}
            value={this}
          >
            <option value=''>Choose a Questionnaire</option>
            {quizes
              .filter((item) => item.state !== "new")
              .map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </Card>
  );
};

export default QuestionTable;
