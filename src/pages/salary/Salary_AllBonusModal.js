import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { callGetBonusModalAPI } from "../../apis/SalaryAPICalls";
import modalStyle from "../../resources/css/pages/salary/salary-modal.module.css";
import salarytableStyle from '../../resources/css/pages/salary/salaryTable.module.css';

function AllBonusModal({ onClose, bonusDetail, bonusCode }) {

  const member = useSelector(state => state.salaryReducer);

  console.log('member========', member);
  const dispatch = useDispatch();

  useEffect(
    () => {
        dispatch(callGetBonusModalAPI({bonusCode}));

    }, []
    );

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
                        상여금 지급내역(원)
                    </th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                    <td>상여 구분</td>
                    <td>{bonusDetail.bonus.bonusType}</td>
                    </tr>
                    <tr>
                    <td>상여 금액</td>
                    <td>{bonusDetail.bonus.bonusSalary}</td>
                    </tr>
                    <tr>
                    <td>지급일</td>
                    <td>{bonusDetail.bonus.bonusPaymentsDate}</td>
                    </tr>
                </tbody>
            </Table>
            
        </div>
        <div style={{textAlign:"center"}}>
            <button>지급하기</button>
        </div>
    </div>
  );
}

export default AllBonusModal;
