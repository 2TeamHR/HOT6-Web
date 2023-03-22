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




/* 경력 증명서 */
export function EmploymentModal({onClose, certificate}) {

  console.log(`certificate3 ======>`, certificate);
    return (
      <div className={modalStyle.modal}>
        <div className="career-form">
            <button className={modalStyle.close} onClick={onClose}>
                Close
            </button>
            <div style={{textAlign:"center", fontSize:"30px"}}>
              재직증명서
            </div>
        </div>
        <div className="modal-text pt-5" style={{ justifyContent:"center", textAlign:"center"}}>
            <label>
              회사명 :
              <input type="text" value="The Tech Titan" readOnly/>
            </label>
            <br />
            <label>
              업종 :
              <input type="text" value="IT" readOnly/>
            </label>
            <br />
            <label>
              이름 :
            <input type="text" value={certificate.member?.memberName} readOnly />
            </label>
            <br />
            <label>
              부서명 :
              <input type="text" value={certificate.member?.teamName} readOnly />
            </label>
            <br />
            <label>
              직급 :
              <input type="text" value={certificate.member?.rankName} readOnly />
            </label>
            <br />
            <label>
              재직여부 :
              <input type="text" value={certificate.member?.workingStatus} readOnly />
            </label>
            <br />
            <label>
              재직기간 :
              <input type="text" value={certificate.member?.joinDate?.slice(0, 10)} readOnly />
               ~
               <input type="text" readOnly />
            </label>
            <br />
            {/* <label>
              중간 결재자 :
              <input type="text" value={certificate.eaApproverInfoList[0].eaMember.memberName} readOnly />
            </label>
            <br />
            <label>
              최종 결재자 :
              <input type="text" value={certificate.eaApproverInfoList[1].eaMember.memberName} readOnly />
            </label>
            <br /> */}

        </div>
        {certificate.eaStatusCategory.eaStatusName === "결재완료" && (
          <button 
            style={{ position: 'absolute', top: "88%", left:"47%" }}
            onClick={() => {
                alert("준비중입니다.");
            }}
        >
            출력하기
        </button>
        )}
        
      </div>
    );
}

/* 재직 증명서 */
export function CareerModal({onClose, certificate}) {

  console.log(`certificate3 ======>`, certificate);
    return (
      <div className={modalStyle.modal}>
        <div className="modal-content">
            <button className={modalStyle.close} onClick={onClose}>
                Close
            </button>
            <div style={{textAlign:"center", fontSize:"30px"}}>
              경력증명서
            </div>
        </div>
        <div className="modal-text pt-5" style={{ justifyContent:"center" }}>
            <p className="pl-5" style={{fontSize: "20px", borderBottom:"1px solid black"}}>인적사항</p> 
            <table>
              <tr colspan="2">
                <td>으흠</td>
              </tr>
            </table>
        </div>
        {certificate.eaStatusCategory.eaStatusName === "결재완료" && (
          <button 
            style={{ position: 'absolute', top: "88%", left:"47%" }}
            onClick={() => {
                alert("준비중입니다.");
            }}
        >
            출력하기
        </button>
        )}
      </div>
    );
}


export default function CertificateTable({certificate}) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificateInfo, setSelectedCertificateInfo] = useState(null);

  console.log(`certificate2====>`, certificate);

  function handleButtonClick(certificateInfo) {
    setSelectedCertificateInfo(certificateInfo);
    setShowModal(true);
  }
  
  function handleCloseModal() {
    setSelectedCertificateInfo(null);
    setShowModal(false);
  }
  
  console.log(`selectedCertificateInfo ====<<`, selectedCertificateInfo);

  return (
    <>
      <TableContainer
        component={Paper}
        style={{ width: 1400, marginLeft: "auto", marginRight: "auto" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>신청번호</TableCell>
              <TableCell align="center">구분</TableCell>
              <TableCell align="center">신청부수</TableCell>
              <TableCell align="center">신청날짜</TableCell>
              <TableCell align="center">결재상태</TableCell>
              <TableCell align="center">결재승인자</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {certificate.map((certiInfo, index) => (
              <TableRow 
                key={certiInfo.eaCode}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ width: 50 }}>
                  { index + 1 }
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {certiInfo.eaCertCategory?.certCategoryName}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {certiInfo.certRequireCount}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {certiInfo.eaDate}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {certiInfo.eaStatusCategory?.eaStatusName}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {certiInfo.eaApproverInfoList && certiInfo.eaApproverInfoList[1].eaMember.memberName}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleButtonClick(certiInfo)}
                  >
                    상세보기
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
              {showModal && selectedCertificateInfo && selectedCertificateInfo.eaCertCategory?.certCategoryName === '재직증명서' && <EmploymentModal onClose={handleCloseModal} certificate={selectedCertificateInfo} /> }
              {showModal && selectedCertificateInfo && selectedCertificateInfo.eaCertCategory?.certCategoryName === '경력증명서' && <CareerModal onClose={handleCloseModal} certificate={selectedCertificateInfo} /> }
              
              
        </Table>
      </TableContainer>
      
      <button
        type="submit"
        className="mt-3 btn btn-primary"
        style={{ display: "block", margin: "auto" }}
        onClick={() => {
          navigate("/ea/certificationForm");
        }}
      >
        증명서 신청
      </button>
    </>
  );
}
