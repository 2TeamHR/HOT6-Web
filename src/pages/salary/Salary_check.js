import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import { useEffect, useState } from "react";

function SalaryCheck() {

    // var startYear="2015";// 시작할 년도
    // var today = new Date();
    // var todayYear= today.getFullYear();
    // var index = 0;
    
    // for(var y=startYear; y<=todayYear; y++){ //start_year ~ 현재 년도
    //     document.getElementById('selectYear').options[index] = new Option(y, y);
    //     index++;
    // }

    // for(var m=1; m<=12; m++){
    //     document.getElementById('selectMonth').options[index] = new Option(m, m);
    //     index++;
    // }

    return (
    <>
        <div className={salaryStyle.checkTitle}>
            <div>
                <h1 className="fs-1 mt-5">급여 조회</h1>
            </div>
            <div className={salaryStyle.selectDate}>
                <select className={salaryStyle.selectYear} id="selectYear">
                </select>
                <select className={salaryStyle.selectMonth} id="selectMonth">
                </select>

            </div>
        </div>
    </>
    );
}

export default SalaryCheck;