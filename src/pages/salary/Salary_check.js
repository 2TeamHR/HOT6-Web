import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import salarytableStyle from '../../resources/css/pages/salary/salaryTable.module.css';
import "react-datepicker/dist/react-datepicker.css";
import SelectDatePiker from './SalaryDatePiker';
import SalaryTable from './Salary_Table';
import { Link } from 'react-router-dom';
import BasicTable from './Salary_BasicTable';
import TaxTable from './Salary_TaxTable';


function SalaryCheck() {

    const onClickHandler = () => {

        alert("해당 내용은 준비중입니다.");
    }

    return (
    <>
        <div className={`ml-5 ${salaryStyle.checkTitle}`}>
            <div>
                <h1 className="fs-1 mt-5">급여 조회</h1>
            </div>
            <div className={salaryStyle.selectDate}>
                <SelectDatePiker />
            </div>
        </div>
        <div className= {`pt-5 ${salarytableStyle.tableStyle}`}>
            <BasicTable />
            <TaxTable />
        </div>
        <div className={`mt-5 ${salarytableStyle.tableStyle}`} >
            <SalaryTable />
        </div>

        <div className="pt-5 pr-5 mr-5 text-center">
            <Link to="/es/salaryForm" className="btn btn-primary mr-3">정정신청</Link>
            <button className="btn btn-primary ml-3" onClick={onClickHandler}>인쇄</button>
        </div>
    </>
    );
}

export default SalaryCheck;