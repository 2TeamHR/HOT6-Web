import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import salarytableStyle from '../../resources/css/pages/salary/salaryTable.module.css';
import "react-datepicker/dist/react-datepicker.css";
import SelectDatePiker from './SalaryDatePiker';
import { Link } from 'react-router-dom';
import BasicTable from './Salary_BasicTable';
import SpecificationModal from './Salary_Specification';
import { useState } from 'react';
import { useSelector } from 'react-redux';


function SalaryCheck() {

    const salary = useSelector(state => state.salaryReducer);

    let salaryDetail = '';

    if(salary[0] !== undefined){
        salaryDetail = salary[0];
    } else {
        salaryDetail = {basicSalary: 0, bonus:{
            bonusSalary: 0
        }, mealSalary: 0, beforeSalary:0 };
    }
     

    // console.log('salary ================', salary); 

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
        <div className= {`pt-5 ${salarytableStyle.tableStyle}`}>
        
             <BasicTable salaryDetail={ salaryDetail } /> 
                         {/* { 
                Array.isArray(salaryDetail) && salaryDetail.map((salary) => (<BasicTable salaryDetail={ salaryDetail } />))
            }
            { 
                Array.isArray(salaryDetail) && salaryDetail.map((salary) => (<TaxTable salaryDetail={ salaryDetail } />))
            } */}
            
        </div>
        <div className={`mt-5 ${salarytableStyle.tableStyle}`} >
            {/* { 
                Array.isArray(salaryDetail) && salaryDetail.map((salary) => (<SalaryTable salaryDetail={ salaryDetail } />))
            } */}
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