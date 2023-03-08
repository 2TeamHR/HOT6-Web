import { combineReducers } from 'redux';
import salaryReducer from './SalaryModule';
import leaveReducer from './LeaveModule';
import memberReducer from './MemberModule';
import boardNoticeReducer from './BoardNoticeModule';


const rootReducer = combineReducers({

    salaryReducer,
    leaveReducer,
    memberReducer,
    boardNoticeReducer

});

export default rootReducer;