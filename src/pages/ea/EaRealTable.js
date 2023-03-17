import {
  Chip,
  Grid
} from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { callEaDocumentListAPI } from '../../apis/EaDocumentAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";


function EaRealTable() {

  const dispatch = useDispatch();
  const documentList = useSelector(state => state.eaDocumentReducer);

  console.log("documentList{}", documentList);


  useEffect(() => {
    dispatch(callEaDocumentListAPI());
  }, []);

  return (
    <>
      <Grid item xs={12}>
        <Table aria-label="collapsible table" sx={{ margin: 0 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">문서번호</TableCell>
              <TableCell align="center">문서유형</TableCell>
              <TableCell align="center">제목</TableCell>
              <TableCell align="center">부서명</TableCell>
              <TableCell align="center">직급</TableCell>
              <TableCell align="center">기안자</TableCell>
              <TableCell align="center">신청일</TableCell>
              <TableCell align="center">상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documentList.map((docu, index) => (<><TableRow key={docu.eaCode}>
              
              <TableCell align="center">{docu?.eaCode}</TableCell>              
              <TableCell align="center">{docu?.dtype}</TableCell>              
              <TableCell align="center">{docu?.eaSubject}</TableCell>
              <TableCell align="center">{docu?.eaMember?.team?.teamName}</TableCell>
              <TableCell align="center">{docu?.eaMember?.rank?.rankName}</TableCell>              
              <TableCell align="center">{docu?.eaMember?.memberName}</TableCell>
              <TableCell align="center">{docu?.eaDate}</TableCell>
              <TableCell align="center"><Chip label={docu?.eaStatusCategory?.eaStatusName} color="primary" /></TableCell>
              </TableRow>
            </>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
}

export default EaRealTable;
