import React, { useState } from "react";
import salaryStyle from "../../resources/css/pages/salary/salary.module.css";
import SalarySeveranceTableN from "./SalarySeveranceTableN";
import SeveraceDatePiker from "./Salary_SeveranceDatePiker";

function SeveranceN() {


  return (
    <>
      <div className={`ml-5 ${salaryStyle.checkTitle}`}>
        <div>
          <h1 className="fs-1 mt-5">퇴직금 지급 현황</h1>
        </div>
        <div className={salaryStyle.selectDate}>
          <SeveraceDatePiker />
        </div>
      </div>

      <div className="pt-5 pl-5">
        <SalarySeveranceTableN />
      </div>
    </>
  );
}

export default SeveranceN;
