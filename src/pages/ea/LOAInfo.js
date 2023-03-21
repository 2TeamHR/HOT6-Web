// 휴직신청 Leave of absence
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import { Button, Container, Grid, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EaSignerSearch from './EaSignerSearch';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 200,
  height: 100
}));

function LOAInfo({docu}) {
  const eaCode = docu?.eaCode;
  const dispatch = useDispatch();
  const certDocument = useSelector(state => state.eaDocumentReducer2);
  
  React.useEffect(() => {  
      dispatch(callEaCertDocumentAPI(
        { eaCode }
      ));
  }, []);



  return (
    <>
      <Grid item xs={3}><label htmlFor="">휴직 예정일</label></Grid>
    </>
  );
}

export default LOAInfo;