import React from 'react';

const FindPassword = () => {

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>비밀번호 찾기</title>
      <style dangerouslySetInnerHTML={{
        __html:
          "body { background-color: #fbfafd; padding: 5% 0 0; } " +
          ".container { background-color: #fff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); padding: 20px; width: 400px; margin: auto; margin-top: 100px; } " +
          "h1 { text-align: center; margin-top: 0px; } label { display: inline-block; margin-bottom: 10px; font-weight: lighter; width: 20%; } input[type=empNumber], input[type=birthday], " +
          "input[type=phone] { width: 75%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; } " +
          "input[type=submit] { background-color: #498cef; color: white; padding: 14px 20px; margin: 8px 0; border: none; border-radius: 4px; cursor: pointer; width: 100%; text-align: center; } " +
          "input[type=submit]:hover { background-color: #498cefcc; } "
      }} />
      <div className="container">
        <br />
          {/* 추후 비밀번호 찾기로 바꿔나갈 예정 */}
          <p><h1 style={{ "font-size": "xx-large" }}><b>5DO 비밀번호 초기화</b></h1></p>
          <form>
            <label htmlFor="empNumber">사 번</label>
            <input type="empNumber" placeholder="사번을 입력하세요." id="empNumber" name="empNumber" /><br />
            <label htmlFor="birthday">생년월일</label>
            <input type="birthday" placeholder="예) 19920509" id="birthday" name="birthday" /><br />
            <label htmlFor="phone">전화번호</label>
            <input type="phone" placeholder="예) 01044499199" id="phone" name="phone" /><br /><br />
            <input type="submit" style={{ "font-size": "large" }} defaultValue="비밀번호 초기화" onclick="alert('비밀번호가 초기화 되었습니다.')" value="비밀번호 초기화" />
        </form>
      </div>
    </div>
  );
};

export default FindPassword;
