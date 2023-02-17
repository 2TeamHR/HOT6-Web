import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import MyPageMain from './pages/mypage/mypage_main'
import Layout from './layouts/Layout';
import Login from '../src/pages/login/Login';
import SalaryCheck from './pages/salary/Salary_check';
import CertificationForm from './pages/es/CertificationForm'


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
          </Route>
          

      </Routes>

    </BrowserRouter>
  );
}

export default App;
