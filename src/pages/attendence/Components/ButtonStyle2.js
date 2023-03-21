import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { callGetReasonFileAPI } from '../../../apis/AttendanceAPICalls';

function BasicButtons2(props) {




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

        const commuteFile = await dispatch(callGetReasonFileAPI({commuteNo: commuteNo}));

        console.log('commuteFile ;;;;;;;;;: ', commuteFile);

        const url = "http://localhost:8888/files/87362ee535d5454ead494176dc239e53.xlsx";       

        // fetch(url, {
        //     method: "GET",
        //
        // }).then((response) => response.blob())
        // .then((blob) => {
        //     const url = window.URL.createObjectURL(blob);
        //     const link = document.createElement('a');
        //     const name = '통합문서1.xlsx';
        //     // alert('test',link);
        //     link.setAttribute(
        //         'href',
        //         url
        //     );
        //
        //     link.setAttribute(
        //         'download',
        //         name
        //     );
        //
        //     document.body.appendChild(link);
        //     link.click();
        //
        //     link.parentNode.removeChild(link);
        //
        //     window.URL.revokeObjectURL(url);
        // })

        // alert('다운로드 완료');
    };

    return (
        <BootstrapButton2
            variant="contained" 
            onClick={onClickDownloadHandler}
        >
        증빙 서류 확인
        </BootstrapButton2>
    );
}

export default BasicButtons2;