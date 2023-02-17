import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import MyPageMain from './pages/mypage/mypage_main'
import Layout from './layouts/Layout';
import Login from '../src/pages/login/Login';
import SalaryCheck from './pages/salary/Salary_check';
import FindPassword from '../src/pages/login/FindPassword';
import Community from './pages/board/Community';
import Notice from './pages/board/Notice';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* 레이아웃 사이에 넣기 */}
          <Route path="/login" element={ <Login />} />
          <Route path="/" element={ <Layout /> } >
            <Route index element={ <Main />} />
            <Route path="/mypageMain" element={ <MyPageMain />} />
            <Route path="/salaryCheck" element={ <SalaryCheck />} />
            <Route path="/findpassword" element={<FindPassword />} />
            <Route path="/board/community" element={<Community />} />
            <Route path="/board/notice" element={<Notice />} />
          </Route>


        </Routes>

      </BrowserRouter>
  );
}

export default App;