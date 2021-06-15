import React, { useContext, useState, useEffect } from "react";
import StudentContext from "../../../context/student/studentContext";

const StudentForm = () => {
  //init student context
  const studentContext = useContext(StudentContext);
  const { current, addStudent, updateStudent } = studentContext;
  const [student, setStudent] = useState({
    studentID: "",
    name: "",
    tel: "",
  });

  const { name, studentID, tel } = student;
  const handleChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || tel.trim() === "") {
      alert("No");
    } else {
      current !== null ? updateStudent(student) : addStudent(student);
    }
  };

  useEffect(() => {
    if (current !== null) {
      setStudent(current);
    } else {
      setStudent({
        studentID: Number(0),
        name: "",
        tel: "",
        state: "new",
      });
    }
  }, [studentContext, current]);

  return (
    <div className='registration-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='number'
            className='form-control item'
            placeholder='Student ID'
            min='0'
            required
            name='studentID'
            value={studentID}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control item'
            placeholder='Student Name'
            required
            name='name'
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='tel'
            className='form-control item'
            placeholder='Student Phone'
            required
            name='tel'
            value={tel}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-block create-account'>
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
