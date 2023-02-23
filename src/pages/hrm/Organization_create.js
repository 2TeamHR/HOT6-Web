import mpManagement from '../../resources/css/pages/mypage/mypage-management.module.css';
import organizationCreateStyle from '../../resources/css/pages/hrm/organization-create.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import profileStyle from '../../resources/css/components/profile.module.css';
import sampleImg from '../../resources/image/hong.jpeg';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function OrganizationCreate (){

    const [value, setValue] = React.useState(new Date());
    const [department, setDepartment] = React.useState('');
    const handleChange = (event) => {
        setDepartment(event.target.value);
      };

    const [rank, setRank] = React.useState('');
    const handleChange2 = (event) => {
        setRank(event.target.value);
      };


    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>개인정보관리</p>
                </div>

                <div className='d-flex ml-5 mr-5'>
                    <Paper elevation={3} className={mpManagement.profileMain}>
                        <div className={mpManagement.infoTitle}>
                            <p>프로필 관리</p>
                        </div>
                        <div className={mpManagement.mpmProfile}>
                            <img className={profileStyle.mpmProfileImg} alt="profile_img" src={sampleImg} />
                        </div>
                        <div className={mpManagement.infoBtn}>
                            <button>완료</button>
                            <button>취소</button>
                        </div>
                    </Paper>
                    <div className={mpManagement.profileMain2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Paper elevation={3} className={mpManagement.profileInfoBox}>
                                <div className={mpManagement.infoTitle}>
                                    <p>개인정보</p>
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-user mr-3`}></i>
                                    <span>이름</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="이름" variant="outlined" />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-phone mr-3`}></i>
                                    <span>휴대전화</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="휴대전화" variant="outlined" />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-envelope mr-3`}></i>
                                    <span>이메일</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="이메일" variant="outlined" />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-home mr-3`}></i>
                                    <span>주소</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="주소" variant="outlined" />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-calendar-alt mr-3`}></i>
                                    <span>생년월일</span>
                                    <DatePicker
                                        className={organizationCreateStyle.datePicker}
                                        disableFuture
                                        label="생년월일"
                                        openTo="year"
                                        views={['year', 'month', 'day']}
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-male-female mr-3`}></i>
                                    <span>성별</span>
                                    <label className={organizationCreateStyle.radioBtn}>
                                    남성
                                        <input type="radio" className="ml-2"/>
                                    </label>
                                    <label className={organizationCreateStyle.radioBtn}>
                                    여성
                                        <input type="radio" className="ml-2"/>
                                    </label>
                                </div>
                            </Paper>
                            <Paper elevation={3} className={`mt-3 ${mpManagement.profileInfoBox}`}>
                                <div className={mpManagement.infoTitle}>
                                    <p>회사정보</p>
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-buildings mr-3`}></i>
                                    <span>사번</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="사번 - 중복체크 비동기로 넣기" variant="outlined" />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-buildings mr-3`}></i>
                                    <span>소속부서</span>
                                    <FormControl className={organizationCreateStyle.managementInput}>
                                        <InputLabel id="demo-simple-select-helper-label">소속부서</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={department}
                                        label="Department"
                                        onChange={handleChange}
                                        >
                                        <MenuItem value="">
                                            <em></em>
                                        </MenuItem>
                                        <MenuItem value={10}>경영관리부</MenuItem>
                                        <MenuItem value={20}>영업부</MenuItem>
                                        <MenuItem value={30}>마케팅부</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-buildings mr-3`}></i>
                                    <span>소속팀</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="소속팀" variant="outlined" />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-buildings mr-3`}></i>
                                    <span>직급</span>
                                    <FormControl className={organizationCreateStyle.managementInput}>
                                        <InputLabel id="demo-simple-select-helper-label">직급</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={rank}
                                        label="Rank"
                                        onChange={handleChange2}
                                        >
                                        <MenuItem value="">
                                            <em></em>
                                        </MenuItem>
                                        <MenuItem value={10}>사장</MenuItem>
                                        <MenuItem value={20}>임원</MenuItem>
                                        <MenuItem value={30}>부장</MenuItem>
                                        <MenuItem value={30}>팀장</MenuItem>
                                        <MenuItem value={30}>대리</MenuItem>
                                        <MenuItem value={30}>사원</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-buildings mr-3`}></i>
                                    <span>내선번호</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="내선번호" variant="outlined" />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-buildings mr-3`}></i>
                                    <span>입사일</span>
                                    <DatePicker
                                        className={organizationCreateStyle.datePicker}
                                        disableFuture
                                        label="입사일"
                                        openTo="year"
                                        views={['year', 'month', 'day']}
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </div>
                            </Paper>
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default OrganizationCreate;