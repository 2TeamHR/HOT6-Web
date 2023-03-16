import mpManagement from '../../resources/css/pages/mypage/mypage-management.module.css';
import organizationCreateStyle from '../../resources/css/pages/hrm/organization-create.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import profileStyle from '../../resources/css/components/profile.module.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {callRegisterAPI} from "../../apis/MemberAPICalls";


function OrganizationCreate (){

    const dispatch = useDispatch();

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const imageInput = useRef();
    const navigate = useNavigate();
    const [date, setDate] = React.useState(new Date());

    const [form, setForm] = useState({
        memberName: '',
        memberPhone: '',
        memberEmail: '',
        memberAddress: '',
        memberBirth: date, 
        memberGender: '',
        memberMarried: '',
        teamCode: '',
        rankCode: '',
        inlinePhone: ''
    });

    useEffect(() => {

            /* 이미지 업로드시 미리보기 세팅 */
            if(image){
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if( result ){
                        setImageUrl(result);
                    }
                }
                fileReader.readAsDataURL(image);
            }
        }, [image]
    );

    const onChangeImageUpload = (e) => {

        const image = e.target.files[0];

        setImage(image);
    };

    const onClickImageUpload = () => {
        imageInput.current.click();
    };

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onDateChangeHandler = (date) =>{
        setForm({
            ...form,
            memberBirth: date
        });
    };

    const onClickMemberRegistrationHandler = () => {

        console.log('[MemberRegistration] onClickMemberRegistrationHandler');

        const formData = new FormData();

        formData.append("memberName", form.memberName);
        formData.append("memberPhone", form.memberPhone);
        formData.append("memberEmail", form.memberEmail);
        formData.append("memberAddress", form.memberAddress);
        formData.append("memberBirth", form.memberBirth);
        formData.append("memberGender", form.memberGender);
        formData.append("memberMarried", form.memberMarried);
        formData.append("teamCode", form.teamCode);
        formData.append("rankCode", form.rankCode);
        formData.append("inlinePhone", form.inlinePhone);

        if(image){
            formData.append("memberImage", image);
            console.log(form);
            console.log(image);
        }

        dispatch(callRegisterAPI({	// 직원 정보 조회
            form: formData,
        }));

        console.log(form);

        // alert('재직자명단으로 이동합니다.');
        // navigate('/organization/chart', { replace: true});
        // window.location.reload();
    }

    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>신규사원등록</p>
                </div>

                <div className='d-flex ml-5 mr-5'>
                    <Paper elevation={3} className={mpManagement.profileMain}>
                        <div className={mpManagement.infoTitle}>
                            <p>프로필 관리</p>
                        </div>
                        <div>
                            <div className={mpManagement.mpmProfile}>
                                { imageUrl &&
                                    <img className={profileStyle.mpmProfileImg} src={ imageUrl } alt="preview" />
                                }
                                <input
                                    style={ { display: 'none' }}
                                    type="file"
                                    name='memberImage'
                                    accept='image/jpg,image/png,image/jpeg,image/gif'
                                    onChange={ onChangeImageUpload }
                                    ref={ imageInput }
                                />
                            </div>
                            <div className={mpManagement.infoBtn}>
                                <button onClick={onClickMemberRegistrationHandler}>완료</button>
                                <button onClick={() => navigate(-1)}>취소</button>
                                <button onClick={ onClickImageUpload }>이미지 업로드</button>
                            </div>
                        </div>
                    </Paper>
                    <div className={mpManagement.profileMain2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Paper elevation={3} className={mpManagement.profileInfoBox}>
                                <div className={mpManagement.infoTitle}>
                                    <p>신규사원정보</p>
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-user mr-3`}></i>
                                    <span>이름</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="이름" variant="outlined"
                                                name="memberName" onChange={ onChangeHandler } />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-phone mr-3`}></i>
                                    <span>휴대전화</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="휴대전화" variant="outlined"
                                                name="memberPhone" onChange={ onChangeHandler } />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-envelope mr-3`}></i>
                                    <span>이메일</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="이메일" variant="outlined"
                                                name="memberEmail" onChange={ onChangeHandler } />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-home mr-3`}></i>
                                    <span>주소</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="주소" variant="outlined"
                                                name="memberAddress" onChange={ onChangeHandler } />
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
                                        value={form.memberBirth}
                                        onChange={ onDateChangeHandler }
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-male-female mr-3`}></i>
                                    <span>성별</span>
                                    <label className={organizationCreateStyle.radioBtn} >
                                    남성
                                        <input type="radio" className="ml-2" name="memberGender" value="M" onChange={onChangeHandler}/>
                                    </label>
                                    <label className={organizationCreateStyle.radioBtn} >
                                    여성
                                        <input type="radio" className="ml-2" name="memberGender" value="F" onChange={onChangeHandler}/>
                                    </label>
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-male-female mr-3`}></i>
                                    <span>결혼여부</span>
                                    <label className={organizationCreateStyle.radioBtn}>
                                    기혼
                                        <input type="radio" className="ml-2" name="memberMarried" value="Y" onChange={onChangeHandler}/>
                                    </label>
                                    <label className={organizationCreateStyle.radioBtn} >
                                    미혼
                                        <input type="radio" className="ml-2" name="memberMarried" value="N" onChange={onChangeHandler}/>
                                    </label>
                                </div>
                            </Paper>
                            <Paper elevation={3} className={`mt-3 ${mpManagement.profileInfoBox}`}>
                                <div className={mpManagement.infoTitle}>
                                    <p>회사정보</p>
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-buildings mr-3`}></i>
                                    <span>소속팀</span>
                                    <FormControl className={organizationCreateStyle.managementInput}>
                                        <InputLabel id="demo-simple-select-helper-label">소속팀</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Team"
                                        name="teamCode"
                                        onChange={onChangeHandler}
                                        >
                                        <MenuItem value="">
                                            <em></em>
                                        </MenuItem>
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
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-buildings mr-3`}></i>
                                    <span>직급</span>
                                    <FormControl className={organizationCreateStyle.managementInput}>
                                        <InputLabel id="demo-simple-select-helper-label">직급</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Rank"
                                        name="rankCode"
                                        onChange={onChangeHandler}
                                        >
                                        <MenuItem value="">
                                            <em></em>
                                        </MenuItem>
                                        <MenuItem value={1}>사장</MenuItem>
                                        <MenuItem value={2}>이사</MenuItem>
                                        <MenuItem value={3}>부장</MenuItem>
                                        <MenuItem value={4}>차장</MenuItem>
                                        <MenuItem value={5}>과장</MenuItem>
                                        <MenuItem value={6}>대리</MenuItem>
                                        <MenuItem value={7}>주임</MenuItem>
                                        <MenuItem value={8}>사원</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={organizationCreateStyle.infoModule}>
                                    <i className={`bx bx-buildings mr-3`}></i>
                                    <span>내선번호</span>
                                    <TextField className={organizationCreateStyle.managementInput} id="outlined-basic" label="내선번호" variant="outlined"
                                                name="inlinePhone" onChange={ onChangeHandler } />
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