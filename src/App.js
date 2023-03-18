import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'

import MypageMain from './pages/mypage/Mypage_main';
import MypageAttendance from './pages/mypage/Mypage_attendance';
import MypageManagement from './pages/mypage/Mypage_management';
import MypageManagementUpdate from './pages/mypage/Mypage_management_update';
import MypageAttendanceHistory from './pages/mypage/Mypage_attendance_history';
import MypageAnnualHistory from './pages/mypage/Mypage_annual_history';

import MyCalendar from './pages/calendar/MyCalendar';

import AnnualStandardsManagement from './pages/attendance_management/Annual_standards_management';
import AnnualPayment from './pages/attendance_management/Annual_payment';
import AnnualManagement from './pages/attendance_management/Annual_management';
import AnnualManagementDetailed from './pages/attendance_management/Annual_management_detailed';
import AttendanceManage from "./pages/attendence/AttendanceManage";
import AttendanceSelectTime from "./pages/attendence/AttendanceSelectTime";

import OrganiCertificate from './pages/hrm/Organization_Certificate';
import OrganizationCreate from './pages/hrm/Organization_create';
import OrganizationChart from './pages/hrm/Organization_chart';
import OrganizationRetireeChart from './pages/hrm/Organization_retiree_chart';

import Layout from './layouts/Layout';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

import Login from '../src/pages/login/Login';
// import FindPassword from '../src/pages/login/FindPassword';
import ChangePassword from '../src/pages/login/ChangePassword';

import BoardCommunity from './pages/board/BoardCommunity';
import BoardCommunityWrite from './pages/board/BoardCommunityWrite';
import BoardCommunityDetail from './pages/board/BoardCommunityDetail';
import BoardCommunityUpdate from './pages/board/BoardCommunityUpdate';
import BoardNotice from './pages/board/BoardNotice';
import BoardNoticeWrite from './pages/board/BoardNoticeWrite';
import BoardNoticeUpdate from './pages/board/BoardNoticeUpdate';

import BoardNoticeDetail from './pages/board/BoardNoticeDetail';
import Message from "./pages/messsage/Message";
import MessageSent from "./pages/messsage/MessageSent";
import MessageTrash from "./pages/messsage/MessageTrash";

import ReceivedMessage from "./pages/messsage/ReceivedMessage";
import SalaryCheck from './pages/salary/Salary_check';
import AllCheckN from './pages/salary/Salary_allCheckN';
// import SeveranceN from './pages/salary/Salary_SeveranceN'
// import SeveranceY from './pages/salary/Salary_SeveranceY'
// import SeveranceInsert from './pages/salary/Salary_SeveranceInsert';
import SalaryBonus from './pages/salary/Salary_bonus';
import BonusInsert from './pages/salary/Salary_BonusInsert';
import Specification from './pages/salary/Salary_Specification';

