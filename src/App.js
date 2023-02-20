import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import MyPageMain from './pages/mypage/mypage_main'
import Layout from './layouts/Layout';
import Login from '../src/pages/login/Login';
import FindPassword from '../src/pages/login/FindPassword';
import ChangePassword from '../src/pages/login/ChangePassword';
import SalaryCheck from './pages/salary/Salary_check';
import CertificationForm from './pages/es/CertificationForm'
import Community from './pages/board/Community';
import Notice from './pages/board/Notice';
import Message from "./pages/messsage/message";
import MessageSent from "./pages/messsage/MessageSent";
import MessageTrash from "./pages/messsage/MessageTrash";
import ReceivedMessage from "./pages/messsage/receivedMessage";
import AttendanceManage from "./pages/attendence/AttendanceManage";
import AllCheckN from './pages/salary/Salary_allCheckN';
import AllCheckY from './pages/salary/Salary_allCheckY';
import SeveranceN from './pages/salary/Salary_SeveranceN'
import SeveranceY from './pages/salary/Salary_SeveranceY'
import ScheduleMain from "./pages/schedule/ScheduleMain";
import EsMain from './pages/es/EsMain';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* 레이아웃 사이에 넣기 */}
          <Route path="/login" element={<Login />} />
          <Route path="/findpassword" element={<FindPassword />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/" element={ <Layout /> } >
            <Route index element={ <Main />} />
            <Route path="/mypageMain" element={ <MyPageMain />} />
            <Route path="/salaryCheck" element={ <SalaryCheck />} />
            <Route path="/allCheckN" element={ <AllCheckN />} />
            <Route path="/allCheckY" element={ <AllCheckY />} />
            <Route path="/severanceN" element={ <SeveranceN />} />
            <Route path="/severanceY" element={ <SeveranceY />} />
            <Route path='CertificationForm' element={<CertificationForm />}/>
            <Route path="/board/notice" element={<Notice />} />
            <Route path="/board/community" element={<Community />} />
            <Route path="/board/notice" element={<Notice />} />
            <Route path="/messsage/message" element={<Message />} />
            <Route path="/messsage/MessageSent" element={<MessageSent />} />
            <Route path="/messsage/MessageTrash" element={<MessageTrash />} />
            <Route path="/messsage/receivedMessage" element={<ReceivedMessage />} />
            <Route path="/attendence/AttendanceManage" element={<AttendanceManage />} />
            <Route path="/schedule/main" element={<ScheduleMain />} />
            <Route path="/es/main" element={<EsMain />} />
          </Route>


        </Routes>

      </BrowserRouter>
  );
}

export default App;