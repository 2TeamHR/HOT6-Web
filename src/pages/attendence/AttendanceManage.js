import BootstrapLink from '../../components/bootstrap';
import Sidebar from '../../components/Sidebar';
import {Link} from "react-router-dom";
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
import * as PropTypes from "prop-types";
import DataTable from "./TestTable";





function AttendanceManage() {

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
            <BootstrapLink />
            <body>
            <Sidebar />
                <main>

            <div className={attendenceManage.employeeDepart}>
            <span style={{

                    position: "relative",
                    top: 5
            }}>부서 이름
            </span>

                    <FormControl sx={{ml: 3, mb: 100,  minWidth: 170 }} size="small">
                        <InputLabel id="demo-select-small">Select</InputLabel>
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
            </div>

            <div className={attendenceManage.employeeName}>
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
            </div>

                <div class={attendenceManage.employeeCalender4}>
                <DataTable/>
                </div>
                </main>
            </body>

        </>
        );
 }

 export default AttendanceManage