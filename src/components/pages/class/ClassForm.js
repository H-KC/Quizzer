import React, { useContext, useState, useEffect } from "react";
import ClassContext from "../../../context/class/classContext";
import "./styles/formStyle.css";

const ClassForm = () => {
  // init class context
  const classContext = useContext(ClassContext);
  const { current, addClass, updateClass } = classContext;
  const [Class, setClass] = useState({
    name: "",
    description: "",
  });
  const { name, description } = Class;
  const handleChange = (e) =>
    setClass({ ...Class, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || description.trim() === "") {
      alert("No");
    } else {
      current !== null ? updateClass(Class) : addClass(Class);
    }
  };

  useEffect(() => {
    if (current !== null) {
      setClass(current);
    } else {
      setClass({
        name: "",
        description: "",
      });
    }
  }, [classContext, current]);

  return (
    <div className='registration-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control item'
            placeholder='Class Name'
            name='name'
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control item'
            placeholder='Class Description'
            name='description'
            value={description}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-block create-account'>
            {current ? "Update Class" : "Create Class"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassForm;
