import React, { Fragment } from "react";
import ClassStats from "./ClassStats";
import ClassForm from "./ClassForm";
import ClassTable from "./ClassTable";

const Class = () => {
  return (
    <Fragment>
      <div className='row col-lg-12'>
        {/* Form */}
        <div className='col-lg-6'>
          <ClassForm />
        </div>
        {/* stats */}
        <div className='col-lg-6'>
          <ClassStats />
        </div>
        <div className='col-lg-12'>
          <ClassTable />
        </div>
      </div>
    </Fragment>
  );
};
export default Class;
