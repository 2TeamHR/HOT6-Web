import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import SelectDatePiker2 from './Salary_DatePiker2';

function Severance () {
    
    return (
        <>
            <div className={`ml-5 ${salaryStyle.checkTitle}`}>
                <div>
                    <h1 className="fs-1 mt-5">퇴직금 지급 현황</h1>
                </div>
                <div className={salaryStyle.selectDate}>
                    <SelectDatePiker2 />
                </div>
            </div>
        </>
    );
}

export default Severance;