import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ rules, component: Component }) {

    console.log('rules : ', rules);

  if (rules) {

    return Component;
  }

    alert("접근할 수 없는 페이지입니다.");
    return <Navigate to="/" />;
  
}

export default PrivateRoute;
