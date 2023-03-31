import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import {
    callLoginAPI
} from '../../apis/MemberAPICalls'
import { Button } from '@mui/material'
import { decodeJwt } from '../../utils/tokenUtils';

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const [rememberChecked, setRememberChecked] = useState(false);
    const placeholder = localStorage.getItem("memberCode") || "사번을 입력하세요.";

    const [form, setForm] = useState({
        memberCode: '',
        memberPassword: ''
    });

    useEffect(() => {

            if (loginMember.status === 200) {

                navigate("/", { replace: true });
            }
        }, [loginMember] // [token]
    );

    useEffect(() => {
        const savedMemberCode = localStorage.getItem('memberCode');
        if (savedMemberCode) {
            setForm({
                ...form,
                memberCode: savedMemberCode });
            setRememberChecked(true);
        } 
      }, []
    );

    /* 로그인 상태일 시 로그인페이지로 접근 방지 */
    if (token) {

        return <Navigate to="/" />
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleRememberChecked = (e) => {
        setRememberChecked(e.target.checked);
    }

    /* 로그인 버튼 클릭시 디스패처 실행 및 페이지 이동 */
    const onClickLoginHandler = () => {
        dispatch(callLoginAPI({
            form: form
        }));

        if (rememberChecked) {
            localStorage.setItem('memberCode', form.memberCode);
        } else {
            localStorage.removeItem('memberCode');
        }

        // navigate(`/`, { replace: true });
    }

    const onEnterkeyHandler = (e) => {
        if (e.key === 'Enter') {
            onClickLoginHandler();
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(callLoginAPI({ form }));
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
                        <h1 style={{ textAlign: 'center', marginTop: '0px' }}><b>The Tech Titan 로그인</b></h1>
                        <input
                            type="text"
                            name='memberCode'
                            id='memberCode'
                            placeholder={placeholder}
                            autoComplete='off'
                            onChange={onChangeHandler}
                            autoFocus={localStorage.getItem('memberCode') ? undefined : 'autofocus'} // autoFocus 설정
                            style={{ width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                        />
                        <input
                            type="password"
                            name='memberPassword'
                            placeholder="비밀번호를 입력하세요."
                            autoComplete='off'
                            onChange={onChangeHandler}
                            autoFocus={localStorage.getItem('memberCode') ? 'autofocus' : undefined} // autoFocus 설정
                            onKeyDown={onEnterkeyHandler}
                            style={{ width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                        />
                        <input type="checkbox" id="remember" name="remember" checked={rememberChecked} onChange={handleRememberChecked} style={{ marginTop: '10px', marginRight: '10px' }}/>
                        <label htmlFor="remember" style={{ "display": "inline-block", "fontSize": "100%" }}>사번 저장</label>
                        <Button
                            onClick={onClickLoginHandler}
                            onKeyPress={handleKeyDown}
                            style={{ fontSize: '15px', backgroundColor: '#498cef', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
                        >로그인
                        </Button>
                    </div>
                    <p style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>COPYRIGHTⓒ 2023 The Tech Titan ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </>
    );
}

export default Login;
