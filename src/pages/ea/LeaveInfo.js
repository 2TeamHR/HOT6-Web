
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callEaLeaveDocumentAPI } from '../../apis/EaDocumentAPICalls2';


export default function LeaveInfo({ docu }) {

  const eaCode = docu?.eaCode;
  const dispatch = useDispatch();
  const leaveDocument = useSelector(state => state.eaDocumentReducer2);
  
  useEffect(() => {  
      dispatch(callEaLeaveDocumentAPI(
        { eaCode }
      ));
  }, []);

  return (
    <>
    {console.log(leaveDocument)}
      <Grid item xs={6}><label>휴가종류</label></Grid><Grid item xs={6}>{leaveDocument?.leaveCategory?.leaveCategoryName}</Grid>
      <Grid item xs={6}><label>휴가시작일</label></Grid><Grid item xs={6}>{leaveDocument?.leaveStartDate}</Grid>
      <Grid item xs={6}><label>휴가종료일</label></Grid><Grid item xs={6}>{leaveDocument?.leaveEndDate}</Grid>
    </>
  );
}
