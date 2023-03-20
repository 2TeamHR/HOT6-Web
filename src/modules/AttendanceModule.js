import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MYATTENDANCE           = 'myPageAttendance/GET_MYATTENDANCE';
export const GET_MYATTENDANCESEARCH     = 'myPageAttendance/GET_MYATTENDANCESEARCH';
export const GET_MYPAGESELECTATTENDANCE = 'myPageAttendance/GET_MYPAGESELECTATTENDANCE';
export const POST_REASON                = 'myPageAttendance/POST_REASON';
export const GET_REASONFILE             = 'attendance/GET_REASONFILE';
export const POST_MYATTENDANCESEARCH    = 'myPageAttendance/POST_MYATTENDANCESEARCH';

const actions = createActions({
    [GET_MYATTENDANCE]: () => {
    },
    [GET_MYATTENDANCESEARCH]: () => {
    },
    [GET_MYPAGESELECTATTENDANCE]: () => {
    },
    [POST_REASON]: () => {
    },
    [POST_MYATTENDANCESEARCH]: () => {
    },
    [GET_REASONFILE]: () => {
    },
});

/* 리듀서 */
const attendanceReducer = handleActions(
    {
        [GET_MYATTENDANCE]: (state, {payload}) => {
            return payload;
        },
        [GET_MYATTENDANCESEARCH]: (state, {payload}) => {
            return payload;
        },
        [GET_MYPAGESELECTATTENDANCE]: (state, {payload}) => {
            return payload;
        },
        [POST_REASON]: (state, {payload}) => {
            return payload;
        },
        [POST_MYATTENDANCESEARCH]: (state, {payload}) => {
            return payload;
        },
        [GET_REASONFILE]: (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default attendanceReducer;