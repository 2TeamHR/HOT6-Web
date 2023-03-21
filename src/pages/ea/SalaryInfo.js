import * as React from 'react';

import { Grid} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { callEaSalaryDocumentAPI } from '../../apis/EaDocumentAPICalls2';


function SalaryInfo({docu}) {

  const eaCode = docu?.eaCode;
  const dispatch = useDispatch();
  const salaryDocument = useSelector(state => state.eaDocumentReducer2);
  
  React.useEffect(() => {  
      dispatch(callEaSalaryDocumentAPI(
        { eaCode }
      ));
  }, []);


  return (
    <>
      <Grid item xs={6}><label>급여정정 날짜</label></Grid>
      <Grid item xs={6}>{salaryDocument?.salCorrectionDate}</Grid>
    </>
  );
}

export default SalaryInfo;