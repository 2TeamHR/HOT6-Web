import { Box } from '@mui/system';
import React, { useState } from 'react';
import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import SelectDatePiker2 from './Salary_DatePiker2';
import attendenceManage from '../../resources/css/pages/attendence/attendence.module.css'
import DatePicker from "react-datepicker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import {useFormControl} from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SalaryDataTableY from './SalaryDataTableY';

function AllCheckY(){
    
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
                <h1 className="fs-1 mt-5">급여 지급 현황</h1>
            </div>
            <div className={salaryStyle.selectDate}>
                <SelectDatePiker2 />
            </div>
        </div>

        <div className="pt-5 pl-5">
            <SalaryDataTableY className="pl-5" />
        </div>
        </>
    );
}

export default AllCheckY;