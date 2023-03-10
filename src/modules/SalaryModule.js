import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_SALARY = 'salary/check/GET_SALARY';
export const GET_PAYMENT_SALARY = 'salary/check/GET_PAYMENT_SALARY';
export const GET_SEVERANCE_SALARY = 'salary/severance/GET_SEVERANCE_PAYMENT';
export const GET_MEMBERNAME_SALARY = 'salary/check/insert/GET_MEMBERNAME_SALARY';
export const PUT_SALARY = 'salary/check/N/PUT_SALARY';

export const POST_BONUS_SALARY = 'salary/bonus/insert/POST_BONUS_SALARY';
 
const actions = createActions({
    [GET_SALARY]: () => {},
    [GET_PAYMENT_SALARY]: () => {},
    [GET_MEMBERNAME_SALARY]: () => {},
    [GET_SEVERANCE_SALARY]: () => {},
    [PUT_SALARY]: () => {},
    [POST_BONUS_SALARY]: () => {},

});

/* 리듀서 */
const salaryReducer = handleActions(
    {
        [GET_SALARY]: (state, { payload }) => {

            return payload;
        },
        [GET_PAYMENT_SALARY]: (state, { payload }) => {
            
            return payload;
        },
        [GET_SEVERANCE_SALARY]: (state, { payload }) => {
            
            return payload;
        },
        [GET_MEMBERNAME_SALARY]: (state, { payload }) => {
            
            return payload;
        },
        [POST_BONUS_SALARY]: (state, { payload }) => {

        },
        [PUT_SALARY]: (state, { payload }) => {

        },
    },
    initialState
);

export default salaryReducer; 