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
import BoardCommunity from './pages/board/BoardCommunity';
import BoardCommunityWrite from './pages/board/BoardCommunityWrite';
import BoardCommunityDetail from './pages/board/BoardCommunityDetail';
import BoardNotice from './pages/board/BoardNotice';
import BoardNoticeWrite from './pages/board/BoardNoticeWrite';
import BoardNoticeDetail from './pages/board/BoardNoticeDetail';
import Message from "./pages/messsage/Message";
import MessageSent from "./pages/messsage/MessageSent";
import MessageTrash from "./pages/messsage/MessageTrash";
import ReceivedMessage from "./pages/messsage/ReceivedMessage";
import AttendanceManage from "./pages/attendence/AttendanceManage";
import AllCheckN from './pages/salary/Salary_allCheckN';
import SeveranceN from './pages/salary/Salary_SeveranceN'
import SeveranceY from './pages/salary/Salary_SeveranceY'
import EsMain from './pages/es/EsMain';
import EsDraftMenu from './pages/es/EsDraftMenu';
import LeaveForm from './pages/es/LeaveForm';
import RetireForm from './pages/es/RetireForm';
import SalaryForm from './pages/es/SalaryForm';
import CertificationForm from './pages/es/CertificationForm';
import MypageMain from './pages/mypage/Mypage_main';
import AttendanceSelectTime from "./pages/attendence/AttendanceSelectTime";
import EsWaitInbox from "./pages/es/EsWaitInbox";
import EsPrograssInbox from './pages/es/EsPrograssInbox';
import EsCompleteInbox from './pages/es/EsCompleteInbox';
import SalaryBonus from './pages/salary/Salary_bonus';
import BonusInsert from './pages/salary/Salary_BonusInsert';
import EsDraftInbox from './pages/es/EsDraftInbox';
import MyCalendar from './pages/calendar/MyCalendar';
import Specification from './pages/salary/Salary_Specification';
import DutyForm from './pages/es/DutyForm';
import LOAForm from './pages/es/LOAForm';
import ReinstatmentForm from './pages/es/ReinstatementForm';
import SeveranceInsert from './pages/salary/Salary_SeveranceInsert';
import SalaryInsert from './pages/salary/Salary_SalaryInsert';

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
            <Route path="/es/main" element={<EsMain />} />
            <Route path='/es/draftMenu' element={<EsDraftMenu />}/>
            <Route path='/es/leaveForm' element={<LeaveForm />}/>
            <Route path='/es/retireForm' element={<RetireForm />}/>
            <Route path='/es/salaryForm' element={<SalaryForm />}/>
            <Route path='/es/dutyForm' element={<DutyForm />}/>
            <Route path='/es/loaForm' element={<LOAForm />}/>
            <Route path='/es/reinstatementForm' element={<ReinstatmentForm />}/>
            <Route path='/es/certificationForm' element={<CertificationForm />}/>
            <Route path='/es/draftInbox' element={<EsDraftInbox />}/>
            <Route path='/es/wait' element={<EsWaitInbox />}/>
            <Route path='/es/prograss' element={<EsPrograssInbox />}/>
            <Route path='/es/complete' element={<EsCompleteInbox />}/>

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
            <Route path="/salary/Allcheck" element={ <AllCheckN />} />
            <Route path="/salary/month/insert" element={ <SalaryInsert />} />
            <Route path="/salary/severance/N" element={ <SeveranceN />} />
            <Route path="/salary/severance/Y" element={ <SeveranceY />} />
            <Route path="/salary/severance/insert" element={ <SeveranceInsert />} />
            <Route path="/salary/bonus" element={ <SalaryBonus />} />
            <Route path="/salary/bonus/insert" element={ <BonusInsert />} />

            {/* 게시판 */}
            <Route path="/board/notice" element={<BoardNotice />} />
            <Route path="/board/notice/write" element={<BoardNoticeWrite />} />
            <Route path="/board/notice/detail" element={<BoardNoticeDetail />} />
            <Route path="/board/community" element={<BoardCommunity />} />

            {/* 캘린더 */}
            <Route path="/calendar" element={<MyCalendar />} />
            <Route path="/board/community/write" element={<BoardCommunityWrite />} />
            <Route path="/board/community/detail" element={<BoardCommunityDetail/>} />

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