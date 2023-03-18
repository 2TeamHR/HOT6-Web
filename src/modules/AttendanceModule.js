import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MYATTENDANCE = 'mypageAttendance/GET_MYATTENDANCE';


const actions = createActions({
    [GET_MYATTENDANCE]: () => {
    },
});

/* 리듀서 */
const attendanceReducer = handleActions(
    {
        [GET_MYATTENDANCE]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default attendanceReducer;