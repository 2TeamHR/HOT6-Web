import {
  Chip,
  Container,
  createTheme,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
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
import { Suspense, useEffect, useState } from "react";





function Row(docu1) {
  const { docu } = docu1;
  const [open, setOpen] = useState(false);
  const [stepCount, setStepCount] = useState(0);
  const [docuStatus, setDocuStatus] = useState('');
  const [statusColor, setStatusColor] = useState('primary');
  const count = 0;

  const theme = createTheme({
    typography: {
      fontFamily: [
  
        'Spoqa Han Sans Neo',
      ].join(',')
    },
    palette: {
      primary: {
        main: "#4AD395",
        // light: main값을 통해 계산됨
  	    // dark: main값을 통해 계산됨
        // contrastText: main값을 통해 계산됨
      },
    }
  });
  










  useEffect(() => {

    docu?.eaStatusCode === 'EA_STATUS_WAITING' ? setStatusColor('info') : 
    (docu?.eaStatusCode === 'EA_STATUS_FINISH' ? setStatusColor('success') : setStatusColor('primary'))

  }, [])


  useEffect(() => {

    setDocuStatus(docu?.eaStatusCategory?.eaStatusName);

  }, [])

console.log("docuStatus",docuStatus);


  return (
    <>

      <TableRow>
        <TableCell align="center">{docu?.eaCode}</TableCell>
        <TableCell align="center">{docu?.dtype}</TableCell>
        <TableCell align="center">{docu?.eaSubject}</TableCell>
        <TableCell align="center">{docu?.eaMember?.team?.teamName}</TableCell>
        <TableCell align="center">{docu?.eaMember?.rank?.rankName}</TableCell>
        <TableCell align="center">{docu?.eaMember?.memberName}</TableCell>
        <TableCell align="center">{docu?.eaDate}</TableCell>
        <TableCell align="center">
      


        <Chip label={docuStatus} color={statusColor} /> 






        </TableCell>
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
              <Box sx={{ alignContent: 'center' }}>

                <Stepper activeStep={stepCount} alternativeLabel>
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

    </>
  );
}

function EaRealExtendTablePrograss() {

  const dispatch = useDispatch();
  const documentList = useSelector(state => state.eaDocumentReducer);

  console.log("documentList{}", documentList);

  useEffect(() => {
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
                  <TableCell align="center">상세보기</TableCell>
                  <TableCell align="center">진행상태보기</TableCell>
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

export default EaRealExtendTablePrograss;