import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, FormControl, Input, InputLabel, MenuItem, Paper, Select, Stack, styled } from '@mui/material';
import dayjs from 'dayjs';
import { Button, Grid, TextField, FilledInput } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 250,
  height: 100
}));

export default function EsModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [leave, setLeave] = React.useState('');

  const handleChange = (event) => {
    setLeave(event.target.value);
  };




  const [value, setValue] = React.useState(dayjs('2022-04-07'));
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        결재 진행중
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>전자결재</DialogTitle>
        <DialogContent>

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


          <Grid container direction="row" columns={12}>
            <Grid item xs={6}><label>기안문서번호</label></Grid><Grid item xs={6}><TextField id="standard-basic" variant="standard" /></Grid>
            <Grid item xs={6}><label>기안일시</label></Grid><Grid item xs={6}><TextField id="standard-basic" variant="standard" /></Grid>
            <Grid item xs={6}><label>제목</label></Grid><Grid item xs={6}><TextField id="standard-basic" variant="standard" /></Grid>
            <Grid item xs={6}><label>내용</label></Grid><Grid item xs={6}><TextField
              id="standard-multiline-static"

              multiline
              rows={8}

            /></Grid>
            <Grid item xs={6}><label>휴가종류</label></Grid>
            <Grid item xs={6}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" margin='2'>휴가 종류</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={leave}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>연차휴가</MenuItem>
                  <MenuItem value={20}>출산휴가</MenuItem>
                  <MenuItem value={30}>배우자출산휴가</MenuItem>
                  <MenuItem value={40}>생리휴가</MenuItem>
                  <MenuItem value={50}>가족돌봄휴가</MenuItem>
                </Select>
              </FormControl></Grid>

            <Grid item xs={6}><label>휴가시작</label></Grid>
            <Grid item xs={6}>
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
              </LocalizationProvider></Grid>
            <Grid item xs={6}><label>휴가종료</label></Grid>
            <Grid item xs={6}><LocalizationProvider dateAdapter={AdapterDayjs}>
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
            </LocalizationProvider></Grid>
            <Grid item xs={6}><label>첨부파일</label></Grid>
            <Grid item xs={6}><Input /></Grid>

          </Grid>



        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>승인</Button>
          <Button onClick={handleClose}>반려</Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}