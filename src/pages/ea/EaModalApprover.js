import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, Divider,Input, Paper,  Stack,  styled, ThemeProvider } from '@mui/material';

import { Button, Grid} from '@mui/material';
import LeaveInfo from './LeaveInfo';
import CertificationInfo from './CertificationInfo';
import SalaryInfo from './SalaryInfo';
import DutyInfo from './DutyInfo';
import LOAInfo from './LOAInfo';
import RetireInfo from './RetireInfo'
import ReinstatementInfo from './ReinstatementInfo'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 250,
  height: 100
}));

export default function EaModalNew({ documentInfo }) {

  const theme = createTheme({
    typography: {
      fontFamily: [
  
        'Spoqa Han Sans Neo',
      ].join(',')
    },
  });

  const [open, setOpen] = React.useState(false);
  ;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Button variant="outlined" onClick={handleClickOpen}>
        상세보기
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>전자결재</DialogTitle>
        <DialogContent>

          {documentInfo?.eaCode}

          <h2>{documentInfo?.dtype}</h2>
          <label>결재선</label>


          <div>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Item>기안자
                {documentInfo?.eaMember?.memberName}
                {documentInfo?.eaMember?.team.teamName}
                {documentInfo?.eaMember?.rank.rankName}

              </Item>

              {documentInfo?.eaApproverInfoList.map((eaApproverCode) => (
                <Item>
                  {eaApproverCode?.eaAuthCode === "MIDDLE" ? "중간결재자" : "최종결재자"}
                  {eaApproverCode?.eaMember?.memberName}
                  {eaApproverCode?.eaMember?.team.teamName}
                  {eaApproverCode?.eaMember?.rank.rankName}
                </Item>
              )
              )}
            </Stack>
          </div>


          <Grid container direction="row" columns={12}>
            <Grid item xs={6}><label>기안문서번호</label></Grid><Grid item xs={6}>{documentInfo?.eaCode}</Grid>
            <Grid item xs={6}><label>기안일시</label></Grid><Grid item xs={6}>{documentInfo?.eaDate}</Grid>
            <Grid item xs={6}><label>제목</label></Grid><Grid item xs={6}>{documentInfo?.eaSubject}</Grid>
            <Grid item xs={6}><label>내용</label></Grid><Grid item xs={6}>{documentInfo?.eaDetail}</Grid>


            {documentInfo?.dtype === "휴가신청" ? <LeaveInfo docu={documentInfo} /> : <div />}

            {documentInfo?.dtype === "증명서 신청" ? <CertificationInfo docu={documentInfo} /> : <div />}

            {documentInfo?.dtype === "예비군 신청" ? <DutyInfo docu={documentInfo} /> : <div />}

            {documentInfo?.dtype === "휴직신청" ? <LOAInfo docu={documentInfo} /> : <div />}

            {documentInfo?.dtype === "퇴직신청" ? <RetireInfo  docu={documentInfo}/> : <div />}

            {documentInfo?.dtype === "복직신청" ? <ReinstatementInfo docu={documentInfo} /> : <div />}

            {documentInfo?.dtype === "급여정정 신청" ? <SalaryInfo docu={documentInfo} /> : <div />}


            <Grid item xs={6}><label>첨부파일</label></Grid>
            <Grid item xs={6}><Input /></Grid>

          </Grid>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>승인</Button>
          <Button onClick={handleClose}>반려</Button>
        </DialogActions>


      </Dialog>
    </ThemeProvider >
    </>
  );
}