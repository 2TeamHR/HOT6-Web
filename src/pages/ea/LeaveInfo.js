
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callEaDocumentListAPI, callEaLeaveDocumentAPI } from '../../apis/EaDocumentAPICalls';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 200,
  height: 100
}));

export default function LeaveInfo({ docu }) {

  const [eaCode, setEaCode] = useState('');
  const dispatch = useDispatch();
  const leaveDocument = useSelector(state => state.eaDocumentReducer);
  console.log(docu?.eaCode);

  setEaCode(docu?.eaCode);

  useEffect(() => {
    dispatch(callEaDocumentListAPI(
      
    ));
  }, []);
console.log(leaveDocument);

  return (
    <>
      <Grid item xs={6}><label>휴가종류</label></Grid><Grid item xs={6}>{docu?.eaCode}</Grid>
      {/* <Grid item xs={6}><label>휴가시작</label></Grid><Grid item xs={6}>{leaveDocument?.leaveEndDate}</Grid> */}
      <Grid item xs={6}><label>휴가종료</label></Grid><Grid item xs={6}></Grid>
      <Grid item xs={6}><label>첨부파일</label></Grid>
    </>
  );
}
