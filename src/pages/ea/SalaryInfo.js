import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { callEaSalaryDocumentAPI } from '../../apis/EaDocumentAPICalls2';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 200,
  height: 100
}));

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