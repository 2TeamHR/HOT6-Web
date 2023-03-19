
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callEaLeaveDocumentAPI } from '../../apis/EaDocumentAPICalls';


export default function LeaveInfo({ docu }) {


  const dispatch = useDispatch();
  const leaveDocument = useSelector(state => state.eaDocumentReducer);
  const eaCode = docu?.eaCode;
  useEffect(() => {
    dispatch(callEaLeaveDocumentAPI(
      {eaCode}
    ));
  }, []);

  return (
    <>
      <Grid item xs={6}><label>휴가종류</label></Grid><Grid item xs={6}>{leaveDocument?.memberCode}</Grid>
      <Grid item xs={6}><label>휴가시작</label></Grid><Grid item xs={6}></Grid>
      <Grid item xs={6}><label>휴가종료</label></Grid><Grid item xs={6}></Grid>
      <Grid item xs={6}><label>첨부파일</label></Grid>
    </>
  );
}
