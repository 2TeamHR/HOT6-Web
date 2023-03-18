import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { decodeJwt } from '../utils/tokenUtils';

function PrivateRoute() {
    
    const authenticated = decodeJwt(window.localStorage.getItem('accessToken'));

    return (
        authenticated?.auth?.includes('ROLE_MEMBER') ? <Outlet /> : <Navigate to='/login' {...alert("접근할 수 없는 페이지입니다.")} />
    )
}

export default PrivateRoute;