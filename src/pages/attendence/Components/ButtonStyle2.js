import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { callGetReasonFileAPI } from '../../../apis/AttendanceAPICalls';

function BasicButtons2(props) {

    console.log('props test', props.data);

    const BootstrapButton2 = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 14,
        fontWeight: 'bold',
        padding: '3px 8px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#43B2CA',
        borderColor: '#43B2CA',
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

    const dispatch = useDispatch();
    let commuteNo = props.data.data.commuteCode;
    
    const onClickDownloadHandler = async () => {
        console.log('[Download] onClickDownloadHandler');

        try {
            const blob = await dispatch(callGetReasonFileAPI({commuteNo}));
            console.log('blob====>2', blob);
            const url = URL.createObjectURL(blob);
            const extension = blob.type.split('/')[1];
            const filename = `${commuteNo}.${extension}`;
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
        }
        };

    return (
        <BootstrapButton2 
            variant="contained" disableRipple
            src={props.data.data.reasonFaddress}
            onClick={onClickDownloadHandler}
        >
        증빙 서류 확인
        </BootstrapButton2>
    );
}

export default BasicButtons2;