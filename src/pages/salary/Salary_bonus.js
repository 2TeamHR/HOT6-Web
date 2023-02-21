import React, { useState } from 'react';
import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import SalaryBonusTable from './SalaryBonusTable';
import BonusDatePicker from './Salary_BonusDatePiker';

function SalaryBonus(){
    
 
    return (
        <>
        <div className={`ml-5 ${salaryStyle.checkTitle}`}>
            <div>
                <h1 className="fs-1 mt-5">상여금 지급 현황</h1>
            </div>
            <div className={salaryStyle.selectDate}>
                <BonusDatePicker />
            </div>
        </div>

        <div className="pt-5 pl-5">
            <SalaryBonusTable />
        </div>
        </>
    );
}

export default SalaryBonus;