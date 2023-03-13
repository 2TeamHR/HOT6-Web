import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MEMBER     = 'member/GET_MEMBER';
export const GET_SIMPLEMEMBER     = 'member/GET_SIMPLEMEMBER';
export const POST_LOGIN     = 'member/POST_LOGIN';
export const POST_REGISTER  = 'member/POST_REGISTER';
export const PUT_MYINFO     = 'member/PUT_MYINFO';

const actions = createActions({
    [GET_MEMBER]: () => {},
    [GET_SIMPLEMEMBER]: () => {},
    [POST_LOGIN]: () => {},
    [POST_REGISTER]: () => {},
    [PUT_MYINFO]: () => {}
});

/* 리듀서 */
const memberReducer = handleActions(
    {
        [GET_MEMBER]: (state, { payload }) => {

            return payload;
        },
        [GET_SIMPLEMEMBER]: (state, { payload }) => {

            return payload;
        },
        [POST_LOGIN]: (state, { payload }) => {

            return payload;
        },
        [POST_REGISTER]: (state, { payload }) => {

            return payload;
        },
        [PUT_MYINFO]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default memberReducer;