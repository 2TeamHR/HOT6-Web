import { combineReducers } from 'redux';
import salaryReducer from './SalaryModule';
import leaveReducer from './LeaveModule';
import memberReducer from './MemberModule';
import organizationReducer from './OrganizationModule';
import boardCommunityReducer from "./BoardCommunityModule";
import boardNoticeReducer from "./BoardNoticeModule";
import calendarReducer from "./CalendarModule"
import eaDocumentReducer from "./EaDocumentModule"
import eaDocumentReducer2 from "./EaDocumentModule2"
import attendanceReducer from './AttendanceModule';
import eaDocumentInsertReducer from './EaDocumentInsertModule';

const rootReducer = combineReducers({

    salaryReducer
    , leaveReducer
    , memberReducer
    , organizationReducer
    , boardCommunityReducer
    , boardNoticeReducer
    , calendarReducer
    , eaDocumentReducer
    , attendanceReducer
    , eaDocumentReducer2
    , eaDocumentInsertReducer
});

export default rootReducer;