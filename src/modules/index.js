import { combineReducers } from 'redux';
import salaryReducer from './SalaryModule';
import leaveReducer from './LeaveModule';
import memberReducer from './MemberModule';


const rootReducer = combineReducers({

    salaryReducer,
    leaveReducer,
    memberReducer

});

export default rootReducer;