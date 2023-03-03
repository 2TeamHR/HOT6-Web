import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import SelectDatePiker2 from './Salary_SalaryDatePiker';
import SalaryDataTableN from './SalaryDataTableN';
import { useDispatch } from 'react-redux';
import { useSelect } from '@mui/base';
import { useEffect } from 'react';
import { callGetPaymentSalaryAPI } from '../../apis/SalaryAPICalls';

function AllCheckN(){

    const dispatch = useDispatch();

    const salary = useSelect(state => state.salaryReducer);
    const salaryList = salary.data;

    useEffect(
        () => {
            dispatch(callGetPaymentSalaryAPI({

            }));
        }
        , []
    );
    

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
            {
                salaryList.length > 0 && salaryList.map((salary) => (<SalaryDataTableN className="pl-5" key={ salary.salaryCode } salary={ salary } />))
            }
        </div>
        </>
    );
}

export default AllCheckN;