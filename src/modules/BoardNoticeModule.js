import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BOARDNOTICE = 'boardNotice/GET_BOARDNOTICE';
export const POST_BOARDNOTICE = 'boardNotice/POST_BOARDNOTICE';
export const PUT_BOARDNOTICE = 'boardNotice/PUT_BOARDNOTICE';

const actions = createActions({
    [GET_BOARDNOTICE]: () => {},
    [POST_BOARDNOTICE]: () => {},
    [PUT_BOARDNOTICE]: () => {}
});

/* 리듀서 */
const boardNoticeReducer = handleActions(
    {
        [GET_BOARDNOTICE]: (state, {payload}) => {

            return payload;
        },
        [POST_BOARDNOTICE]: (state, {payload}) => {

            return payload;
        },
        [PUT_BOARDNOTICE]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default boardNoticeReducer;