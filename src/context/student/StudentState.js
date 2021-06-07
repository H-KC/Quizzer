import {
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
  SET_CURRENT,
} from "../types";
import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import StudentContext from "./studentContext";
import StudentReducer from "./studentReducer";

const StudentState = (props) => {
  const initialState = {
    students: [
      {
        id: "456755",
        name: "Mohamed Lemine Mohamed Tedjih",
        studentID: "11830002",
        tel: "34101038",
      },
      {
        id: "282874",
        name: "Abdel Karim Mahfoud Taleb Ould Sidi",
        studentID: "11830028",
        tel: "22390750",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(StudentReducer, initialState);

  //add student
  const addStudent = (student) => {
    student.id = uuidv4();
    dispatch({ type: ADD_STUDENT, payload: student });
  };

  // update student
  const updateStudent = (student) => {
    dispatch({ type: UPDATE_STUDENT, payload: student });
  };

  //   delete student
  const deleteStudent = (id) => {
    dispatch({ type: DELETE_STUDENT, payload: id });
  };

  // set current contact
  const setCurrent = (student) => {
    dispatch({ type: SET_CURRENT, payload: student });
  };

  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        current: state.current,
        addStudent,
        deleteStudent,
        updateStudent,
        setCurrent,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};
export default StudentState;
