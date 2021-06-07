import { Card } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useContext } from "react";
import ClassContext from "../../../context/class/classContext";
import QuizContext from "../../../context/quiz/quizContext";

const QuizTable = () => {
  //inint quiz context
  const quizContext = useContext(QuizContext);
  const { quizes, deleteQuiz, setCurrent } = quizContext;

  // inint class quiz
  const classContext = useContext(ClassContext);
  const { classes } = classContext;

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "classID", headerName: "Class", width: 200 },
    { field: "nbrQuestions", headerName: "Questions", width: 200 },
    { field: "nbrPts", headerName: "Pts", width: 200 },
    { field: "state", headerName: "State", width: 200 },
  ];

  const rows = quizes.map((quiz) => {
    const className = classes
      .filter((item) => item.id === quiz.classID)
      .map((item) => item.name);
    return {
      id: quiz.id,
      name: quiz.name,
      classID: className,
      nbrQuestions: quiz.nbrQuestions,
      nbrPts: quiz.nbrPts,
      state: quiz.state,
    };
  });
  const handleClick = (e) => {
    setCurrent(e.row);
  };
  const handleDelete = (e) => {
    deleteQuiz(e.row.id);
  };

  return (
    <Card style={{ height: 400, width: "100%", marginBottom: "15px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onCellClick={handleClick}
        onCellDoubleClick={handleDelete}
      />
    </Card>
  );
};

export default QuizTable;
