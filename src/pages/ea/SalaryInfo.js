import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, Container, Grid, TextField } from '@mui/material';
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

function SalaryInfo() {
  return (
    <>
      <Grid item xs={6}><label>급여정정 날짜</label></Grid>
      <Grid item xs={6}><input type="date" name="" id="" /></Grid>
      <Grid item xs={6}><label>첨부파일</label></Grid>
      <Grid item xs={6}><input type="file" name="" id="" /></Grid>
    </>
  );
}

export default SalaryInfo;