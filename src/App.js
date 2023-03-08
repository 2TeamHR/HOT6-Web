import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import MypageAttendance from './pages/mypage/Mypage_attendance';
import MypageManagement from './pages/mypage/Mypage_management';
import MypageManagementUpdate from './pages/mypage/Mypage_management_update';
import MypageAttendanceHistory from './pages/mypage/Mypage_attendance_history';
import MypageAnnualHistory from './pages/mypage/Mypage_annual_history';
import AnnualStandardsManagement from './pages/attendance_management/Annual_standards_management';
import AnnualPayment from './pages/attendance_management/Annual_payment';
import AnnualManagement from './pages/attendance_management/Annual_management';
import AnnualManagementDetailed from './pages/attendance_management/Annual_management_detailed';
import OrganiCertificate from './pages/hrm/Organization_Certificate';
import OrganizationCreate from './pages/hrm/Organization_create';
import OrganizationChart from './pages/hrm/Organization_chart';
import OrganizationRetireeChart from './pages/hrm/Organization_retiree_chart';
import Layout from './layouts/Layout';
import Login from '../src/pages/login/Login';
import FindPassword from '../src/pages/login/FindPassword';
import ChangePassword from '../src/pages/login/ChangePassword';
import SalaryCheck from './pages/salary/Salary_check';
import Community from './pages/board/Community';
import CommunityWrite from './pages/board/CommunityWrite';
import CommunityDetail from './pages/board/CommunityDetail';
import Notice from './pages/board/Notice';
import NoticeWrite from './pages/board/NoticeWrite';
import NoticeDetail from './pages/board/NoticeDetail';
import Message from "./pages/messsage/Message";
import MessageSent from "./pages/messsage/MessageSent";
import MessageTrash from "./pages/messsage/MessageTrash";
import ReceivedMessage from "./pages/messsage/ReceivedMessage";
import AttendanceManage from "./pages/attendence/AttendanceManage";
import AllCheckN from './pages/salary/Salary_allCheckN';
import AllCheckY from './pages/salary/Salary_allCheckY';
import SeveranceN from './pages/salary/Salary_SeveranceN'
import SeveranceY from './pages/salary/Salary_SeveranceY'
import EaMain from './pages/ea/EaMain';
import EaDraftMenu from './pages/ea/EaDraftMenu';
import LeaveForm from './pages/ea/LeaveForm';
import RetireForm from './pages/ea/RetireForm';
import SalaryForm from './pages/ea/SalaryForm';
import CertificationForm from './pages/ea/CertificationForm';
import MypageMain from './pages/mypage/Mypage_main';
import AttendanceSelectTime from "./pages/attendence/AttendanceSelectTime";
import EaWaitInbox from "./pages/ea/EaWaitInbox";
import EaPrograssInbox from './pages/ea/EaPrograssInbox';
import EaCompleteInbox from './pages/ea/EaCompleteInbox';
import SalaryBonus from './pages/salary/Salary_bonus';
import BonusInsert from './pages/salary/Salary_BonusInsert';
import EaDraftInbox from './pages/ea/EaDraftInbox';
import MyCalendar from './pages/calendar/MyCalendar';
import Specification from './pages/salary/Salary_Specification';
import DutyForm from './pages/ea/DutyForm';
import LOAForm from './pages/ea/LOAForm';
import ReinstatmentForm from './pages/ea/ReinstatementForm';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* 레이아웃 사이에 넣기 */}
          <Route index element={<Login />} />
          <Route path="/findpassword" element={<FindPassword />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/" element={ <Layout /> } >
            <Route path='/main' element={ <Main />} />
            <Route path="/attendence/AttendanceManage" element={<AttendanceManage />} />
            <Route path="/attendence/AttendanceSelectTime" element={<AttendanceSelectTime />} />

            {/* 전자결재 */}
            <Route path="/ea/main" element={<EaMain />} />
            <Route path='/ea/draftMenu' element={<EaDraftMenu />}/>
            <Route path='/ea/leaveForm' element={<LeaveForm />}/>
            <Route path='/ea/retireForm' element={<RetireForm />}/>
            <Route path='/ea/salaryForm' element={<SalaryForm />}/>
            <Route path='/ea/dutyForm' element={<DutyForm />}/>
            <Route path='/ea/loaForm' element={<LOAForm />}/>
            <Route path='/ea/reinstatementForm' element={<ReinstatmentForm />}/>
            <Route path='/ea/certificationForm' element={<CertificationForm />}/>
            <Route path='/ea/draftInbox' element={<EaDraftInbox />}/>
            <Route path='/ea/wait' element={<EaWaitInbox />}/>
            <Route path='/ea/prograss' element={<EaPrograssInbox />}/>
            <Route path='/ea/complete' element={<EaCompleteInbox />}/>

            {/* 마이페이지 */}
            <Route path="/mypage/main" element={ <MypageMain />} />
            <Route path="/mypage/attendance" element={<MypageAttendance />}/>
            <Route path="/mypage/management" element={<MypageManagement />}/>
            <Route path="/mypage/management/update" element={<MypageManagementUpdate />}/>
            <Route path="/mypage/attendance/history" element={<MypageAttendanceHistory />}/>
            <Route path="/mypage/annual/history" element={<MypageAnnualHistory />}/>

            {/* 근태관리 */}
            <Route path="/annual/standardsManagement" element={<AnnualStandardsManagement />}/>
            <Route path="/annual/payment" element={<AnnualPayment />}/>
            <Route path="/annual/management" element={<AnnualManagement />}/>
            <Route path="/annual/management/detailed" element={<AnnualManagementDetailed />}/>

            {/* 인사 */}
            <Route path="/organization/certification" element={<OrganiCertificate />} />
            <Route path="/organization/chart" element={<OrganizationChart />} />
            <Route path="/organization/creacte" element={<OrganizationCreate />} />
            <Route path="/organization/retireeChart" element={<OrganizationRetireeChart />} />

            {/* 급여 */}
            <Route path="/salary/check" element={ <SalaryCheck />} />
            <Route path="/salary/specification" element={ <Specification />} />
            <Route path="/salary/checkN" element={ <AllCheckN />} />
            <Route path="/salary/checkY" element={ <AllCheckY />} />
            <Route path="/salary/severanceN" element={ <SeveranceN />} />
            <Route path="/salary/severanceY" element={ <SeveranceY />} />
            <Route path="/salary/bonus" element={ <SalaryBonus />} />
            <Route path="/salary/bonus/insert" element={ <BonusInsert />} />

            {/* 게시판 */}
            <Route path="/board/notice" element={<Notice />} />
            <Route path="/board/notice/write" element={<NoticeWrite />} />
            <Route path="/board/notice/detail" element={<NoticeDetail />} />
            <Route path="/board/community" element={<Community />} />

            {/* 캘린더 */}
            <Route path="/calendar" element={<MyCalendar />} />
            <Route path="/board/community/write" element={<CommunityWrite />} />
            <Route path="/board/community/detail" element={<CommunityDetail/>} />

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