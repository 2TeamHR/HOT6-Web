import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import {
    callLoginAPI
} from '../../apis/MemberAPICalls'
import { POST_LOGIN } from '../../modules/MemberModule';

import { Button } from '@mui/material'

function Login() {

    const navigate = useNavigate();

    /* 리덕스를 이용하기 위한 디스패처, 셀렉터 선언 */
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);  // API 요청하여 가져온 loginMember 정보

    const isToken = localStorage.getItem("accessToken");

    /* 폼 데이터 한번에 변경 및 State에 저장 */
    const [form, setForm] = useState({
        memberCode: '',
        memberPassword: ''
    });

    const [rememberChecked, setRememberChecked] = useState(false);

    useEffect(() => {

            if (loginMember.status === 200) {
                console.log("[Login] Login SUCCESS {}", loginMember);
                navigate("/main", { replace: true });
            } 
        }, [loginMember]
    );

    useEffect(() => {
        const savedMemberCode = localStorage.getItem('memberCode');
        if (savedMemberCode) {
            setForm({
                ...form,
                memberCode: savedMemberCode
            });
            setRememberChecked(true);
        } 
      }, []
    );

    /* 로그인 상태일 시 로그인페이지로 접근 방지 */
    if (isToken) {
        console.log("[Login] Login is already authenticated by the server");
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
        dispatch(callLoginAPI({	// 로그인
            form: form
        }));

        if (rememberChecked) {
            localStorage.setItem('memberCode', form.memberCode);
          } else {
            localStorage.removeItem('memberCode');
          }
        
        navigate(`/`, { replace: true });
    }

    const onEnterkeyHandler = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter key', form);
            onClickLoginHandler();
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 이벤트 방지

        // 아이디와 비밀번호를 사용하여 로그인하는 로직
        dispatch(callLoginAPI({ form }));
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    };

    const placeholder = localStorage.getItem("memberCode") || "사번을 입력하세요.";

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
                    <p><span style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>비밀번호를 잊으셨나요? <Link to="/findpassword">비밀번호 찾기</Link></span></p>
                    <p style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>COPYRIGHTⓒ 2023 The Tech Titan ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </>
    );
}

export default Login;
