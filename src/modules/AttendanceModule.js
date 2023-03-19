import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MYATTENDANCE           = 'myPageAttendance/GET_MYATTENDANCE';
export const GET_MYPAGESELECTATTENDANCE = 'myPageAttendance/GET_MYPAGESELECTATTENDANCE';
export const POST_REASON                = 'myPageAttendance/POST_REASON';

const actions = createActions({
    [GET_MYATTENDANCE]: () => {
    },
    [GET_MYPAGESELECTATTENDANCE]: () => {
    },
    [POST_REASON]: () => {
    },
});

/* 리듀서 */
const attendanceReducer = handleActions(
    {
        [GET_MYATTENDANCE]: (state, {payload}) => {
            return payload;
        },
        [GET_MYPAGESELECTATTENDANCE]: (state, {payload}) => {
            return payload;
        },
        [POST_REASON]: (state, {payload}) => {
            return payload;
        },
    },
    initialState
);

export default attendanceReducer;