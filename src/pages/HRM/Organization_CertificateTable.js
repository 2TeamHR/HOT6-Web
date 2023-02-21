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

function createData(id, type, date, status) {
  return { id, type, date, status };
}

const rows = [
  createData(1, "경력증명서", "2023-02-15", "승인"),
  createData(2, "재직증명서", "2023-02-16", "대기"),
  createData(3, "경력증명서", "2023-02-17", "승인"),
];


export function Modal({onClose}) {
    
    return (
      <div className={modalStyle.modal}>
        <div className="modal-content">
            <button className={modalStyle.close} onClick={onClose}>
                Close
            </button>
            <p>경력증명서</p>
        </div>
        <div className="modal-text pt-5">
            <p>야ㅕ야야</p>
            <p>안녕하세용</p>
            <p>내용이에용 ㅋㅋㅋ</p>
        </div>
        <button 
            style={{ position: 'absolute', top: 390, left:215 }}
            onClick={() => {
                alert("준비중입니다.");
            }}
        >
            출력하기
        </button>
      </div>
    );
}


export default function CertificateTable() {
  const navigate = useNavigate();
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
      <TableContainer
        component={Paper}
        style={{ width: 1400, marginLeft: "auto", marginRight: "auto" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>신청번호</TableCell>
              <TableCell align="center">구분</TableCell>
              <TableCell align="center">신청날짜</TableCell>
              <TableCell align="center">결재상태</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow 
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ width: 50 }}>
                  {row.id}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {row.type}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {row.date}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  {row.status}
                </TableCell>
                <TableCell align="center" style={{ width: 150 }}>
                  <button
                    className="btn btn-primary"
                    onClick={handleButtonClick}
                  >
                    상세보기
                  </button>
                  {showModal && <Modal onClose={handleCloseModal}/>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <button
        type="submit"
        className="mt-3 btn btn-primary"
        style={{ display: "block", margin: "auto" }}
        onClick={() => {
          navigate("/es/certificationFrom");
        }}
      >
        증명서 신청
      </button>
    </>
  );
}
