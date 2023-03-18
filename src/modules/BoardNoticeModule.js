import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BOARDNOTICE = 'boardNotice/GET_BOARDNOTICE';
export const POST_BOARDNOTICE = 'boardNotice/POST_BOARDNOTICE';
export const PUT_BOARDNOTICE = 'boardNotice/PUT_BOARDNOTICE';
export const GET_NOTICEDETAIL= 'noticeDetail/GET_NOTICEDETAIL';
export const PUT_NOTICE= 'notice/PUT_NOTICE';

const actions = createActions({
    [GET_BOARDNOTICE]: () => {},
    [POST_BOARDNOTICE]: () => {},
    [PUT_BOARDNOTICE]: () => {},
    [GET_NOTICEDETAIL]: () => {},
    [PUT_NOTICE]: () => {}
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
        [GET_NOTICEDETAIL]: (state, {payload}) => {

            return payload;
        },
        [PUT_NOTICE]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default boardNoticeReducer;