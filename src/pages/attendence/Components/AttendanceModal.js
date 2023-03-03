import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import attendanceManage from '../../../resources/css/pages/attendence/attendence.module.css'
import BasicButtons2 from "./ButtonStyle2";
import BasicButtons3 from "./ButtonStyle3";
import BasicButtons4 from "./ButtonStyle4";


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

export default function AttendanceModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            </Button
                >
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
                        <input className={attendanceManage.dName}></input>
                    </Typography>
                    <Typography id="keep-mounted-modal-date" sx={{ mt: 5,  ml:2 }}>
                       일자
                        <input className={attendanceManage.dDate}></input>
                    </Typography>
                    <Typography id="keep-mounted-modal-memeber" sx={{ mt: 5,  ml:2 }}>
                        사원
                        <input className={attendanceManage.dMember}></input>
                    </Typography>
                    <Typography id="keep-mounted-modal-status" sx={{ mt: 5,  ml:2 }}>
                        상태
                        <select className={attendanceManage.dStatus}>
                        <option value="ironman">정상출근</option>
                        <option value="deadpool">지각</option>
                        <option value="spiderman">결근</option>
                        </select>
                    </Typography>

                    {/*증빙서류 확인 버튼*/}

                    <div className={attendanceManage.dbutton2}>
                    <BasicButtons2/>
                    </div>



                    {/*저장 버튼*/}

                        <div className={attendanceManage.dbutton3}>
                            <BasicButtons3/>
                        </div>
                        {/*취소 버튼*/}
                        <div className={attendanceManage.dbutton4}>
                            <BasicButtons4/>
                        </div>




                </Box>
            </Modal>
        </div>
    );
}