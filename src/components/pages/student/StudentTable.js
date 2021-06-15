import { Card } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useContext } from "react";
import StudentContext from "../../../context/student/studentContext";

const StudentTable = () => {
  //init student context
  const studentContext = useContext(StudentContext);
  const { setCurrent, students, deleteStudent } = studentContext;
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 350 },

    { field: "studentID", headerName: "student ID", width: 200 },

    { field: "tel", headerName: "Phone", width: 200 },
    { field: "state", headerName: "State", width: 200 },
  ];

  const rows = students.map((item) => {
    return {
      id: item.id,
      name: item.name,
      studentID: item.studentID,
      tel: item.tel,
      state: item.state,
    };
  });
  const handleClick = (e) => {
    setCurrent(e.row);
  };
  const handleDelete = (e) => {
    deleteStudent(e.row.id);
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

export default StudentTable;
