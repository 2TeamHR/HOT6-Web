import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import SelectDatePiker2 from './Salary_SalaryDatePiker';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { callGetPaymentSalaryAPI } from '../../apis/SalaryAPICalls';
import CheckNTable from './Salary_CheckNTable';

function AllCheckY(){

    const dispatch = useDispatch();


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

        {/* 데이터 테이블 */}
        <div className="pt-5 pl-5">
            <CheckNTable />
        </div>

        {/* 페이지 처리 */}
        <div className="pagingArea" align="center">
            {/* 맨 앞으로 이동 버튼 */}
            <button onClick={() => ""}>
                &lt;&lt;
            </button>
            {/* 이전 페이지 버튼 */}
            <button onClick={() => ""}>
                &lt;
            </button>
            {/* 숫자 버튼 */}
            <button onClick={() => ""} disabled="disabled">1</button>
            <button onClick={() => ""}>2</button>
            <button onClick={() => ""}>3</button>
            {/* 다음 페이지 버튼 */}
            <button onClick={() => ""}>
                &gt;
            </button>
            {/* 마지막 페이지로 이동 버튼 */}
            <button onClick={() => ""}>
                &gt;&gt;
            </button>
        </div>
        </>
    );
}

export default AllCheckY;