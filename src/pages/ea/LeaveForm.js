import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
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
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField } from "@mui/material";
import React from "react";
import { callApproverListAPI } from '../../apis/EaDocumentAPICalls2';
import axios from 'axios';


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

  const navigate = useNavigate();
        const [memberName1, setMemberName1] = useState('');
        const [members, setMembers] = useState([]);
        const [recipients, setRecipients] = useState([])
        const [form,setForm] = useState({
            recipients:[],
            messageTitle: '',
            messageContent: ''
        })
        const dispatch = useDispatch();
        const messageReducer = useSelector(state => state.messageReducer);
        const [count , setCount] = useState('');
        const [count2 , setCount2] = useState('');
        const [count3 , setCount3] = useState('');
  useEffect(() =>{
    if(memberName1) {
        axios.get(`http://localhost:8888/api/v1/message/search/${memberName1}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": `Bearer ${window.localStorage.getItem('accessToken')}`
            }})
        .then(response => {
         const membersData = response.data.data.map(member =>({ name:member.memberName, email:member.memberEmail}));   
        setMembers(membersData);
        console.log("결과값");
        console.log(response);
        }).catch(error =>{
            console.log(error)
            console.log("메세지 단 오류 ");
        })
        }
    }, [memberName1]);

    const handlerSearch = (e) => {
      e.preventDefault(); // 기본 동작을 막는다.
  
      const { name, value } = e.target;
      if (name === 'searchInput') {
          setMemberName1(value || '');
      }
  
      setForm({
          ...form,
          [name]: value,
      });
  };

  const handleSelectRecipient = (recipient) => {
    setRecipients([...recipients, recipient]);
    setMembers([]);
    document.getElementById('searchInput').value= '';

}
const handleRemoveRecipient = (recipient) => {
  setRecipients(recipients.filter( r=> r.id !== recipient.id));
}

const complete =(recipient) => {

     

      const names = recipients.map((r)=>r.name).join(', ');
      if(names.length > 0){
          document.getElementById('searchInput').value = names;
          setMemberName1(names);
      } else {
          document.getElementById('searchInput').value ='';
          setMemberName1('');
      }
      // setRecipients([]);
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
                  <Item>기안자</Item>

                  <Item>중간결재자</Item>

                  <Item>최종결재자</Item>

                </Stack>
              </div>

              {/* <Grid container columns={6}>
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
                <Grid item xs={3}><input name='eaSubject' onChange={onChangeHandler} /></Grid>
                <Grid item xs={3}><label>내용</label></Grid>
                <Grid item xs={3}><input name='eaDetail' onChange={onChangeHandler} /></Grid>
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
                    renderInput={(params) => <TextField size="small" {...params} />}
                  /></LocalizationProvider></Grid>
        
                <Grid item xs={3}></Grid>
              </Grid> */}
              <Button>신청하기</Button><Button>취소하기</Button></Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper sx={{ maxWidth: 200 }} elevation={5}>

              <Box component="div" sx={{ overflow: 'auto' }}>




                <TextField id="standard-basic" label="결재자 검색" variant="standard" name="searchInput" onChange={handlerSearch} />

                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {/* {sampleSigner?.map((no) => {
                    const labelId = `checkbox-list-secondary-label-${no}`;
                    return (
                      <ListItem
                        key={no}
                        secondaryAction={
                          <Button variant="contained">+</Button>
                        }
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemAvatar>
                            <Avatar
                              alt={`Avatar n°${no + 1}`} s
                              src={`/static/images/avatar/${no + 1}.jpg`}
                            />
                          </ListItemAvatar>
                          <ListItemText id={labelId} primary={no.name} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })} */}
                </List>
 
                <div >
                            <span>받는 사람 &ensp;</span>
                            <input type="text" 
                                   id="searchInput" 
                                   name="searchInput"
                                   onChange={handlerSearch}
                                   />
                            {/* <button>주소록</button> */}


                           
                        <div>
                            {recipients.map((recipient, index)=> (
                                <div key={index} >
                                    <b>{recipient.name} {recipient.email}</b>
                                    <button onClick={()=>handleRemoveRecipient(recipient)}>삭제</button>
                                    <button onClick={() =>complete(recipient)}>추가</button>
                                    
                                </div>    
                                ))}
                        </div>  
                        </div>
              </Box>


            </Paper>

          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default LeaveForm;