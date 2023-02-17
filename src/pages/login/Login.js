import React  from "react";

const Login = () => {
  
   return (
<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>로그인</title>
  <style dangerouslySetInnerHTML={{__html: "\n    body {\n      background-color: #fbfafd;\n      padding: 5% 0 0;\n    }\n\n    .container {\n      background-color: #fff;\n      border-radius: 10px;\n      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n      padding: 20px;\n      width: 400px;\n      margin: auto;\n      margin-top: 100px;\n    }\n\n    h1 {\n      text-align: center;\n      margin-top: 0px;\n    }\n\n    h5 {\n      text-align: center;\n      margin-top: 0px;\n      color: gray;\n    }\n\n    h6 {\n      text-align: center;\n      margin-top: 0px;\n      color: gray;\n    }\n\n    label {\n      display: block;\n      margin-bottom: 10px;\n      font-weight: lighter;\n    }\n\n    input[type=empNumber],\n    input[type=password] {\n      width: 100%;\n      padding: 12px 20px;\n      margin: 8px 0;\n      display: inline-block;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      box-sizing: border-box;\n    }\n\n    input[type=submit] {\n      background-color: #498cef;\n      color: white;\n      padding: 14px 20px;\n      margin: 8px 0;\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n      width: 100%;\n    }\n\n    input[type=submit]:hover {\n      background-color: #498cefcc;\n    }\n\n    input[type=checkbox] {\n      margin-top: 10px;\n      margin-right: 10px;\n    }\n\n    span {\n      display: block;\n      text-align: center;\n      margin-top: 20px;\n    }\n  " }} />
  <div className="container">
    <br />
    <h1 style={{"font-size":"xx-large"}}>??? 로그인</h1>
    <form>
      <input type="empNumber" placeholder="사번을 입력하세요." id="username" name="username" />
      <input type="password" placeholder="비밀번호를 입력하세요." id="password" name="password" />
      <input type="checkbox" id="remember" name="remember" />
      <label htmlFor="remember" style={{"display":"inline-block","font-size":"small"}}>사번 저장</label>
      <input type="submit" style={{"font-size":"large"}} defaultValue="로그인" className="btn_submit" value="로그인"/>
    </form>
    <h5><span>비밀번호를 잊으셨나요? <a href="#">비밀번호 찾기</a></span></h5>
    <h6>COPYRIGHTⓒ 2023 ???. ALL RIGHTS RESERVED.</h6>
  </div>
</div>
  );
};

export default Login;
