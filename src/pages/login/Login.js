import React from "react";

const Login = () => {

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>로그인</title>
      <style dangerouslySetInnerHTML={{
        __html: " " +
          "body { background-color: #fbfafd; padding: 5% 0 0; } " +
          ".container { background-color: #fff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); padding: 20px; width: 400px; margin: auto; margin-top: 100px; } " +
          "h1 { text-align: center; margin-top: 0px; } " +
          "label { display: block; margin-bottom: 10px; font-weight: lighter; } input[type=empNumber], " +
          "input[type=password] { width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; } " +
          "input[type=submit] { background-color: #498cef; color: white; padding: 14px 20px; margin: 8px 0; border: none; border-radius: 4px; cursor: pointer; width: 100%; } " +
          "input[type=submit]:hover { background-color: #498cefcc; } " +
          "input[type=checkbox] { margin-top: 10px; margin-right: 10px; } " +
          "span { display: block; text-align: center; margin-top: 20px; } "
      }} />
      <div className="container">
        <br />
        <p><h1 style={{ "font-size": "xx-large" }}><b>5DO 로그인</b></h1></p>
        <form>
          <input type="empNumber" placeholder="사번을 입력하세요." id="username" name="username" />
          <input type="password" placeholder="비밀번호를 입력하세요." id="password" name="password" />
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember" style={{ "display": "inline-block", "font-size": "100%" }}>사번 저장</label>
          <input type="submit" style={{ "font-size": "large" }} defaultValue="로그인" className="btn_submit" value="로그인" />
        </form>
        <p><span>비밀번호를 잊으셨나요? <a href="/findpassword">비밀번호 찾기</a></span></p>
        <p>COPYRIGHTⓒ 2023 5DO ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Login;
