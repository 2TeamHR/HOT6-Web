import Sidebar from '../../components/Sidebar';
import React, {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import {useFormControl} from "@mui/material";
import attendenceManage from '../../resources/css/pages/attendence/attendence.module.css'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import DataTable from "./TestTable";
import BasicButtons from "./ButtonStyle";





function AttendanceSelectTime() {
    let age;

    function handleChange() {}

    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    function MyFormHelperText() {
        const { focused } = useFormControl() || {};

        const helperText = React.useMemo(() => {
            if (focused) {
                return '';
            }

            return '';
        }, [focused]);

        return <FormHelperText>{helperText}</FormHelperText>;
    }

    return (
        <>


            <Sidebar />
            <main>

                <div className={attendenceManage.packageTitles}>

                    <div className={attendenceManage.employeeDepart}>

            <span style={{

                position: "relative",
                top: 5
            }}>부서 이름
            </span>

                        <FormControl sx={{ml: 3,  minWidth: 170 }} size="small">
                            <InputLabel id="demo-select-small">Select</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>부서 선택</em>
                                </MenuItem>
                                <MenuItem value={10}>인사팀</MenuItem>
                                <MenuItem value={20}>경영지원팀</MenuItem>
                                <MenuItem value={30}>총무팀</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className={attendenceManage.employeeName}>
                      <span style={{

                          position: "relative",
                          top: 40
                      }}>사원명
                      </span>
                        <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ml: 10,minWidth: 100 }}>
                                <OutlinedInput className={attendenceManage.inputText} placeholder="Please enter text" />
                                <MyFormHelperText />
                            </FormControl>
                        </Box>


                        <div className={attendenceManage.employeeCalender}>
                            <span>근무 일자</span>
                        </div>





                        <div className={attendenceManage.employeeCalender2}>
                            <DatePicker className={attendenceManage.employeeCalender2First} selected={startDate} onChange={date => setStartDate(date)} />
                        </div>



                        <div className={attendenceManage.employeeCalender3}>
                            <DatePicker className={attendenceManage.employeeCalender2First} selected={startDate2} onChange={date => setStartDate2(date)} />
                        </div>
                        <div className={attendenceManage.text1}>~</div>
                    </div>




                </div>


                <div className={attendenceManage.employeeCalender4}>
                    <DataTable/>
                </div>

                <div className={attendenceManage.employeeCalender5}>
                    <BasicButtons />
                </div>



                <div>
                    <h1 className={attendenceManage.title}>근무 시간 이력</h1>
                </div>



            </main>


        </>
    );
}

export default AttendanceSelectTime