import { combineReducers } from 'redux';
import salaryReducer from './SalaryModule';

const rootReducer = combineReducers({

    salaryReducer,

});

export default rootReducer;