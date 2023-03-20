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


function DutyInfo() {
    const [value, setValue] = React.useState(dayjs('2022-04-07'));
    return (
        <>
            <Grid item xs={6}><label>예비군 훈련종류</label></Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}><label htmlFor="">예비군 훈련 시작일</label></Grid>

            <Grid item xs={6}><label htmlFor="">예비군 훈련 종료일</label></Grid>

            <Grid item xs={6}><input type="file" /></Grid>
            <Grid item xs={6}></Grid>
        </>
    );
}
export default DutyInfo;