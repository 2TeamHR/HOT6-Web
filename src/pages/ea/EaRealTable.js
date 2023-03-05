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

  
  function createData(
    esNo,
    esCategory,
    esSubject,
    esDept,
    esRank,
    esDrafterName,
    esDate,
    esState
  ) {
    return {
      esNo,
      esCategory,
      esSubject,
      esDept,
      esRank,
      esDrafterName,
      esDate,
      esState,
      history: [],
    };
  }
  
  function Row(props) {
    const { row } = props;
  
    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell align="center"  scope="row">{row.esNo}</TableCell>
          <TableCell align="center">{row.esCategory}</TableCell>
          <TableCell align="center">{row.esSubject}</TableCell>
          <TableCell align="center">{row.esDept}</TableCell>
          <TableCell align="center">{row.esRank}</TableCell>
          <TableCell align="center">{row.esDrafterName}</TableCell>
          <TableCell align="center">{row.esDate}</TableCell>
          <TableCell align="center">{row.esState}</TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  
  const rows = [];


  
  
  function EaRealTable() {

  
    return (
      <>
       
        
            <Grid item xs={12}>
                <Table aria-label="collapsible table" sx={{margin:0}}>      
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
                    {rows.map((row) => (
                      <Row key={row.esNo} row={row} />
                    ))}
                  </TableBody>
                </Table>
      
            </Grid>
          
      </>
    );
  }
  
  export default EaRealTable;
  