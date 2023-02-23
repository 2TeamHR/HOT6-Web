import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { Button,  Grid, TextField } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 200,
  height: 100
}));

const theme = createTheme({
  typography: {
    fontFamily: [
      'Spoqa Han Sans Neo',
    ].join(',')
  },
});

function CertificationForm() {
  return (
    <>
    <ThemeProvider theme={theme}>

      <Grid container direction="row">
        <Grid item xs={8}>
          <Paper elevation={5} >
          <h2>증명서 신청서</h2>

          <label>결재선</label> 
          <div>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Item>기안자</Item>
                <Item>중간결재자</Item>
                <Item>최종결재자</Item>
              </Stack>
            </div>
            <Grid container columns={6}>
            <Grid item xs={3}><label>기안문서번호</label></Grid><Grid item xs={3}><input type="text" /></Grid>
            <Grid item xs={3}><label>기안일시</label></Grid><Grid item xs={3}><input type="date" name="" id="" /></Grid>
            <Grid item xs={3}><label>제목</label></Grid><Grid item xs={3}><input type="text" /></Grid>
            <Grid item xs={3}><label>내용</label></Grid><Grid item xs={3}><input type="text" name="" id="" /></Grid>
        </Grid>
          <Button>신청하기</Button><Button>취소하기</Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{width:150}} elevation={5}>
            <TextField id="standard-basic" label="결재자 검색" variant="standard" />
            <Paper sx={{height:400}}>
            </Paper>            
            </Paper>        
        </Grid>
      </Grid></ThemeProvider>
    </>
  );
}

export default CertificationForm;