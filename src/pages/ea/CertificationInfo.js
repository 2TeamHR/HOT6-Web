import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { Button, Grid, TextField } from '@mui/material';
import EsSignerSearch from './EaSignerSearch';
import { useDispatch, useSelector } from 'react-redux';
import { callEaCertDocumentAPI } from '../../apis/EaDocumentAPICalls2';


const theme = createTheme({
  typography: {
    fontFamily: [

      'Spoqa Han Sans Neo',
    ].join(',')
  },
});

function CertificationInfo({docu}) {

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
      <ThemeProvider theme={theme}>

        <Grid item xs={6}><label>증명서 종류</label></Grid>{certDocument?.eaCode}
        <Grid item xs={6}></Grid>

      </ThemeProvider>
    </>
  );
}

export default CertificationInfo;