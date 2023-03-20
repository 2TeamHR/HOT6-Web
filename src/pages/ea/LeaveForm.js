import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, Container, Grid, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EaSignerSearch from './EaSignerSearch';
import { useState } from 'react';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 200,
  height: 100
}));


function LeaveForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  return (
    <>
      <Container>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={8}>
            <Paper elevation={5}>
              <h2>휴가 신청서</h2>
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
                <Grid item xs={3}><label>기안문서번호</label></Grid>
                <Grid item xs={3}><input type="text" /></Grid>
                <Grid item xs={3}><label>기안일시</label></Grid>
                <Grid item xs={3}><LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disabled
                    openTo="day"
                    views={['year', 'month', 'day']}
                    inputFormat={'YYYY-MM-DD'}
                    value={new Date()}
                    renderInput={(params) => <TextField size="small" {...params} />}
                  /></LocalizationProvider></Grid>
                <Grid item xs={3}><label>제목</label></Grid>
                <Grid item xs={3}><input type="text" /></Grid>
                <Grid item xs={3}><label>내용</label></Grid>
                <Grid item xs={3}><input type="text" name="" id="" /></Grid>
                <Grid item xs={3}><label>휴가종류</label></Grid>
                <Grid item xs={3}><select name="" id="">
                  <option value="1">연차휴가</option>
                  <option value="2">출산휴가</option>
                  <option value="3">배우자출산휴가</option>
                  <option value="4">생리휴가</option>
                  <option value="5">가족돌봄휴가</option>
                </select></Grid>
                <Grid item xs={3}><label htmlFor="">휴가시작</label></Grid>
                <Grid item xs={3}><LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    openTo="day"
                    views={['year', 'month', 'day']}
                    inputFormat={'YYYY-MM-DD'}
                    minDate={new Date()}
                    value={startDate}
                    onChange={(newValue) => {
                      setStartDate(newValue);
                    }}
                    renderInput={(params) => <TextField size="small" {...params} />}
                  />
                </LocalizationProvider></Grid>
                <Grid item xs={3}><label htmlFor="">휴가종료</label></Grid>
                <Grid item xs={3}><LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    openTo="day"
                    views={['year', 'month', 'day']}
                    inputFormat={'YYYY-MM-DD'}
                    value={endDate}
                    minDate={new Date()}
                    onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                    renderInput={(params) => <TextField size="small" {...params} />}
                  /></LocalizationProvider></Grid>
                <Grid item xs={3}><label htmlFor="">첨부파일</label></Grid>
                <Grid item xs={3}><input type="file" /></Grid>
                <Grid item xs={3}></Grid>
              </Grid>
              <Button>신청하기</Button><Button>취소하기</Button></Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper sx={{ maxWidth: 200 }} elevation={5}>
              <EaSignerSearch></EaSignerSearch>
              {/* <TextField id="standard-basic" label="결재자 검색" variant="standard" />
            <Paper sx={{ height: 400 }}> */}
            </Paper>

          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default LeaveForm;