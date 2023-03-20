import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_SALARY = 'salary/check/GET_SALARY';
export const GET_SALARY_MODAL = 'salary/check/detail/GET_SALARY_MODAL';
export const GET_PAYMENT_SALARY = 'salary/check/GET_PAYMENT_SALARY';
export const GET_SEVERANCE_SALARY = 'salary/severance/N/GET_SEVERANCE_PAYMENT';
export const GET_BONUS_SALARY = 'salary/bonus/GET_BONUS_SALARY';
export const GET_MY_REQUIRE_SALARY = 'salary/my/require/GET_MY_REQUIRE_SALARY'
export const GET_REQUIRE_LIST = 'salary/require/salary/list/GET_REQUIRE_LIST'
export const GET_BONUS_MODAL = 'salary/bonus/detail/GET_BONUS_MODAL';
export const GET_MEMBERCODE_SALARY = 'salary/check/insert/GET_MEMBERNAME_SALARY';
export const GET_MEMBERCODE_BONUS = 'salary/bonus/insert/GET_MEMBERCODE_BONUS';
export const PUT_SALARY = 'salary/check/all/PUT_SALARY';
export const PUT_BONUS = 'salary/bonus/insert/PUT_BONUS'
export const POST_SALARY = 'salary/month/insert/POST_SALARY';
 
const actions = createActions({
    [GET_SALARY]: () => {},
    [GET_SALARY_MODAL]: () => {},
    [GET_BONUS_MODAL]: () => {},
    [GET_MY_REQUIRE_SALARY]: () => {},
    [GET_REQUIRE_LIST]: () => {},
    [GET_PAYMENT_SALARY]: () => {},
    [GET_MEMBERCODE_SALARY]: () => {},
    [GET_BONUS_SALARY]: () => {},
    [GET_SEVERANCE_SALARY]: () => {},
    [GET_MEMBERCODE_BONUS]: () => {},
    [PUT_SALARY]: () => {},
    [PUT_BONUS]: () => {},
    [POST_SALARY]: () => {},
    
});

/* 리듀서 */
const salaryReducer = handleActions(
    {
        [GET_SALARY]: (state, { payload }) => {

            return payload;
        },
        [GET_SALARY_MODAL]: (state, { payload }) => {

            return payload;
        },
        [GET_PAYMENT_SALARY]: (state, { payload }) => {
            
            return payload;
        },
        [GET_BONUS_SALARY]: (state, { payload }) => {

            return payload;
        },
        [GET_MY_REQUIRE_SALARY]: (state, { payload }) => {

            return payload;
        },
        [GET_REQUIRE_LIST]: (state, { payload }) => {

            return payload;
        },
        [GET_BONUS_MODAL]: (state, { payload }) => {

            return payload;
        },
        [GET_SEVERANCE_SALARY]: (state, { payload }) => {
            
            return payload;
        },
        [GET_MEMBERCODE_SALARY]: (state, { payload }) => {
            
            return payload;
        },
        [GET_MEMBERCODE_BONUS]: (state, { payload }) => {
            
            return payload;
        },
        [PUT_SALARY]: (state, { payload }) => {
            
            return payload;
        },
        [PUT_BONUS]: (state, { payload }) => {

            return payload;
        },
        [POST_SALARY]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default salaryReducer; 