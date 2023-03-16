// import React from 'react';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { decodeJwt } from '../utils/tokenUtils';

// function PrivateRoute() {
//     const token = decodeJwt(window.localStorage.getItem('accessToken'));

//     const location = useLocation();

//     return (

//         token ? <Outlet /> : <Navigate to='/login' state={{from: location}} replace />
//     )
// }

// export default PrivateRoute 

// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const PrivateRoute = ({ allowedRoles }) => {
//     const { auth } = useAuth();
//     const location = useLocation();

//     return (
//         auth?.roles?.find(role => allowedRoles?.includes(role))
//             ? <Outlet />
//             : auth?.user
//                 ? <Navigate to="/unauthorized" state={{ from: location }} replace />
//                 : <Navigate to="/login" state={{ from: location }} replace />
//     );
// }

// export default PrivateRoute;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { decodeJwt } from '../utils/tokenUtils';

function PrivateRoute() {
    
    const authenticated = decodeJwt(window.localStorage.getItem('accessToken'));

    return (
        authenticated?.auth?.includes('ROLE_MEMBER') ? <Outlet /> : <Navigate to='/login' {...alert("접근할 수 없는 페이지입니다.")} />
    )
}

export default PrivateRoute 