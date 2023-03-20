import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { callGetSalaryModalAPI, callPutSalaryPaymentSalaryAPI } from "../../apis/SalaryAPICalls";
import modalStyle from "../../resources/css/pages/salary/salary-modal.module.css";
import salarytableStyle from '../../resources/css/pages/salary/salaryTable.module.css';

function AllSalaryModal({ onClose, memberDetail, selectedSalaryCode }) {

  const member = useSelector(state => state.salaryReducer);

  console.log('member========', member);
  const dispatch = useDispatch();

  useEffect(
    () => {
        dispatch(callGetSalaryModalAPI({selectedSalaryCode}));

    }, []
    );

    const handleSubmit = (selectedSalaryCode) => {

        console.log(`selectedSalaryCode ====>`, selectedSalaryCode);
        dispatch(callPutSalaryPaymentSalaryAPI(selectedSalaryCode)).then(() => {});
    };

    useEffect(
        () => {
            dispatch(callGetSalaryModalAPI({selectedSalaryCode}));
    
        }, []
        );


  const totalTax = memberDetail.incomTax + memberDetail.healthTax + memberDetail.nationalTax;

  return (
    <div className={modalStyle.modal}>
            <button className={modalStyle.close} onClick={onClose}>
                닫기
            </button>
        <div className={salarytableStyle.tableStyle}>
            <Table striped style={{ width: 500 }} className={`${salarytableStyle.leftTable}`}>
                <thead className="mt-5">
                    <tr>
                    <th colSpan={2} className="text-center">
                        급여내역(원)
                    </th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                    <td>기본급</td>
                    <td>{memberDetail.basicSalary.toLocaleString()}</td>
                    </tr>
                    <tr>
                    <td>상여금</td>
                    <td>{memberDetail.bonus ? memberDetail.bonus.bonusSalary.toLocaleString() : 0}</td>
                    </tr>
                    <tr>
                    <td>식대</td>
                    <td>{memberDetail.mealSalary.toLocaleString()}</td>
                    </tr>
                    <tr>
                    <td>세전 총액</td>
                    <td>{memberDetail.beforeSalary.toLocaleString()}</td>
                    </tr>
                </tbody>
            </Table>
            <Table striped style={{width:500}} className={`${salarytableStyle.rightTable}`}>
                <thead className="mt-5">
                    <tr>
                    <th colSpan={2} className="text-center">공제내역(원)</th>
                    
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td>소득세</td>
                        <td>{memberDetail.incomTax.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>건강보험</td>
                        <td>{memberDetail.healthTax.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>국민연금</td>
                        <td>{memberDetail.nationalTax.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>총 공제액</td>
                        <td>{totalTax.toLocaleString()}</td>
                    </tr>
                </tbody>
            </Table>
        </div>

        <div className={salarytableStyle.tableStyle}>
            <Table striped style={{width:"400px"}} className={`${salarytableStyle.bottomTable}`} >
                <thead>
                    <tr>
                    <th colSpan={2} className="text-center">실 지급액(원)</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td>{memberDetail.afterSalary.toLocaleString()}</td>
                    </tr>
                
                </tbody>
            </Table>
        </div>
        <div style={{textAlign:"center", marginTop: "-400px"}}>
            <button onClick={() => {handleSubmit({selectedSalaryCode})}}>지급하기</button>
        </div>
    </div>
  );
}

export default AllSalaryModal;
