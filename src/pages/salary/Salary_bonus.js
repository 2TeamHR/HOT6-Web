import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callGetBonusSalaryAPI } from '../../apis/SalaryAPICalls';
import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import BonusTable from './SalaryBonusTable';
import BonusDatePicker from './Salary_BonusDatePiker';

function SalaryBonus(){
    
    const dispatch = useDispatch();
    const bonus = useSelector(state => state.salaryReducer);
    
    useEffect(
        () => {
            dispatch(callGetBonusSalaryAPI({

            }));
        }
        , []
    );
 
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
            <BonusTable />
        </div>
        </>
    );
}

export default SalaryBonus;