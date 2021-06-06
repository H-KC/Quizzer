import React from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

export const student = () => {
  return (
    <div className='row col-lg-12'>
      {/* Form */}
      <div className='col-lg-6'>
        <StudentForm />
      </div>
      {/* stats */}
      <div className='col-lg-6'></div>
      {/* table */}
      <div className='col-lg-12'>
        <StudentTable />
      </div>
    </div>
  );
};
