import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MypageMain from './pages/mypage/mypage_main';
import MypageAttendance from './pages/mypage/mypage_attendance';
import MypageManagement from './pages/mypage/mypage_management';
import Layout from './layouts/Layout';
import Login from '../src/pages/login/Login';
import SalaryCheck from './pages/salary/Salary_check';
import CertificationForm from './pages/es/CertificationForm';
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
            <Route path="/salaryCheck" element={ <SalaryCheck />} />
            <Route path='CertificationForm' element={<CertificationForm />}/>
            <Route path="/findpassword" element={<FindPassword />} />
            <Route path="/board/community" element={<Community />} />
            <Route path="/board/notice" element={<Notice />} />
            <Route path="/findpassword" element={<FindPassword />} />
            <Route path="/board/community" element={<Community />} />
            <Route path="/board/notice" element={<Notice />} />

            {/* mypage */}
            <Route path="/mypageMain" element={ <MypageMain />} />
            <Route path="/mypage/Attendance" element={<MypageAttendance />}/>
            <Route path="/mypage/management" element={<MypageManagement />}/>

          </Route>


        </Routes>

      </BrowserRouter>
  );
}

export default App;