import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import { Button,  Grid, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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
  const [value, setValue] = React.useState(dayjs('2022-04-07'));
  return (
    <>
      <Grid container direction="row">
        <Grid item xs={8}>
          <h2>휴가 신청서</h2>
          <ul style={{ listStyle: "none" }}>
            <li>
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
            </li>
            <li><label>기안문서번호</label><input type="text" /></li>
            <li><label>기안일시</label><input type="date" name="" id="" /></li>
            <li><label>제목</label><input type="text" /></li>
            <li><label>내용</label><input type="text" name="" id="" /></li>
            <li><label>휴가종류</label><select name="" id="">
              <option value="1">연차휴가</option>
              <option value="2">출산휴가</option>
              <option value="3">배우자출산휴가</option>
              <option value="4">생리휴가</option>
              <option value="5">가족돌봄휴가</option>
            </select></li>
            <li><label htmlFor="">휴가시작</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disableFuture
                  openTo="day"
                  views={['year', 'month', 'day']}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField size="small" {...params} />}
                />
              </LocalizationProvider></li>
            <li><label htmlFor="">휴가종료</label><LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disableFuture
                  openTo="day"
                  views={['year', 'month', 'day']}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField size="small" {...params} />}
                />
              </LocalizationProvider></li>
            <li><label htmlFor="">첨부파일</label><input type="file" /></li>
          </ul>
          <Button>신청하기</Button><Button>취소하기</Button>
        </Grid>
        <Grid item xs={4}>
          <TextField id="standard-basic" label="결재자 검색" variant="standard" />
        </Grid>
      </Grid>
    </>
  );
}

export default LeaveForm;