import React from "react";
import TestForm from "./TestForm";
import TestTable from "./TestTable";
const Test = () => {
  return (
    <div className='row col-lg-12'>
      {/* Form */}
      <div className='col-lg-12'>
        <TestForm />
      </div>
      {/* table */}
      <div className='col-lg-12 mt-3'>
        <TestTable />
      </div>
      <div className='col-lg-12'></div>
    </div>
  );
};

export default Test;
