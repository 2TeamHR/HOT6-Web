import * as React from 'react';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 200,
    height: 100
}));


function DutyInfo() {
    return (
        <>
            <Grid item xs={6}><label>예비군 훈련종류</label></Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}><label htmlFor="">예비군 훈련 시작일</label></Grid>
            <Grid item xs={6}><label htmlFor="">예비군 훈련 종료일</label></Grid>
            <Grid item xs={6}><input type="file" /></Grid>
            <Grid item xs={6}></Grid>
        </>
    );
}
export default DutyInfo;