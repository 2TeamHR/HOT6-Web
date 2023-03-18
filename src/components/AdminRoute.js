import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { decodeJwt } from '../utils/tokenUtils';

function AdminRoute() {

  const authenticated = decodeJwt(window.localStorage.getItem('accessToken'));
  
  return (
    authenticated?.auth?.includes('ROLE_ADMIN') ? <Outlet /> : <Navigate to='/' {...alert("접근할 수 없는 페이지입니다.")} />
  )
}

export default AdminRoute 