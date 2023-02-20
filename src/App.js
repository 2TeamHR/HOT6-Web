import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import MypageMain from './pages/mypage/mypage_main';
import MypageAttendance from './pages/mypage/mypage_attendance';
import MypageManagement from './pages/mypage/mypage_management';
import MypageManagementUpdate from './pages/mypage/mypage_management_update';
import MypageAttendanceHistory from './pages/mypage/mypage_attendance_history';
import MypageAnnualHistory from './pages/mypage/mypage_annual-history';
import AnnualHistory from './pages/attendance_management/annual_history';
import AnnualPayment from './pages/attendance_management/annual-payment';
import AnnualManagement from './pages/attendance_management/annual-mangement';
import AnnualManagementDetailed from './pages/attendance_management/annual-management-detailed';
import OrganizationCreate from './pages/HRM/organization-create';
import OrganizationChart from './pages/HRM/organization-chart';
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
            <Route path="/salaryCheck" element={ <SalaryCheck />} />
            <Route path='CertificationForm' element={<CertificationForm />}/>
            <Route path="/findpassword" element={<FindPassword />} />
            <Route path="/board/community" element={<Community />} />
            <Route path="/board/notice" element={<Notice />} />
            <Route path="/findpassword" element={<FindPassword />} />
            <Route path="/board/community" element={<Community />} />
            <Route path="/board/notice" element={<Notice />} />
            <Route path="/messsage/message" element={<Message />} />
            <Route path="/messsage/MessageSent" element={<MessageSent />} />
            <Route path="/messsage/MessageTrash" element={<MessageTrash />} />
            <Route path="/messsage/receivedMessage" element={<ReceivedMessage />} />

            {/* mypage */}
            <Route path="/mypage/main" element={ <MypageMain />} />
            <Route path="/mypage/attendance" element={<MypageAttendance />}/>
            <Route path="/mypage/management" element={<MypageManagement />}/>
            <Route path="/mypage/management/update" element={<MypageManagementUpdate />}/>
            <Route path="/mypage/attendance/history" element={<MypageAttendanceHistory />}/>
            <Route path="/mypage/annual/history" element={<MypageAnnualHistory />}/>

           {/* annual */}
            <Route path="/annual/history" element={<AnnualHistory />}/>
            <Route path="/annual/payment" element={<AnnualPayment />}/>
            <Route path="/annual/management" element={<AnnualManagement />}/>
            <Route path="/annual/management/detailed" element={<AnnualManagementDetailed />}/>
            
            {/* HRM */}
            <Route path="/organization/create" element={<OrganizationCreate />}/>
            <Route path="/organization/chart" element={<OrganizationChart />}/>

          </Route>
        </Routes>

      </BrowserRouter>
  );
}

export default App;