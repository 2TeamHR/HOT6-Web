import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_ANNUAL             = 'annual/GET_ANNUAL';
export const POST_ANNUAL            = 'annual/POST_ANNUAL';
export const DELETE_ANNUAL          = 'annual/DELETE_ANNUAL';
export const GET_MYLEAVEINFO        = 'annual/GET_MYLEAVEINFO';
export const GET_ANNUALAll          = 'annual/GET_ANNUALAll';
export const GET_MEMBERLEAVEDETAIL  = 'annual/GET_MEMBERLEAVEDETAIL'

const actions = createActions({
    [GET_ANNUAL]: () => {},
    [POST_ANNUAL]: () => {},
    [DELETE_ANNUAL]: () => {},
    [GET_MYLEAVEINFO]: () => {},
    [GET_ANNUALAll]: () => {},
    [GET_MEMBERLEAVEDETAIL]: () => {},
});

/* 리듀서 */
const leaveReducer = handleActions(
    {
        [GET_ANNUAL]: (state, { payload }) => {
            
            return payload;
        },
        [POST_ANNUAL]: (state, { payload }) => {

            return payload;
        },
        [DELETE_ANNUAL]: (state, { payload }) => {

            return payload;
        },       
        [GET_MYLEAVEINFO]: (state, { payload }) => {

            return payload;
        },       
        [GET_ANNUALAll]: (state, { payload }) => {

            return payload;
        },       
        [GET_MEMBERLEAVEDETAIL]: (state, { payload }) => {

            return payload;
        },       
    },
    initialState
);

export default leaveReducer;