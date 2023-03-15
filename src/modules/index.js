import { combineReducers } from 'redux';
import salaryReducer from './SalaryModule';
import leaveReducer from './LeaveModule';
import memberReducer from './MemberModule';
import organizationReducer from './OrganizationModule';
import boardNoticeReducer from "./BoardNoticeModule";
import calendarReducer from "./CalendarModule"
import eaDocumentReducer from "./EaDocumentModule"

const rootReducer = combineReducers({

    salaryReducer
    , leaveReducer
    , memberReducer
    , organizationReducer
    , boardNoticeReducer
    , calendarReducer
    , eaDocumentReducer
});

export default rootReducer;