import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
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
import EsDraft from './pages/es/EsDraft';
import LeaveForm from './pages/es/LeaveForm';
import RetireForm from './pages/es/RetireForm';
import SalaryForm from './pages/es/SalaryForm';
import CertificationForm from './pages/es/CertificationForm';
import MypageMain from './pages/mypage/mypage_main';
import OrganiCertification from './pages/HRM/Organization_Certification';

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
            <Route path="/attendence/AttendanceManage" element={<AttendanceManage />} />
            <Route path="/schedule/main" element={<ScheduleMain />} />

            {/* 전자결재 */}
            <Route path="/es/main" element={<EsMain />} />
            <Route path='/es/draft' element={<EsDraft />}/>
            <Route path='/es/leaveForm' element={<LeaveForm />}/>
            <Route path='/es/retireForm' element={<RetireForm />}/>
            <Route path='/es/salaryForm' element={<SalaryForm />}/>
            <Route path='/es/certificationFrom' element={<CertificationForm />}/>

            {/* 마이페이지 */}
            <Route path="/mypage/main" element={ <MypageMain />} />
            <Route path="/mypage/attendance" element={<MypageAttendance />}/>
            <Route path="/mypage/management" element={<MypageManagement />}/>
            <Route path="/mypage/management/update" element={<MypageManagementUpdate />}/>
            <Route path="/mypage/attendance/history" element={<MypageAttendanceHistory />}/>
            <Route path="/mypage/annual/history" element={<MypageAnnualHistory />}/>

           {/* 근태관리 */}
            <Route path="/annual/history" element={<AnnualHistory />}/>
            <Route path="/annual/payment" element={<AnnualPayment />}/>
            <Route path="/annual/management" element={<AnnualManagement />}/>
            <Route path="/annual/management/detailed" element={<AnnualManagementDetailed />}/>

            {/* 인사 */}
            <Route path="/organization/chart" element={<OrganizationChart />}/>
            <Route path="/organization/create" element={<OrganizationCreate />}/>
            <Route path="/organization/certification" element={<OrganiCertification />} />

            {/* 급여 */}
            <Route path="/salary/check" element={ <SalaryCheck />} />
            <Route path="/salary/checkN" element={ <AllCheckN />} />
            <Route path="/salary/checkY" element={ <AllCheckY />} />
            <Route path="/salary/severanceN" element={ <SeveranceN />} />
            <Route path="/salary/severanceY" element={ <SeveranceY />} />

            {/* 게시판 */}
            <Route path="/board/notice" element={<Notice />} />
            <Route path="/board/community" element={<Community />} />
            <Route path="/board/notice" element={<Notice />} />

            {/* 메세지 */}
            <Route path="/messsage/message" element={<Message />} />
            <Route path="/messsage/MessageSent" element={<MessageSent />} />
            <Route path="/messsage/MessageTrash" element={<MessageTrash />} />
            <Route path="/messsage/receivedMessage" element={<ReceivedMessage />} />
          </Route>
        </Routes>

      </BrowserRouter>
  );
}

export default App;