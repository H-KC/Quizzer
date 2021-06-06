import React from "react";

const StudentForm = () => {
  return (
    <div className='registration-form'>
      <form>
        <div className='form-group'>
          <input
            type='number'
            className='form-control item'
            placeholder='Student ID'
            min='0'
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control item'
            placeholder='Student Name'
          />
        </div>

        <div className='form-group'>
          <input
            type='tel'
            className='form-control item'
            placeholder='Student Phone'
          />
        </div>

        <div className='form-group'>
          <button type='button' className='btn btn-block create-account'>
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
