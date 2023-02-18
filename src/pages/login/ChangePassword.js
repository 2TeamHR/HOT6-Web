import React from 'react';

const ChangePassword = () => {

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
          "h1 { text-align: center; margin-top: 0px; } label { display: inline-block; margin-bottom: 10px; font-weight: lighter; width: 20%; }" +
          "input[type=empNumber], input[type=birthday], label { display: block; margin-bottom: 0px; font-weight: lighter; width: 50%;}" +
          "input[type=password] { width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; } " +
          "input[type=submit] { background-color: #498cef; color: white; padding: 14px 20px; margin: 8px 0; border: none; border-radius: 4px; cursor: pointer; width: 100%; text-align: center; } " +
          "input[type=submit]:hover { background-color: #498cefcc; } "
      }} />
      <div className="container">
        <br />
        <p><h1 style={{ "font-size": "xx-large" }}><b>5DO 비밀번호 변경</b></h1></p><br />
        <form action="/changepassword" method="post">
          <p><label htmlFor="password">새로운 비밀번호</label>
            <input type="password" placeholder="8~16자의 영문 대소문자, 숫자, 특수문자만 가능" id="new_password" name="new_password" />
            <label htmlFor="password">새로운 비밀번호 확인</label>
            <input type="password" placeholder="8~16자의 영문 대소문자, 숫자, 특수문자만 가능" id="new_password_confirm" name="new_password_confirm" /> </p>
          <input type="submit" style={{ "font-size": "large" }} defaultValue="비밀번호 초기화" onclick="alert('비밀번호가 변경되었습니다.')" value="비밀번호 변경" />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
