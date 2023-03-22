import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import salarytableStyle from '../../resources/css/pages/salary/salaryTable.module.css';
import "react-datepicker/dist/react-datepicker.css";
import SelectDatePiker from './SalaryDatePiker';
import { Link } from 'react-router-dom';
import BasicTable from './Salary_BasicTable';
import SpecificationModal from './Salary_Specification';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaxTable from './Salary_TaxTable';
import SalaryTable from './Salary_Table';
import { callGetMemberAPI } from '../../apis/MemberAPICalls';
import { decodeJwt } from '../../utils/tokenUtils';
import { shouldAutoRemoveFilter } from '@tanstack/table-core';


function SalaryCheck() {

    const salary = useSelector(state => state.salaryReducer);
    const member = useSelector(state => state.memberReducer);
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const dispatch = useDispatch();

    const memberDetail = [{
        memberInfo : member.data

    }];

    let salaryDetail = '';

    useEffect(
        () => {
            if (token !== null) {
                dispatch(callGetMemberAPI({ 
                  memberCode: token.sub 
                }));
              }
        }, []
    );

    console.log('memberDetail===========', memberDetail);

    if(salary[0] !== undefined){
        salaryDetail = salary[0];
    } else {
        salaryDetail = {
            basicSalary: 0, 
            bonus:{
                bonusSalary: 0
            }, 
            mealSalary: 0,
            beforeSalary: 0, 
            incomTax: 0,
            healthTax: 0,
            nationalTax: 0,
            afterTax: 0,
            afterSalary: 0
        };
    }
    console.log(salaryDetail);

    const [showModal, setShowModal] = useState(false);

    function handleButtonClick() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
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
        <div className= {`pt-5 ${salarytableStyle.tableStyle2}`}>
        
            <BasicTable salaryDetail={ salaryDetail } className={`${salarytableStyle.leftTable}`} /> 
            <TaxTable salaryDetail={ salaryDetail } className={`${salarytableStyle.rightTable}`} />
        </div>
        <div className={`mt-5 ${salarytableStyle.bottomTable}`} >
            <SalaryTable salaryDetail={ salaryDetail } />

        </div>

        <div className="pt-5 text-center">
            <Link to="/ea/salaryForm" className="btn btn-primary mr-3">정정신청</Link>
            <button className="btn btn-primary ml-3" onClick={handleButtonClick}>급여 명세서</button>
            {showModal && <SpecificationModal onClose={handleCloseModal} salaryDetail={ salaryDetail } memberDetail={ memberDetail } />}
        </div>
    </>
    );
}

export default SalaryCheck;