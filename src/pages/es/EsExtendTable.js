  import {

    Container,
    Grid,
    Step,
    StepLabel,
    Stepper,
    TablePagination,
    Typography,
  } from "@mui/material";
  import * as React from "react";
  import Box from "@mui/material/Box";
  import Collapse from "@mui/material/Collapse";
  import IconButton from "@mui/material/IconButton";
  import Table from "@mui/material/Table";
  import TableBody from "@mui/material/TableBody";
  import TableCell from "@mui/material/TableCell";
  import TableContainer from "@mui/material/TableContainer";
  import TableHead from "@mui/material/TableHead";
  import TableRow from "@mui/material/TableRow";
  import Paper from "@mui/material/Paper";
  import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
  import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EsModal from "./EsModal";


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
    const [open, setOpen] = React.useState(false);

    
    const [openDi, setOpenDi] = React.useState(false);

    const handleClickOpen = () => {
      setOpenDi(true);
    };
  
    const handleClose = () => {
      setOpenDi(false);
    };
  


  
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
          <TableCell align="center"><EsModal/></TableCell>
          <TableCell align="center">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
  
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0, borderBottom: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1, }}>
                <Typography variant="h6" gutterBottom component="div">
                  전자결재 미리보기
                </Typography>
  
                <HorizontalLabelPositionBelowStepper>
                </HorizontalLabelPositionBelowStepper>


                
              </Box>
            </Collapse>
          </TableCell>
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
    ),
    createData(
      "2023-01-006",
      "휴가신청",
      "휴가신청합니다",
      "개발팀",
      "사원",
      "박준영",
      "2023-01-06",
      "결재진행중"
    ),
    createData(
      "2023-01-007",
      "휴가신청",
      "휴가신청합니다",
      "개발팀",
      "사원",
      "이상목",
      "2023-01-07",
      "결재진행중"
    ),
    createData(
      "2023-01-008",
      "휴가신청",
      "휴가신청합니다",
      "개발팀",
      "사원",
      "서도원",
      "2023-01-08",
      "결재진행중"
    ),
    createData(
      "2023-01-009",
      "휴가신청",
      "휴가신청합니다",
      "개발팀",
      "사원",
      "노재영",
      "2023-01-09",
      "결재진행중"
    ),
    createData(
      "2023-01-010",
      "휴가신청",
      "휴가신청합니다",
      "개발팀",
      "사원",
      "유호상",
      "2023-01-10",
      "결재진행중"
    ),
  ];
  
  
  
  const steps = [
    '기안',
    '중간결재 승인',
    '최종결재 승인 대기',
  ];
  
  function HorizontalLabelPositionBelowStepper() {
    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }


  function EsExtendTable() {


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };



    return (
      <>
       
        <Container>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
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
                      <TableCell align="center">간단히 보기</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <Row key={row.esNo} row={row} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
  
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Grid>
          </Container>
      </>
    );
  }
  
export default EsExtendTable;