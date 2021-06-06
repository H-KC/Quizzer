import React from "react";
import "./styles/formStyle.css";
const ClassForm = () => {
  return (
    <>
      <div className='registration-form'>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control item'
              placeholder='Class Name'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control item'
              placeholder='Class Description'
            />
          </div>

          <div className='form-group'>
            <button type='button' className='btn btn-block create-account'>
              Create Class
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ClassForm;
