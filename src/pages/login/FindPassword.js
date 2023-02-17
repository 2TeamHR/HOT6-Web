import React from 'react';

const FindPassword = () => {
  
   return (
<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>비밀번호 찾기</title>
  <style dangerouslySetInnerHTML={{__html: "\n\t\tbody {\n\t\t\tbackground-color: #fbfafd;\n\t\t\tpadding: 5% 0 0;\n\t\t}\n\n\t\t.container {\n\t\t\tbackground-color: #fff;\n\t\t\tborder-radius: 10px;\n\t\t\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n\t\t\tpadding: 20px;\n\t\t\twidth: 400px;\n\t\t\tmargin: auto;\n\t\t\tmargin-top: 100px;\n\t\t}\n\n\t\th1 {\n\t\t\ttext-align: center;\n\t\t\tmargin-top: 0px;\n\t\t}\n\n\t\tlabel {\n\t\t\tdisplay: inline-block;\n\t\t\tmargin-bottom: 10px;\n\t\t\tfont-weight: lighter;\n\t\t\twidth: 20%;\n\t\t}\n\n\t\tinput[type=empNumber],\n\t\tinput[type=birthday],\n\t\tinput[type=phone] {\n\t\t\twidth: 75%;\n\t\t\tpadding: 12px 20px;\n\t\t\tmargin: 8px 0;\n\t\t\tdisplay: inline-block;\n\t\t\tborder: 1px solid #ccc;\n\t\t\tborder-radius: 4px;\n\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\tinput[type=submit] {\n\t\t\tbackground-color: #498cef;\n\t\t\tcolor: white;\n\t\t\tpadding: 14px 20px;\n\t\t\tmargin: 8px 0;\n\t\t\tborder: none;\n\t\t\tborder-radius: 4px;\n\t\t\tcursor: pointer;\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\tinput[type=submit]:hover {\n\t\t\tbackground-color: #498cefcc;\n\t\t}\n\n\t" }} />
  <div className="container">
    <br />
    <h1 style={{"font-size":"xx-large"}}>??? 비밀번호 초기화</h1>
    <form>
      <label htmlFor="empNumber">사 번</label>
      <input type="empNumber" placeholder="사번을 입력하세요." id="empNumber" name="empNumber" /><br />
      <label htmlFor="birthday">생년월일</label>
      <input type="birthday" placeholder="예) 19920509" id="birthday" name="birthday" /><br />
      <label htmlFor="phone">전화번호</label>
      <input type="phone" placeholder="예) 01044499199" id="phone" name="phone" />
      <input type="submit" style={{"font-size":"large"}} defaultValue="비밀번호 초기화" onclick="alert('비밀번호가 초기화 되었습니다.')" />
    </form>
  </div>
</div>
  );
};

export default FindPassword;
