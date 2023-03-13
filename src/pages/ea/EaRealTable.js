import {
  Button,
  Container,
  Grid,
} from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { callEaDocumentListAPI } from '../../apis/EaDocumentAPICalls';
import { useSelecter, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";

function EaRealTable() {
  // const dispatch = useDispatch();
  // const [eaTableData, setEaTableData] = useState([]);

  useEffect(
    () => {
      dispatch(callEaDocumentListAPI({

      }));


    }, []
  );


  // console.log(eaTableData);



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

          </TableBody>
        </Table>
      </Grid>
    </>
  );
}

export default EaRealTable;
