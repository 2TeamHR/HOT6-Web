import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BOARDNOTICE = 'boardNotice/GET_BOARDNOTICE';
export const GET_NOTICEDETAIL= 'noticeDetail/GET_NOTICEDETAIL';
export const PUT_NOTICE= 'notice/PUT_NOTICE';

const actions = createActions({
    [GET_BOARDNOTICE]: () => {},
    [GET_NOTICEDETAIL]: () => {},
    [PUT_NOTICE]: () => {}
});

/* 리듀서 */
const boardNoticeReducer = handleActions(
    {
        [GET_BOARDNOTICE]: (state, {payload}) => {

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