import { combineReducers } from 'redux';
import salaryReducer from './SalaryModule';
import productReducer from './LeaveModule';

const rootReducer = combineReducers({

    salaryReducer,
    productReducer,

});

export default rootReducer;