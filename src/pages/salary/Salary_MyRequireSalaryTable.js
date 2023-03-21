import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import modalStyle from "../../resources/css/pages/hrm/organization-modal.module.css";
import MyRequireBasicTable from "./Salary_MyRequireBasicTable";
import MyRequireTaxTable from "./Salary_MyRequireTaxTable";
import MyRequireAfterSalary from "./Salary_MyRequireAfterSalary";



/* 급여 정정 신청서 */
export function RequireSalaryModal({onClose, salaryInfo}) {

    return (
      <div className={modalStyle.modal}>
        <div className="modal-content">
            <button className={modalStyle.close} onClick={onClose}>
                Close
            </button>
            <div style={{textAlign:"center", fontSize:"30px"}}>
              급여 확인서
            </div>
        </div>
        <div className= "pt-5">
        
            <MyRequireBasicTable salaryInfo={ salaryInfo } /> 
            <MyRequireTaxTable salaryInfo={ salaryInfo } />
        </div>
        <div className="mt-5" >
            <MyRequireAfterSalary salaryInfo={ salaryInfo } />

        </div>

        <button 
            style={{ position: 'absolute', top: "88%", left:"47%" }}
            onClick={() => {
                alert("준비중입니다.");
            }}
        >
            출력하기
        </button>
      </div>
    );
}


export default function MyRequireSalaryTable({requireSalary}) {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedSalaryCode, setSelectedSalaryCode] = useState(null);
  const [salaryInfo, setSalaryInfo] = useState();


  function handleButtonClick(salary) {

    setSalaryInfo(salary);
    setSelectedSalaryCode(salary.salaryCode);
    setShowModal(true);
  }
  
  function handleCloseModal() {
    setSelectedSalaryCode({});
    setShowModal(false);
  }
  
  return (
    <>
      <TableContainer
        component={Paper}
        style={{ width: 1400, marginLeft: "auto", marginRight: "auto" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell align="center">구분</TableCell>
              <TableCell align="center">신청날짜</TableCell>
              <TableCell align="center">결재상태</TableCell>
              <TableCell align="center">결재승인자</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requireSalary && requireSalary.map((salary, index) => (
              <TableRow 
                key={require.eaCode}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ width: 50 }}>
                  { index + 1 }
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {salary.dtype}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {salary.eaDate}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {salary.eaStatusCategory?.eaStatusName}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {salary.eaApproverInfoList && salary.eaApproverInfoList[1].eaMember.memberName}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                {salary.eaStatusCategory.eaStatusName === "결재완료" &&
                  <button
                    className="btn btn-primary"
                    onClick={() => handleButtonClick(salary)}
                    onClose={handleCloseModal}
                  >
                    상세보기
                  </button>
                }
                </TableCell>
              </TableRow>
            ))}
                  {showModal && <RequireSalaryModal 
                    onClose={handleCloseModal} 
                    salaryInfo = { salaryInfo.salary } 
                    selectedSalaryCode= { selectedSalaryCode }    
                  />}
          </TableBody>
              
              
        </Table>
      </TableContainer>
      
      <button
        type="submit"
        className="mt-3 btn btn-primary"
        style={{ display: "block", margin: "auto" }}
        onClick={() => {
          navigate("/ea/salaryForm");
        }}
      >
        급여 정정 신청
      </button>
    </>
  );
}
