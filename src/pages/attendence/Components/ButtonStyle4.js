import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { useState } from 'react';



const BootstrapButton4 = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    padding: '8px 30px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#E6E6E6',
    borderColor: '#E6E6E6',
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



export default function BasicButtons4(props) {
    return (

        
    

            <BootstrapButton4 variant="contained" disableRipple onClick={props.handleClose}>
                취 소
            </BootstrapButton4>

    );
}


