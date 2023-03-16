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
import EaModal from "./EaModal";
import { useDispatch, useSelector } from "react-redux";
import { callEaDocumentListAPI } from "../../apis/EaDocumentAPICalls";



function EaRealExtendTable() {


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch();
  const documentList = useSelector(state => state.eaDocumentReducer);

  console.log("documentList{}", documentList);


  React.useEffect(() => {
    dispatch(callEaDocumentListAPI());
  }, []);

  const [open, setOpen] = React.useState(false);

  const [openDi, setOpenDi] = React.useState(false);
 
  const handleClickOpen = () => {
    setOpenDi(true);
  };

  const handleClose = () => {
    setOpenDi(false);

  }

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
              {documentList.map((docu, index) => (<><TableRow key={docu.eaCode}>
              
              <TableCell align="center">{docu?.eaCode}</TableCell>              
              <TableCell align="center">{docu?.dtype}</TableCell>              
              <TableCell align="center">{docu?.eaSubject}</TableCell>
              <TableCell align="center">{docu?.eaMember?.team?.teamName}</TableCell>
              <TableCell align="center">{docu?.eaMember?.rank?.rankName}</TableCell>              
              <TableCell align="center">{docu?.eaMember?.memberName}</TableCell>
              <TableCell align="center">{docu?.eaDate}</TableCell>
              <TableCell align="center">{docu?.eaStatusCategory?.eaStatusName}</TableCell>
              </TableRow>
            </>
            ))}
            <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, borderBottom: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, }}>
              <Typography variant="h6" gutterBottom component="div">
                전자결재 미리보기
              </Typography>

              <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {/* {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))} */}
      </Stepper>
    </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Grid>
      </Container>
    </>
  );
}

export default EaRealExtendTable;