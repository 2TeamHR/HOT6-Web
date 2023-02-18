import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import MyPageMain from './pages/mypage/mypage_main'
import Layout from './layouts/Layout';
import Login from '../src/pages/login/Login';
import SalaryCheck from './pages/salary/Salary_check';
import CertificationForm from './pages/es/CertificationForm'
import FindPassword from '../src/pages/login/FindPassword';
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
          <Route path="/login" element={ <Login />} />
          <Route path="/" element={ <Layout /> } >
            <Route index element={ <Main />} />
            <Route path="/mypageMain" element={ <MyPageMain />} />
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
          </Route>


        </Routes>

      </BrowserRouter>
  );
}

export default App;