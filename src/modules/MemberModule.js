import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MEMBER             = 'member/GET_MEMBER';
export const GET_SIMPLEMEMBER       = 'member/GET_SIMPLEMEMBER';
export const GET_MEMBERTOTALCOUNT   = 'member/GET_MEMBERTOTALCOUNT';
export const POST_LOGIN             = 'member/POST_LOGIN';
export const POST_REGISTER          = 'member/POST_REGISTER';
export const PUT_MYINFO             = 'member/PUT_MYINFO';
export const PUT_PASSWORD           = 'member/PUT_PASSWORD';
export const PUT_PROFILEIMAGE       = 'member/PUT_PROFILEIMAGE';

const actions = createActions({
    [GET_MEMBER]: () => {},
    [GET_SIMPLEMEMBER]: () => {},
    [GET_MEMBERTOTALCOUNT]: () => {},
    [POST_LOGIN]: () => {},
    [POST_REGISTER]: () => {},
    [PUT_MYINFO]: () => {},
    [PUT_PASSWORD]: () => {},
    [PUT_PROFILEIMAGE]: () => {}
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
        [GET_MEMBERTOTALCOUNT]: (state, { payload }) => {

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
        },
        [PUT_PASSWORD]: (state, { payload }) => {

            return payload;
        },
        [PUT_PROFILEIMAGE]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default memberReducer;