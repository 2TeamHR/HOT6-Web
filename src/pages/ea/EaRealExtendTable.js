import {
  Chip,
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





function Row(docu1) {
  const { docu } = docu1;
  console.log("docu", docu)
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>

      <TableRow>
        <TableCell align="center">{docu?.eaCode}</TableCell>
        <TableCell align="center">{docu?.dtype}</TableCell>
        <TableCell align="center">{docu?.eaSubject}</TableCell>
        <TableCell align="center">{docu?.eaMember?.team?.teamName}</TableCell>
        <TableCell align="center">{docu?.eaMember?.rank?.rankName}</TableCell>
        <TableCell align="center">{docu?.eaMember?.memberName}</TableCell>
        <TableCell align="center">{docu?.eaDate}</TableCell>
        <TableCell align="center"><Chip label={docu?.eaStatusCategory?.eaStatusName} color="primary" /></TableCell>
        <TableCell align="center">
          <EaModal documentInfo={docu} />
        </TableCell>
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
              <Box sx={{ alignContent: 'center'  }}>
                <Stepper activeStep={1} alternativeLabel>
                <Step>
                <StepLabel>{docu?.eaMember?.memberName}</StepLabel>
                </Step>
                  {docu?.eaApproverInfoList?.map((label) => (
                    <Step key={label?.eaMember?.eaApproverCode}>
                      <StepLabel>{label?.eaMember?.memberName}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
             </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

    </React.Fragment>
  );
}




























function EaRealExtendTable() {

  const dispatch = useDispatch();
  const documentList = useSelector(state => state.eaDocumentReducer);

  console.log("documentList{}", documentList);

  React.useEffect(() => {
    dispatch(callEaDocumentListAPI());
  }, []);

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
                  <TableCell align="center">확인</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {documentList?.map((row) => (
                  <Row key={row.eaCode} docu={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>


        </Grid>
      </Container >
    </>
  );
}

export default EaRealExtendTable;