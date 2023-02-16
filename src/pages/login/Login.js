import React, { useState } from 'react';
import '../../resources/css/pages/login/Login.css';

const Login = ({ savedUsername }) => {
  const [username, setUsername] = useState(savedUsername || '');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 로그인 처리 로직 구현
    if (rememberMe) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1><b>??? 로그인</b></h1><br/>
      <div className="form-group">
        <label htmlFor="username">사번</label>
        <input type="text" placeholder="사번을 입력하세요." id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password" >비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력하세요." id="password" value={password} onChange={handlePasswordChange} />
      </div>
        <div className="form-group saveId">
            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
            <label htmlFor="rememberMe">사번 저장</label>
        </div>
        <button type="submit">로그인</button><br />
        <div className="findPassword">
      <p><span>비밀번호를 잊으셨나요? <a href="#">비밀번호 찾기</a></span></p>
      <pre>COPYRIGHTⓒ 2023 ???. ALL RIGHTS RESERVED.</pre>
        </div>
    </form>

  );
};

export default Login;
