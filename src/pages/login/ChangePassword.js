import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import { POST_REGISTER } from '../../modules/MemberModule';
import {
    callLoginAPI
} from '../../api/MemberAPICalls'
import { POST_LOGIN } from '../../modules/MemberModule';

function ChangePassword() {

    const navigate = useNavigate();

    /* 리덕스를 이용하기 위한 디스패처, 셀렉터 선언 */
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);  // API 요청하여 가져온 loginMember 정보

    /* 폼 데이터 한번에 변경 및 State에 저장 */
    const [form, setForm] = useState({
        memberId: '',
        memberPassword: ''
    });

    // 오류나서 막아놓음
    // useEffect(() => {
    //
    //         if(loginMember.status === 200){
    //             console.log("[Login] Login SUCCESS {}", loginMember);
    //             navigate("/", { replace: true });
    //         }
    //
    //         /* 회원 가입 후 로그인 페이지로 안내 되었을 때 */
    //         if(loginMember.status === 201){
    //
    //             loginMember.status = 100  // Continue
    //             dispatch({ type: POST_REGISTER,  payload: loginMember });
    //         }
    //     }
    //     ,[loginMember]);

    // /* 로그인 상태일 시 로그인페이지로 접근 방지 */
    // if(loginMember.length > 0) {
    //     console.log("[Login] Login is already authenticated by the server");
    //     return <Navigate to="/"/>
    // }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickRegisterHandler = () => {
        navigate("/register", { replace: true })
    }

    /* 로그인 버튼 클릭시 디스패처 실행 및 메인 페이지로 이동 */
    const onClickLoginHandler = () => {
        dispatch(callLoginAPI({	// 로그인
            form: form
        }));
    }

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>비밀번호 변경</title>
      <style dangerouslySetInnerHTML={{
        __html:
          "body { background-color: #fbfafd; padding: 5% 0 0; } " +
          ".container { background-color: #fff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); padding: 20px; width: 400px; margin: auto; margin-top: 100px; } " +
          "h1 { text-align: center; margin-top: 0px; }" +
          "label { display: inline-block; margin-bottom: 0px; font-weight: lighter; width: 100%;}" +
          "input[type=password] { font-size: small; width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; } " +
          "input[type=submit] { background-color: #498cef; color: white; padding: 14px 20px; margin: 8px 0; border: none; border-radius: 4px; cursor: pointer; width: 100%; text-align: center; } " +
          "input[type=submit]:hover { background-color: #498cefcc; } "
      }} />
      <div className="container">
        <br />
        <h1 style={{ "fontSize": "xx-large" }}><b>5DO 비밀번호 변경</b></h1><br />
        <form action="/changepassword" method="post">
          <p><label htmlFor="password">새로운 비밀번호</label>
            <input type="password" placeholder="8~16자의 영문 대소문자, 숫자, 특수문자만 가능" id="new_password" name="new_password" />
            <label htmlFor="password">새로운 비밀번호 확인</label>
            <input type="password" placeholder="8~16자의 영문 대소문자, 숫자, 특수문자만 가능" id="new_password_confirm" name="new_password_confirm" /> </p>
          <input type="submit" style={{ "fontSize": "large" }} onClick={() => alert('비밀번호가 변경되었습니다.')} value="비밀번호 변경" />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
