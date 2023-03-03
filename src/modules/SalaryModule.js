import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_SALARY = 'salary/GET_SALARY';
export const GET_PAYMENT_SALARY = 'salary/check/GET_PAYMENT_SALARY'
 
const actions = createActions({
    [GET_SALARY]: () => {},
    [GET_PAYMENT_SALARY]: () => {},
});

/* 리듀서 */
const salaryReducer = handleActions(
    {
        [GET_SALARY]: (state, { payload }) => {

            return payload;
        },
        [GET_PAYMENT_SALARY]: (state, { payload}) => {
            
            return payload;
        },
    },
    initialState
);

export default salaryReducer; 