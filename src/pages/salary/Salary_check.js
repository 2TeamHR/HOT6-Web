import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import salarytableStyle from '../../resources/css/pages/salary/salaryTable.module.css';
import "react-datepicker/dist/react-datepicker.css";
import SelectDatePiker from './SalaryDatePiker';
import SalaryTable from './Salary_Table';
import { Link } from 'react-router-dom';
import BasicTable from './Salary_BasicTable';
import TaxTable from './Salary_TaxTable';
import SpecificationModal from './Salary_Specification';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callGetMySalaryAPI } from '../../apis/SalaryAPICalls';

function SalaryCheck() {

    const dispatch = useDispatch();
    const salary = useSelector(state => state.salaryReducer);
    const tax = useSelector(state => state.taxReducer);
    const salaryList = salary.data;
    const taxList = tax.data;

    // useEffect(
    //     () => {
    //         dispatch(callGetMySalaryAPI(
             
    //         )); // 내 급여 조회
    //     }, []
    // );

    console.log('salary', salary);

    const [showModal, setShowModal] = useState(false);

    function handleButtonClick() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    console.log(showModal);


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
            {
                Array.isArray(salaryList) && salaryList.map((salary) => (<BasicTable key={ salary.salayCode } salary= { salary } />))
            }
            {
                Array.isArray(taxList) && salaryList.map((tax) => (<TaxTable key= { salary.salaryCode } tax = { tax } />))
            }
        </div>
        <div className={`mt-5 ${salarytableStyle.tableStyle}`} >
            {
                Array.isArray(salaryList) && salaryList.map((salary) => (<SalaryTable key={ salary.salaryCode } salary= { salary } />))
            }
        </div>

        <div className="pt-5 text-center">
            <Link to="/es/salaryForm" className="btn btn-primary mr-3">정정신청</Link>
            <button className="btn btn-primary ml-3" onClick={handleButtonClick}>급여 명세서</button>
            {showModal && <SpecificationModal onClose={handleCloseModal}/>}
        </div>
    </>
    );
}

export default SalaryCheck;