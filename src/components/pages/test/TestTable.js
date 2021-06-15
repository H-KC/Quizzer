import React, { useContext } from "react";
import StudentContext from "../../../context/student/studentContext";
import TestContext from "../../../context/test/testContext";
import { Card } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import QuizContext from "../../../context/quiz/quizContext";

const TestTable = () => {
  //init student context
  const studentContext = useContext(StudentContext);
  const { students } = studentContext;

  // init test context
  const testContext = useContext(TestContext);
  const { tests } = testContext;

  //init quiz context
  const quizContext = useContext(QuizContext);
  const { quizes } = quizContext;

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "student", headerName: "Student", width: 250 },
    { field: "class", headerName: "Classes", width: 200 },
    { field: "test", headerName: "Tests", width: 200 },
    { field: "nbrQuestion", headerName: "Toatal questions", width: 200 },
    { field: "state", headerName: "State", width: 200 },
  ];

  const rows = tests.map((test, index) => {
    let testname = [];
    let nbrq = 0;
    const sname = students
      .filter((item) => item.studentID === test.selectedStudent)
      .map((item) => item)[0].name;
    const cls = test.tests.map((ts) => {
      quizes
        .filter((q) => q.id === ts.selectedQuiz)
        .map((q) => {
          nbrq = nbrq + Number(q.nbrQuestions);
          testname.push(q.name);
        });
      return ts.className;
    });
    return {
      id: index + 1,
      student: sname,
      class: cls,
      test: testname,
      nbrQuestion: nbrq,
      state: test.state,
    };
  });
  const handleClick = (e) => {
    // setCurrent(e.row);
  };
  const handleDelete = (e) => {};

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

export default TestTable;
