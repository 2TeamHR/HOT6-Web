import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material'
import { callChangePasswordAPI, callGetMemberAPI } from '../../apis/MemberAPICalls';
import { decodeJwt } from '../../utils/tokenUtils';

function ChangePassword (){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const member = useSelector(state => state.memberReducer);
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const [check, setCheck] = useState('');
    const memberDetail = member.data;
    const formData = new FormData();
    const [check_SC, setCheck_SC] = useState(0);

     /* 변경할 데이터 form */
    const [form, setForm] = useState({
        newPassword: '',
        memberPassword: ''
    });

    // function isValidPassword(password) {
    //   const regExp = /^[A-Za-z\d$@$!%*#?&]{8,16}$/;
    //   return regExp.test(password);
    // }

    useEffect(() => {
            if(token !== null) {
                dispatch(callGetMemberAPI({
                    memberCode: token.sub
                }));
            }},[]
    );

    useEffect(() => {
        if(form.newPassword !== '' && form.memberPassword !== '') {
            // const isValid = isValidPassword(form.newPassword, form.memberPassword);
            // setCheck(isValid ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.');
            if(form.newPassword === form.memberPassword) {
                setCheck('비밀번호가 일치합니다.');
                if(form.newPassword.length > 7 && form.newPassword.length < 17) {
                    setCheck('비밀번호가 일치합니다.');
                    const SC = ['!', '@', '#', '$', '%'];
                    for (var i = 0; i < SC.length; i++) {
                        if (form.newPassword.indexOf(SC[i]) !== -1) {
                            setCheck_SC(1);
                            break;
                        } else {
                            setCheck('!,@,#,$,% 의 특수문자가 들어가 있지 않습니다.')
                        }
                    }
                } else {
                    setCheck('비밀번호는 8글자 이상, 16글자 이하만 이용 가능합니다.');
                }
            } else {
                setCheck('비밀번호가 일치하지 않습니다.')
            }
        } else {
            setCheck('')
        }}, [form.newPassword, form.memberPassword, check_SC]
    );

    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
    };

    /* 비밀번호 변경 핸들러 */
    const onClickChangePasswordHandler = () => {

        console.log('[ChangePassword] onClickChangePasswordHandler');

        if((form.newPassword === form.memberPassword)
            && (form.newPassword.length > 7 && form.newPassword.length < 17)
            && (check_SC === 1)) {
            formData.append("memberPassword", form.memberPassword);

            alert("비밀번호 변경에 성공하여 마이페이지로 이동합니다.")
            navigate("/mypage/management/", { replace: true })
            window.location.reload();

        } else {
            alert("비밀번호가 일치하지 않습니다.")
            navigate("/changepassword", { replace: true })
            window.location.reload();
        }

        dispatch(callChangePasswordAPI({
            form: formData,
            memberCode: memberDetail.memberCode
        }));
    }

    const onEnterkeyHandler = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter key', form);
            onClickChangePasswordHandler();
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(callChangePasswordAPI({ form }));
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    };

    return (
        <>
            <div style={ { backgroundColor: '#fff', borderRadius: '10px', boxShadow:' 0px 0px 10px rgba(0, 0, 0, 0.2)', padding: '20px', width: '500px', margin: 'auto', marginTop: '100px' }}>
                <div >
                    <div>
                        <h2 style={{ textAlign: 'center', marginTop: '0px' }}><b>The Tech Titan 비밀번호 변경</b></h2>
                        <p style={{ display: 'block', textAlign: 'left', marginTop: '20px', color: 'red'}}>&ensp;8~16자의 영문 대소문자, 숫자, 특수문자만 가능</p>
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="새로운 비밀번호"
                            autoComplete='off'
                            onChange={onChangeHandler}
                            autoFocus="autofocus"
                            style={{ width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                        />
                        <input
                            type="password"
                            name="memberPassword"
                            placeholder="새로운 비밀번호 확인"
                            autoComplete='off'
                            onChange={onChangeHandler}
                            onKeyDown={onEnterkeyHandler}
                            style={{ width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                        />
                        <p>{check}</p>
                        <Button
                            onClick={onClickChangePasswordHandler}
                            onKeyPress={handleKeyDown}
                            style={{ fontSize: '15px', backgroundColor: '#498cef', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
                        >비밀번호 변경
                        </Button>
                    </div>
                    <p style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>COPYRIGHTⓒ 2023 The Tech Titan ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;
