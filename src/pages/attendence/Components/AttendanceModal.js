import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import attendanceManage from '../../../resources/css/pages/attendence/attendence.module.css'
// import BasicButtons2 from "./ButtonStyle2";
import BasicButtons3 from "./ButtonStyle3";
import BasicButtons4 from "./ButtonStyle4";
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { callGetReasonFileAPI } from '../../../apis/AttendanceAPICalls';
import { styled } from '@mui/material/styles';
import { Await } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height:600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BootstrapButton2 = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    color: 'white',
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

export default function AttendanceModal(props) {

    // console.log('props test', props.data);
    // console.log('props test commute', props.data.commuteCode);

    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [selectedRowIndex, setSelectedRowIndex] = React.useState(null); // 선택한 행의 index 값 저장
    const attendance = useSelector(state => state.attendanceReducer);

    console.log('attendance :::::', attendance);

    const handleOpen = (index) => {
        setSelectedRowIndex(index); // 선택한 행의 index 값을 상태에 저장
        setOpen(true);
    };

    const [form, setForm] =useState({
        
        commuteCode: props.data.commuteCode,
        commuteStatus: props.data.status,
    })

    const [selectedStatus, setSelectedStatus] = useState(props.data.status);
   
    const handleClose = () => setOpen(false);

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
        setForm({
            ...form,
            commuteStatus: event.target.value,
        })
      };


    console.log("모달 값 전달 확인" +JSON.stringify(props.data));

    // const selectedRow = props.data[selectedRowIndex]; 
    // const teamName = props.data.member.teamName;


    console.log("모달창 값들을 출력",props.data);

    useEffect(()=> {
        console.log("selectedStatus 저장된 값 확인   " + selectedStatus);
    },[selectedStatus]);  


    const handleUpdate = (event) => {
        event.preventDefault(); // 기본 동작을 막는다.
    
        console.log(form.commuteCode);
        console.log(form.commuteStatus);

        const payload = {
            commuteCode: props.data.commuteCode,
            commuteStatus: form.commuteStatus,
       
        };
    
        axios
          .post(`http://localhost:8888/api/v1/attendance/modalSave`, payload, {
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`,
            },
          })
          .then((response) => {
            console.log("모달 업데이트 데이터 나오기 전");
            console.log(response.data); // 응답 데이터를 콘솔에 출력
            alert(response.data.data);
            handleClose();
          })
          .catch((error) => {
            console.error(error);
          });
      };

      const onClickDownloadHandler = () => {

        dispatch(callGetReasonFileAPI({
            commuteNo: props.data.commuteCode
        })); 

        const url =  'http://localhost:8888/files/07557f7c314a48abb2152c33fce40b48.jpeg';

            fetch(url, {
                method: "GET",

            }).then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                const name = "지하철지연증명서.jpeg";

                link.setAttribute(
                    'href',
                    url
                );

                link.setAttribute(
                    'download',
                    name
                );

                document.body.appendChild(link);
                link.click();

                link.parentNode.removeChild(link);

                window.URL.revokeObjectURL(url);
            })
 
        // const url =  attendance[0]?.reasonFaddress;

        // fetch(url, {
        //     method: "GET",

        // }).then((response) => response.blob())
        // .then((blob) => {
        //     const url = window.URL.createObjectURL(blob);
        //     const link = document.createElement('a');
        //     const name = attendance[0].reasonFname;
        //     // alert('test',link);
        //     link.setAttribute(
        //         'href',
        //         url
        //     );

        //     link.setAttribute(
        //         'download',
        //         name
        //     );

        //     document.body.appendChild(link);
        //     link.click();

        //     link.parentNode.removeChild(link);

        //     window.URL.revokeObjectURL(url);
        // })
    };
      

    return (
        <div>
            <div className={attendanceManage.modalButton}>
            <Button

                size = "medium"
                style ={{width:100}}
                variant="outlined"
                startIcon = {<EditIcon/>}
                onClick={handleOpen}>
                Edit
            </Button>
            </div>


            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2"
                     sx={{ml:1}}
                    >
                        근태 수정
                        <hr style={{border:'1px solid black'}} />
                    </Typography>
         
                            <Typography id="keep-mounted-modal-department" sx={{ mt: 7,  ml:2 }}>
                                부서명
                                <input 
                                className={attendanceManage.dName}
                                value ={props.data.department}
                                />
                            </Typography>
                            <Typography id="keep-mounted-modal-date" sx={{ mt: 5,  ml:2 }}>
                                일자
                                <input className={attendanceManage.dDate}
                                value={moment(props.data.date).format('YYYY-MM-DD')}/>
                            </Typography>
                            <Typography id="keep-mounted-modal-memeber" sx={{ mt: 5,  ml:2 }}>
                                사원
                                <input className={attendanceManage.dMember} 
                                       value={props.data.name} 
                                />
                            </Typography>
                            <Typography id="keep-mounted-modal-status" sx={{ mt: 5,  ml:2 }}>
                                상태
                                <select className={attendanceManage.dStatus} value={selectedStatus} onChange={handleStatusChange}>
                                    <option value="ironman">{props.data.status}</option>
                                    <option value="정상출근">정상출근</option>
                                    <option value="지각">지각</option>
                                    <option value="결근">결근</option>
                                </select>
                                </Typography>

                                {/*증빙서류 확인 버튼*/}
                                <div className={attendanceManage.dbutton2}>
                                <BootstrapButton2 onClick={onClickDownloadHandler}>증빙 서류 확인</BootstrapButton2>
                                {/* <BasicButtons2 data={props}/> */}
                            
                                </div>

                                {/*저장 버튼*/}
                                <div className={attendanceManage.dbutton3}>
                                <BasicButtons3 onClick={handleUpdate}/>
                                </div>

                                {/*취소 버튼*/}
                                <div className={attendanceManage.dbutton4}>
                                <BasicButtons4 handleClose={handleClose}/>
                                </div>
                            
                </Box>
            </Modal>
        </div>
    );
}