import SalaryInsert from './pages/salary/Salary_SalaryInsert';
import EaMain from './pages/ea/EaMain';
import EaDraftMenu from './pages/ea/EaDraftMenu';
import LeaveForm from './pages/ea/LeaveForm';
import RetireForm from './pages/ea/RetireForm';
import SalaryForm from './pages/ea/SalaryForm';
import CertificationForm from './pages/ea/CertificationForm';
import EaWaitInbox from "./pages/ea/EaWaitInbox";
import EaPrograssInbox from './pages/ea/EaPrograssInbox';
import EaCompleteInbox from './pages/ea/EaCompleteInbox';
import EaDraftInbox from './pages/ea/EaDraftInbox';
import DutyForm from './pages/ea/DutyForm';
import LOAForm from './pages/ea/LOAForm';
import ReinstatmentForm from './pages/ea/ReinstatementForm';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC routes */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/findpassword" element={<FindPassword />} /> */}

        {/* PRIVATE routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>

            <Route index element={<Main />} />

            {/* 전자결재 */}
            <Route path="/ea/main" element={<EaMain />} />
            <Route path='/ea/draftMenu' element={<EaDraftMenu />} />
            <Route path='/ea/leaveForm' element={<LeaveForm />} />
            <Route path='/ea/retireForm' element={<RetireForm />} />
            <Route path='/ea/salaryForm' element={<SalaryForm />} />
            <Route path='/ea/dutyForm' element={<DutyForm />} />
            <Route path='/ea/loaForm' element={<LOAForm />} />
            <Route path='/ea/reinstatementForm' element={<ReinstatmentForm />} />
            <Route path='/ea/certificationForm' element={<CertificationForm />} />
            <Route path='/ea/draftInbox' element={<EaDraftInbox />} />
            <Route path='/ea/wait' element={<EaWaitInbox />} />
            <Route path='/ea/prograss' element={<EaPrograssInbox />} />
            <Route path='/ea/complete' element={<EaCompleteInbox />} />

            {/* 마이페이지 */}
            <Route path="/mypage/main" element={ <MypageMain />} />
            <Route path="/mypage/attendance" element={<MypageAttendance />}/>
            <Route path="/mypage/management" element={<MypageManagement />}/>
            <Route path="/ChangePassword" element={<ChangePassword />}/>
            <Route path="/mypage/management/update" element={<MypageManagementUpdate />}/>
            <Route path="/mypage/attendance/history" element={<MypageAttendanceHistory />}/>
            <Route path="/mypage/annual/history" element={<MypageAnnualHistory />}/>

            {/* 인사 */}
            <Route path="/organization/chart" element={<OrganizationChart />} />
            <Route path="/organization/certification" element={<OrganiCertificate />} />

            {/* 급여 */}
            <Route path="/salary/check" element={ <SalaryCheck />} />
            <Route path="/salary/specification" element={ <Specification />} />

            {/* 게시판 */}
            <Route path="/board/notice" element={<BoardNotice />} />
            <Route path="/board/notice/:noticeCode" element={<BoardNoticeDetail />} />
            <Route path="/board/community/:boardCode" element={<BoardCommunityDetail />} />
            <Route path="/board/community" element={<BoardCommunity />} />
            <Route path="/board/community/write" element={<BoardCommunityWrite />} />
            <Route path="/board/community/update" element={<BoardCommunityUpdate />} />

            {/* 캘린더 */}
            <Route path="/calendar" element={<MyCalendar />} />

            {/* 메세지 */}
            <Route path="/messsage/message" element={<Message />} />
            <Route path="/messsage/MessageSent" element={<MessageSent />} />
            <Route path="/messsage/MessageTrash" element={<MessageTrash />} />
            <Route path="/messsage/receivedMessage" element={<ReceivedMessage />} />

          </Route>
        </Route>

        {/* ADMIN routes */}
        <Route element={<AdminRoute />}>
          <Route path="/" element={<Layout />}>

            {/* 근태관리 */}
            <Route path="/attendence/AttendanceManage" element={<AttendanceManage />} />
            <Route path="/attendence/AttendanceSelectTime" element={<AttendanceSelectTime />} />
            <Route path="/annual/payment" element={<AnnualPayment />}/>
            <Route path="/annual/management" element={<AnnualManagement />}/>
            <Route path="/annual/management/detailed" element={<AnnualManagementDetailed />}/>
            <Route path="/annual/standardsManagement" element={<AnnualStandardsManagement />}/>

            {/* 인사 */}
            <Route path="/organization/create" element={<OrganizationCreate />} />
            <Route path="/organization/retireeChart" element={<OrganizationRetireeChart />} />

            {/* 급여 */}
            <Route path="/salary/check/All" element={<AllCheckN />} />
            <Route path="/salary/month/insert" element={<SalaryInsert />} />
            {/* <Route path="/salary/severance/N" element={<SeveranceN />} /> */}
            {/* <Route path="/salary/severance/Y" element={<SeveranceY />} /> */}
            {/* <Route path="/salary/severance/insert" element={<SeveranceInsert />} /> */}
            <Route path="/salary/bonus" element={<SalaryBonus />} />
            <Route path="/salary/bonus/insert" element={<BonusInsert />}/>

            {/* 게시판 */}
            <Route path="/board/notice/write" element={<BoardNoticeWrite />} />
            <Route path="/board/notice/update" element={<BoardNoticeUpdate />} />

          </Route>
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;