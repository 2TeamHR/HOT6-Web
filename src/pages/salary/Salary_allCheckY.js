import React, { useState } from 'react';
import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import SelectDatePiker2 from './Salary_SalaryDatePiker';
import SalaryDataTableY from './SalaryDataTableY';

function AllCheckY(){
    

    return (
        <>
        <div className={`ml-5 ${salaryStyle.checkTitle}`}>
            <div>
                <h1 className="fs-1 mt-5">급여 지급 현황</h1>
            </div>
            <div className={salaryStyle.selectDate}>
                <SelectDatePiker2 />
            </div>
        </div>

        <div className="pt-5 pl-5">
            <SalaryDataTableY className="pl-5" />
        </div>
        </>
    );
}

export default AllCheckY;