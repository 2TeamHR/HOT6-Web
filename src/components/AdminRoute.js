import React from 'react';
 import { Navigate } from 'react-router-dom';

 function AdminRoute({ authenticated, component: Component }) {
    
   return (
     authenticated.auth.includes("ROLE_ADMIN") ? Component : <Navigate to='/main' {...alert("접근할 수 없는 페이지입니다.")} />
   )
 }

 export default AdminRoute 