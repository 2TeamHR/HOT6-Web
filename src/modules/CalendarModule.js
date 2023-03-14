import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_CALENDAR       = 'calendarMain/GET_CALENDAR';
export const POST_CALENDAR      = 'calendarMain/POST_CALENDAR';
export const PUT_CALENDAR       = 'calendarMain/PUT_CALENDAR';
export const DELETE_CALENDAR    = 'calendarMain/DELETE_CALENDAR';

const actions = createActions({
    [GET_CALENDAR]: () => {},
    [POST_CALENDAR]: () => {},
    [PUT_CALENDAR]: () => {},
    [DELETE_CALENDAR]: () => {},
});

/* 리듀서 */
const calendarReducer = handleActions(
    {
        [GET_CALENDAR]: (state, {payload}) => {

            return payload;
        },
        [POST_CALENDAR]: (state, {payload}) => {

            return payload;
        },
        [PUT_CALENDAR]: (state, {payload}) => {

            return payload;
        },
        [DELETE_CALENDAR]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default calendarReducer;