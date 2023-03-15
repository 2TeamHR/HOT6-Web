import { combineReducers } from 'redux';
import salaryReducer from './SalaryModule';
import leaveReducer from './LeaveModule';
import memberReducer from './MemberModule';
import organizationReducer from './OrganizationModule';
import boardCommunityReducer from "./BoardCommunityModule";
import boardNoticeReducer from "./BoardNoticeModule";
import calendarReducer from "./CalendarModule"
import boardNoticeReducer from './BoardNoticeModule';
import calendarReducer from './CalendarModule'
import attendanceReducer from './AttendanceModule';

const rootReducer = combineReducers({

    salaryReducer
    , leaveReducer
    , memberReducer
    , organizationReducer
    , boardCommunityReducer
    , boardNoticeReducer
    , calendarReducer
    , attendanceReducer
});

export default rootReducer;