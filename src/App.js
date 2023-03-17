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
// import FindPassword from '../src/pages/login/FindPassword';
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
import SeveranceInsert from './pages/salary/Salary_SeveranceInsert';
import SalaryInsert from './pages/salary/Salary_SalaryInsert';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import { decodeJwt } from '../src/utils/tokenUtils';

function App() {

  const token = decodeJwt(window.localStorage.getItem("accessToken"));

  return (
      <BrowserRouter>
        <Routes>
          {/* 레이아웃 사이에 넣기 */}
          <Route index element={<Login/>} />
          {/* <Route path="/findpassword" element={<FindPassword />} /> */}
          {/* <Route path="/" element={ <Layout /> } > */}
          <Route path="/" element={<PrivateRoute authenticated={token} component={<Layout />}/>}>
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path='/main' element={ <Main />} />

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
            <Route path="/attendence/AttendanceManage" element={<AdminRoute authenticated={token} component={<AttendanceManage />}/>} />
            <Route path="/attendence/AttendanceSelectTime" element={<AdminRoute authenticated={token} component={<AttendanceSelectTime />}/>} />
            <Route path="/annual/payment" element={<AdminRoute authenticated={token} component={<AnnualPayment />}/>}/>
            <Route path="/annual/management" element={<AdminRoute authenticated={token} component={<AnnualManagement />}/>}/>
            <Route path="/annual/management/detailed" element={<AdminRoute authenticated={token} component={<AnnualManagementDetailed />}/>}/>
            <Route path="/annual/standardsManagement" element={<AdminRoute authenticated={token} component={<AnnualStandardsManagement />}/>}/>

            {/* 인사 */}
            <Route path="/organization/certification" element={<OrganiCertificate />} />
            <Route path="/organization/chart" element={<OrganizationChart />} />
            <Route path="/organization/create" element={<AdminRoute authenticated={token} component={<OrganizationCreate />}/>} />
            <Route path="/organization/retireeChart" element={<AdminRoute authenticated={token} component={<OrganizationRetireeChart />}/>} />

            {/* 급여 */}
            <Route path="/salary/check" element={ <SalaryCheck />} />
            <Route path="/salary/specification" element={ <Specification />} />
            <Route path="/salary/check/N" element={<AdminRoute authenticated={token} component={<AllCheckN />}/> } />
            <Route path="/salary/check/Y" element={<AdminRoute authenticated={token} component={<AllCheckY />}/> } />
            <Route path="/salary/check/insert" element={<AdminRoute authenticated={token} component={<SalaryInsert />}/> } />
            <Route path="/salary/severance/N" element={<AdminRoute authenticated={token} component={<SeveranceN />}/> } />
            <Route path="/salary/severance/Y" element={<AdminRoute authenticated={token} component={<SeveranceY />}/> } />
            <Route path="/salary/severance/insert" element={<AdminRoute authenticated={token} component={<SeveranceInsert />}/> } />
            <Route path="/salary/bonus" element={<AdminRoute authenticated={token} component={<SalaryBonus />}/> } />
            <Route path="/salary/bonus/insert" element={<AdminRoute authenticated={token} component={<BonusInsert />}/> } />

            {/* 게시판 */}
            <Route path="/board/notice" element={<BoardNotice />} />
            <Route path="/board/notice/write" element={<AdminRoute authenticated={token} component={<BoardNoticeWrite />}/> } />
            <Route path="/board/notice/detail" element={<BoardNoticeDetail />} />
            <Route path="/board/community" element={<BoardCommunity />} />
            <Route path="/board/community/write" element={<BoardCommunityWrite />} />
            <Route path="/board/community/detail" element={<BoardCommunityDetail/>} />

            {/* 캘린더 */}
            <Route path="/calendar" element={<MyCalendar />} />

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