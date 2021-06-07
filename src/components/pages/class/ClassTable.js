import { Card } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useContext } from "react";
import ClassContext from "../../../context/class/classContext";

const ClassTable = () => {
  // init class context
  const classContext = useContext(ClassContext);
  const { classes, setCurrent, deleteClass } = classContext;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 130 },

    { field: "description", headerName: "Description", width: 150 },
  ];

  const rows = classes.map((item) => {
    return { id: item.id, name: item.name, description: item.description };
  });
  const handleClick = (e) => {
    setCurrent(e.row);
  };
  const handleDelete = (e) => {
    deleteClass(e.row.id);
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

export default ClassTable;
