import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EaSignerSearch from './EaSignerSearch';
import { useEffect, useState } from 'react';
import { callGetMemberAPI } from '../../apis/MemberAPICalls';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decodeJwt } from "../../utils/tokenUtils";

import { callEaLeaveInsertAPI } from "../../apis/EaDocumentInsertAPICalls";

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


//   {
//     "memberCode": "220204",
//     "eaSubject": "new 휴가",
//     "eaDetail": "휴가신청합니다",
//     "eaApproverInfoList": [
//         {
//             "memberCode": "180034",
//             "eaAuthCode": "MIDDLE"
//         },
//         {
//             "memberCode": "160008",
//             "eaAuthCode": "FINAL"
//         }
//     ],
//     "leaveStartDate": "2023-03-16",
//     "leaveEndDate": "2023-03-16",
//     "leaveCategoryCode": "LC1"
// }






  const navigate = useNavigate();
  const dispatch = useDispatch();

  const member = useSelector(state => state.memberReducer);  
  const document = useSelector(state => state.eaDocumentInsertReducer);  
  const token = decodeJwt(window.localStorage.getItem("accessToken"));   
  const memberDetail = member.data;

  console.log('memberDetail', memberDetail);

  useEffect(
      () => {    
          if(token !== null) {
              dispatch(callGetMemberAPI({
                  memberCode: token.sub
              }));          
          }
      }
      ,[]
  );



  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [form, setForm] = useState(   {
        memberCode: '',
        eaSubject: '',
        eaDetail: '',
        eaApproverInfoList: [
            {
                memberCode: '',
                eaAuthCode: ''
            }
            
        ],
        leaveStartDate: startDate,
        leaveEndDate: endDate,
        leaveCategoryCode: ''
    });


    const onStartDateChangeHandler = (date) =>{
      setForm({
          ...form,
          leaveStartDate: startDate
      });
  };

  const onEndDateChangeHandler = (date) =>{
    setForm({
        ...form,
        leaveEndDate: endDate
    });
};

const onChangeHandler = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
};

const onClickLeaveDocumentSubmitHandler = () => {
  const formData = new FormData();

  formData.append("memberCode", form.memberCode);
  formData.append("eaSubject", form.eaSubject);
  formData.append("eaDetail", form.eaDetail);
  formData.append("eaApproverInfoList", form.eaApproverInfoList);
  formData.append("leaveStartDate", form.leaveStartDate);
  formData.append("leaveEndDate", form.leaveEndDate);
  formData.append("leaveCategoryCode", form.leaveCategoryCode);

  dispatch(callEaLeaveInsertAPI({
    form: formData
}));    

}



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
                  <Item><Typography>기안자</Typography>
              <Typography></Typography>
              <Grid>
              <Typography></Typography>
              <Typography></Typography></Grid>

              </Item>

                  <Item>중간결재자</Item>
                  <Item>최종결재자</Item>
                </Stack>
              </div>

              <Grid container columns={6}>
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
                <Grid item xs={3}><input name='eaSubject' onChange={onChangeHandler}/></Grid>
                <Grid item xs={3}><label>내용</label></Grid>
                <Grid item xs={3}><input name='eaDetail' onChange={onChangeHandler}/></Grid>
                <Grid item xs={3}><label>휴가종류</label></Grid>
                <Grid item xs={3}><select name="leaveCategoryCode" onChange={onChangeHandler}>
                  <option value="LC1">연차휴가</option>
                  <option value="LC2">출산휴가</option>
                  <option value="LC3">배우자출산휴가</option>
                  <option value="LC5">보건휴가</option>
                  <option value="LC6">가족돌봄휴가</option>
                </select></Grid>
                <Grid item xs={3}><label>휴가시작</label></Grid>
                <Grid item xs={3}><LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    openTo="day"
                    views={['year', 'month', 'day']}
                    inputFormat={'YYYY-MM-DD'}
                    minDate={new Date()}
                    value={startDate}
                    onChange={onStartDateChangeHandler}
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
                    onChange={onEndDateChangeHandler}
                    renderInput={(params) => <TextField size="small" {...params} />}
                  /></LocalizationProvider></Grid>
                {/* <Grid item xs={3}><label htmlFor="">첨부파일</label></Grid>
                <Grid item xs={3}><input type="file" /></Grid> */}
                <Grid item xs={3}></Grid>
              </Grid>
              <Button onClick={onClickLeaveDocumentSubmitHandler}>신청하기</Button><Button>취소하기</Button></Paper>
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