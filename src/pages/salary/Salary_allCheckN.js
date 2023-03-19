import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import SelectDatePiker2 from './Salary_SalaryDatePiker';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { callGetPaymentSalaryAPI } from '../../apis/SalaryAPICalls';
import CheckNTable from './Salary_CheckNTable';

function AllCheckN(){

    const dispatch = useDispatch();
    const member = useSelector(state => state.salaryReducer);

    let memberTable = '';


    memberTable = member;

    console.log(memberTable);
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
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {/* <button disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber - 1)}>이전 페이지</button>
            <button disabled={member.data?.length < itemsPerPage} onClick={() => setPageNumber(pageNumber + 1)}>다음 페이지</button> */}
            {/* <span>현재 페이지: {pageNumber}</span> */}
        </div>
        </>
    );
}

export default AllCheckN;