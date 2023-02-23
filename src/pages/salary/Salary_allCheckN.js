import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import SelectDatePiker2 from './Salary_SalaryDatePiker';
import SalaryDataTableN from './SalaryDataTableN';

function AllCheckN(){
    

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
            <SalaryDataTableN className="pl-5" />
        </div>
        </>
    );
}

export default AllCheckN;