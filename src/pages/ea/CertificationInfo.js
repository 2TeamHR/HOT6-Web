import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { Button, Grid, TextField } from '@mui/material';
import EsSignerSearch from './EaSignerSearch';


const theme = createTheme({
  typography: {
    fontFamily: [

      'Spoqa Han Sans Neo',
    ].join(',')
  },
});

function CertificationInfo() {
  return (
    <>
      <ThemeProvider theme={theme}>

        <Grid item xs={6}><label>증명서 종류</label></Grid>
        <Grid item xs={6}><select name="" id="">
          <option value="1">재직증명서</option>
        </select></Grid>

      </ThemeProvider>
    </>
  );
}

export default CertificationInfo;