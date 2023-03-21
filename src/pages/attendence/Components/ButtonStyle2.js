import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { callGetReasonFileAPI } from '../../../apis/AttendanceAPICalls';
import { Link } from 'react-router-dom';

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
    
    // const onClick = () => {
    //     <Link to='http://localhost:8888/files/0006bbef77a64e03adfd0db7760b68f0.jpeg'></Link>
    // }

    const onClickDownloadHandler = async () => {
        console.log('[Download] onClickDownloadHandler');

            const download = await dispatch(callGetReasonFileAPI({commuteNo}));
            // const extension = blob.split('.')[1];
            // const filename = `${commuteNo}.${extension}`;

            window.location.href = download;
            // const filename = blob;
            // const convertedBlob = new Blob([blob], { type: 'application/json' });
            // console.log('blob이 undefined 나오면 안돼', convertedBlob);
            // const url = URL.createObjectURL(convertedBlob);
            // // const url = blob
            // // const extension = blob.type.split('/')[1];
            // const link = document.createElement('a');
            // link.href = url;
            // link.download = filename;
            // link.click();
            // URL.revokeObjectURL(url);

            // const response = await dispatch(callGetReasonFileAPI({commuteNo}));
            // const blob = await response.body; // Response 객체에서 Blob 객체를 추출
            // console.log('blob이 undefined 나오면 안돼', blob);
            // const extension = response.split('.')[1];
            // const filename = `${commuteNo}.${extension}`;
            // const url = URL.createObjectURL(blob);
            // const link = document.createElement('a');
            // link.href = url;
            // link.download = filename;
            // link.click();
            // URL.revokeObjectURL(url);

    };

    return (
        <BootstrapButton2 
            variant="contained" disableRipple
            onClick={onClickDownloadHandler}
        >
        증빙 서류 확인
        </BootstrapButton2>
    );
}

export default BasicButtons2;