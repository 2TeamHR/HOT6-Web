
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
import BasicButtons from "./Components/ButtonStyle";
import AttendanceManageTable from "./Components/AttendanceManageTable";
import { useEffect } from "react";
import axios from 'axios';




function AttendanceManage() {


    const [teamCode, setTeamCode]= useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value);
        setForm({
            ...form,
            teamCode: event.target.value,
        });
    };

    const handleMemberCahnge = (event) => {
        setMember1(event.target.value);
        console.log(event.target.value);
        setForm({
            ...form,
            memberName: event.target.value,
        });
    }

    const [age, setAge] = useState('');  //부서이름
    const [member1, setMember1] = useState(''); //사원이름
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const [form,setForm] = useState({
        teamCode:teamCode,
        memberName:member1,
        startDate:startDate,
        startDate2:startDate2
    })

    const handlerSearch = (e) => {
        e.preventDefault(); // 기본 동작을 막는다.
    
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };




    function MyFormHelperText() {
        const { focused, ...inputprops } = useFormControl() || {};

        const helperText = React.useMemo(() => {
            if (focused) {
                return '';
            }

            return '';
        }, [focused]);

        return <FormHelperText>{helperText}</FormHelperText>;
    }


    const handleSearch = (event) => {
        event.preventDefault(); // 기본 동작을 막는다.
    
        const payload = {
          memberName: form.memberName,
          teamCode: form.teamCode,
          startDate: form.startDate,
          startDate2: form.startDate2,
        };
    
        axios
          .post(`http://localhost:8888/api/v1/attendance`, payload, {
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`,
            },
          })
          .then((response) => {
            console.log(response.data); // 응답 데이터를 콘솔에 출력
            console.log(payload);
            console.log("Attendance Manage");
          })
          .catch((error) => {
            console.error(error);
          });
      };


    return (
        <>


    
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
                            id="teamCode"
                            name="teamCode"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            
                            <MenuItem value={1}>인사팀</MenuItem>
                            <MenuItem value={2}>총무팀</MenuItem>
                            <MenuItem value={3}>회계팀</MenuItem>
                            <MenuItem value={4}>영업팀</MenuItem>
                            <MenuItem value={5}>마케팅팀</MenuItem>
                            <MenuItem value={6}>개발1팀</MenuItem>
                            <MenuItem value={7}>개발2팀</MenuItem>
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
                            <OutlinedInput id="memberName" 
                                           name="memberName"
                                           value={member1} 
                                           className={attendenceManage.inputText} 
                                           placeholder="Please enter text" 
                                           onChange={handleMemberCahnge}/>
                            <MyFormHelperText />
                        </FormControl>
                    </Box>


                <div className={attendenceManage.employeeCalender}>
                      <span>근무 일자</span>
                </div>





                <div className={attendenceManage.employeeCalender2}>
                <DatePicker className={attendenceManage.employeeCalender2First} 
                            selected={startDate} 
                            onChange={date => {
                                setStartDate(date)
                                console.log(date);
                                setForm({
                                    ...form,
                                    startDate : date
                                })
                            }} />
                </div>



                    <div className={attendenceManage.employeeCalender3}>
                 <DatePicker className={attendenceManage.employeeCalender2First} 
                            selected={startDate2} 
                            onChange={date => {
                                setStartDate2(date)
                                console.log(date);
                                setForm({
                                    ...form,
                                    startDate2 : date
                                })
                            }} />
                 </div>

                <div className={attendenceManage.text1}>~</div>

            </div>




            </div>


                <div className={attendenceManage.employeeCalender4}>
                <AttendanceManageTable/>
                </div>

                    <div className={attendenceManage.employeeCalender5}>
                        <BasicButtons form={form} onClick={handleSearch}/>
                    </div>



                    <div>
                        <h1 className={attendenceManage.title}>근태 조회 및 관리</h1>
                    </div>



                </main>


        </>
        );
 }

 export default AttendanceManage