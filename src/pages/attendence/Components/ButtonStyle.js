import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import axios from 'axios';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 'bold',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

    export default function BasicButtons({form, onClick}) {

        const onClickMessageHandler=()=> {

            const payload = {
        
                memberName:form.memberName, 
                teamCode:form.teamCode,
                startDate:form.startDate,
                startDate2:form.startDate2
        
            }
        
        
                axios.post(`http://localhost:8888/api/v1/attendance`,payload, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Authorization": `Bearer ${window.localStorage.getItem('accessToken')}`
                    }
                }).then(response => {
                    console.log(response.data); // 응답 데이터를 콘솔에 출력
                    // setCount(response.data.data);
                    console.log("button Style");
                })
                    .catch(error => {
                        console.error(error);
                 });
        
                };

     return (           

        <Button variant="contained" disableRipple onClick={onClick || onClickMessageHandler}>
        조 회
      </Button>

    );
}