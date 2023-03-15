import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ rules, component: Component }) {

    console.log('rules : ', rules);
    console.log('rules : ', rules.auth);

  if (rules) {

    return Component;
  } else {
    
    alert("접근할 수 없는 페이지입니다.");
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
