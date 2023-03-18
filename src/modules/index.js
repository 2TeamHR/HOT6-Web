import { combineReducers } from 'redux';
import salaryReducer from './SalaryModule';
import leaveReducer from './LeaveModule';
import memberReducer from './MemberModule';
import organizationReducer from './OrganizationModule';
import boardNoticeReducer from "./BoardNoticeModule";
import calendarReducer from "./CalendarModule"
import eaDocumentReducer from "./EaDocumentModule"
import attendanceReducer from './AttendanceModule';

const rootReducer = combineReducers({

    salaryReducer
    , leaveReducer
    , memberReducer
    , organizationReducer
    , boardNoticeReducer
    , calendarReducer
    , eaDocumentReducer
    , attendanceReducer
});

export default rootReducer;