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
  
  // Row.propTypes = {
  //   row: PropTypes.shape({
  //     calories: PropTypes.number.isRequired,
  //     carbs: PropTypes.number.isRequired,
  //     fat: PropTypes.number.isRequired,
  //     history: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         amount: PropTypes.number.isRequired,
  //         customerId: PropTypes.string.isRequired,
  //         date: PropTypes.string.isRequired,
  //       })
  //     ).isRequired,
  //     name: PropTypes.string.isRequired,
  //     price: PropTypes.number.isRequired,
  //     protein: PropTypes.number.isRequired,
  //   }).isRequired,
  // };
  
  const rows = [
    createData(
      "2023-01-001",
      "휴가신청",
      "휴가신청합니다",
      "개발팀",
      "사원",
      "박준영",
      "2023-01-01",
      "결재진행중"
    ),
    createData(
      "2023-01-002",
      "휴가신청",
      "휴가신청합니다",
      "개발팀",
      "사원",
      "이상목",
      "2023-01-02",
      "결재진행중"
    ),
    createData(
      "2023-01-003",
      "휴가신청",
      "휴가신청합니다",
      "개발팀",
      "사원",
      "서도원",
      "2023-01-03",
      "결재진행중"
    ),
    createData(
      "2023-01-004",
      "휴가신청",
      "휴가신청합니다",
      "개발팀",
      "사원",
      "노재영",
      "2023-01-04",
      "결재진행중"
    ),
    createData(
      "2023-01-005",
      "휴가신청",
      "휴가신청합니다",
      "개발팀",
      "사원",
      "유호상",
      "2023-01-05",
      "결재진행중"
    )

  ];


  
  
  function EsTable() {

  
    return (
      <>
       
        <Container>
          
          <Button variant="outlined">자세히 보기</Button>
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
          </Container>
      </>
    );
  }
  
  export default EsTable;
  