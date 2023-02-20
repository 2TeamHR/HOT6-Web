import { Box } from '@mui/system';
import React, { useState } from 'react';
import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import attendenceManage from '../../resources/css/pages/attendence/attendence.module.css'
import DatePicker from "react-datepicker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import {useFormControl} from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SalaryDataTable2N from './SalaryDataTable2N';
import SelectDatePiker3 from './Salary_DatePiker3';

function SeveranceN(){
    
    let age;

    function handleChange() {}

    const [startDate, setStartDate] = useState(new Date());
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
        <div className={`ml-5 ${salaryStyle.checkTitle}`}>
            <div>
                <h1 className="fs-1 mt-5">퇴직금 지급 현황</h1>
            </div>
            <div className={salaryStyle.selectDate}>
                <SelectDatePiker3 />
            </div>
        </div>

        {/* <div>
            <span style={{

                    position: "relative",
                    top: 5
            }}>부서 이름
            </span>

            <FormControl sx={{ml: 3, mb: 100,  minWidth: 170 }} size="small">
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div> */}

        {/* <div className={attendenceManage.employeeName}>
            <span style={{

                position: "relative",
                top: 40
            }}>사원명
            </span>
            <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ml: 10,minWidth: 100 }}>
                    <OutlinedInput placeholder="Please enter text" />
                    <MyFormHelperText />
                </FormControl>
            </Box>


            <div className={attendenceManage.employeeCalender}>
                    <span>근무 일자</span>
            </div>





            <div class={attendenceManage.employeeCalender2}>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>



            <div class={attendenceManage.employeeCalender3}>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
                <span>~</span>
        </div> */}

        <div className="pt-5 pl-5">
            <SalaryDataTable2N />
        </div>
        </>
    );
}

export default SeveranceN;