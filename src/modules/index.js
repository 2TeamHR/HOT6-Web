import { combineReducers } from 'redux';
import salaryReducer from './SalaryModule';
import productReducer from './LeaveModule';
import memberReducer from './MemberModule';

const rootReducer = combineReducers({

    salaryReducer,
    productReducer,
    memberReducer,

});

export default rootReducer;