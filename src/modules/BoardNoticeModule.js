import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BOARDNOTICE = 'boardNotice/GET_BOARDNOTICE';

const actions = createActions({
    [GET_BOARDNOTICE]: () => {
    },
});

/* 리듀서 */
const boardNoticeReducer = handleActions(
    {
        [GET_BOARDNOTICE]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default boardNoticeReducer;